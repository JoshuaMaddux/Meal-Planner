import {
  THEMES,
  TOTAL_WEEKS,
  PROTEIN_OPTIONS,
  PROTEIN_META,
  PROTO_ICONS,
  TAG_CLS,
  CATS,
  CAT_ORDER,
  ALL_PLANS
} from './data/index.js';

import { getFilteredPlans, getPlanForWeekIndex } from './data/planners.js';

import {
  $,
  $$,
  clone,
  showToast,
  openSheet,
  closeSheet,
  closeOverlay,
  escapeHtml,
  safeJsonParse
} from './utils.js';

import {
  renderWeekView,
  renderShoppingView,
  renderCalendarView,
  renderThemePicker,
  renderProteinPicker,
  renderRecipeSheet,
  renderAllRecipesSheet,
  renderPrepSheet,
  syncMoreScreen,
  updateTabState
} from './ui.js';

const STORAGE_KEYS = {
  checked: 'mp_ck',
  themes: 'mp_themes',
  proteins: 'mp_proteins',
  settings: 'mp_set'
};

const DEFAULT_SETTINGS = {
  zip: '97201',
  startDate: '2025-01-05',
  familySize: '4',
  defaultProtein: 'Turkey'
};

export const state = {
  currentWeek: 0,
  calMonth: new Date().getMonth(),
  calYear: new Date().getFullYear(),
  checked: safeJsonParse(localStorage.getItem(STORAGE_KEYS.checked), {}),
  weekThemes: safeJsonParse(localStorage.getItem(STORAGE_KEYS.themes), {}),
  weekProteins: safeJsonParse(localStorage.getItem(STORAGE_KEYS.proteins), {}),
  settings: {
    ...DEFAULT_SETTINGS,
    ...safeJsonParse(localStorage.getItem(STORAGE_KEYS.settings), {})
  }
};

function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getEffectiveProtein(idx) {
  return (
    state.weekProteins[idx] ||
    state.settings.defaultProtein ||
    BASE_WEEKS[idx % BASE_WEEKS.length].protein ||
    'Turkey'
  );
}

function normalizeProteinName(original, protein) {
  const map = {
    Chicken: 'Chicken',
    Turkey: 'Turkey',
    Pork: 'Pork',
    Beef: 'Beef',
    Fish: 'Fish',
    Plant: 'Tofu or beans',
    Mixed: 'Protein of choice'
  };

  const base = map[protein];

  if (/ground/i.test(original)) {
    if (protein === 'Plant') return 'Beans or lentils';
    if (protein === 'Fish') return 'Fish';
    if (protein === 'Mixed') return 'Protein of choice';
    return `Ground ${base.toLowerCase()}`;
  }

  if (/thigh/i.test(original)) return protein === 'Plant' ? 'Tofu or beans' : `${base} thighs`;
  if (/breast/i.test(original)) return protein === 'Plant' ? 'Tofu or beans' : `${base} breast`;
  if (/drumstick/i.test(original)) return protein === 'Plant' ? 'Tofu or beans' : `${base} drumsticks`;
  if (/sausage/i.test(original)) return protein === 'Plant' ? 'GF plant sausage' : `GF ${base.toLowerCase()} sausage`;
  if (/rotisserie/i.test(original)) return protein === 'Plant' ? 'Tofu or beans' : `Cooked ${base.toLowerCase()}`;
  if (/salmon|shrimp|fish/i.test(original)) return protein === 'Plant' ? 'Tofu or beans' : base;

  return protein === 'Plant' ? 'Tofu or beans' : base;
}

function rewriteTextProtein(text, protein) {
  return text
    .replace(/\bground turkey\b/gi, protein === 'Fish' ? 'fish' : protein.toLowerCase())
    .replace(/\bturkey\b/gi, protein.toLowerCase())
    .replace(/\bchicken\b/gi, protein.toLowerCase());
}

function rewriteMealProtein(name, protein) {
  let out = name;

  out = out.replace(/turkey/gi, protein);
  out = out.replace(/chicken/gi, protein);

  if (protein === 'Fish') {
    out = out.replace(/salmon/gi, 'Fish');
    out = out.replace(/shrimp/gi, 'Fish');
  } else {
    out = out.replace(/salmon/gi, protein);
    out = out.replace(/shrimp/gi, protein);
  }

  if (protein === 'Pork') {
    out = out.replace(/sausage/gi, 'Sausage');
  } else {
    out = out.replace(/sausage/gi, protein);
  }

  return out;
}

function rewriteIngredientProtein(ing, protein) {
  const out = { ...ing };
  const low = out.n.toLowerCase();

  if (ing.c === 'protein') {
    if (/(turkey|chicken|salmon|shrimp|sausage)/i.test(out.n)) {
      out.n = normalizeProteinName(out.n, protein);
    }
  }

  if (low.includes('broth') && protein === 'Beef') out.n = 'GF beef broth';
  if (low.includes('broth') && protein === 'Plant') out.n = 'GF vegetable broth';

  return out;
}

function applyProteinOverride(data, idx) {
  const protein = getEffectiveProtein(idx);
  data.protein = protein;

  data.days = data.days.map((day) => {
    const d = clone(day);

    if (!d.anchor && d.b !== 'plant' && d.b !== 'mixed') {
      d.b = PROTEIN_META[protein]?.key || d.b;
      d.m = rewriteMealProtein(d.m, protein);

      if (d.r?.i) {
        d.r.i = d.r.i.map((ing) => rewriteIngredientProtein(ing, protein));
      }

      if (d.r?.s) {
        d.r.s = d.r.s.map((step) => rewriteTextProtein(step, protein));
      }

      if (d.r?.note) d.r.note = rewriteTextProtein(d.r.note, protein);
      if (d.r?.gfn) d.r.gfn = rewriteTextProtein(d.r.gfn, protein);
    }

    return d;
  });

  return data;
}

export function getWeekData(idx) {
  const themeId = state.weekThemes[idx];
  const source =
    themeId && THEMED_WEEKS[themeId]
      ? THEMED_WEEKS[themeId]
      : BASE_WEEKS[idx % BASE_WEEKS.length];

  const data = clone(source);
  data.weekIdx = idx;
  return applyProteinOverride(data, idx);
}

export function detectCurrentWeek() {
  const start = new Date(state.settings.startDate);
  const diff = Math.floor((new Date() - start) / 86400000);
  if (diff < 0) return 0;
  return Math.floor(diff / 7) % TOTAL_WEEKS;
}

export function buildWeekSel() {
  const sel = $('#wk-sel');
  if (!sel) return;

  sel.innerHTML = '';

  for (let i = 0; i < TOTAL_WEEKS; i++) {
    const d = getWeekData(i);
    const thId = state.weekThemes[i];
    const thName = thId ? (THEMES.find((t) => t.id === thId)?.name || '') : d.season;

    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = `Wk ${i + 1} · ${thName}`;
    sel.appendChild(o);
  }
}

export function goWk(n) {
  if (n < 0) n = TOTAL_WEEKS - 1;
  if (n >= TOTAL_WEEKS) n = 0;
  state.currentWeek = n;
  renderWeek();
}

export function getWkIngs(idx) {
  const map = {};

  getWeekData(idx).days.forEach((day) => {
    day.r?.i?.forEach((ing) => {
      const k = ing.n.toLowerCase().trim();
      if (!map[k]) {
        map[k] = {
          name: ing.n,
          qty: ing.q,
          cat: ing.c,
          key: k
        };
      }
    });
  });

  return Object.values(map);
}

export function toggleCk(key, el) {
  state.checked[key] = !state.checked[key];
  persist(STORAGE_KEYS.checked, state.checked);
  el.classList.toggle('done', state.checked[key]);
}

export function clearChecked() {
  const pfx = `w${state.currentWeek}_`;
  Object.keys(state.checked).forEach((k) => {
    if (k.startsWith(pfx)) delete state.checked[k];
  });
  persist(STORAGE_KEYS.checked, state.checked);
  renderShop();
  showToast('Cleared');
}

export function copyList() {
  const ings = getWkIngs(state.currentWeek);
  const unc = ings.filter((i) => !state.checked[`w${state.currentWeek}_${i.key}`]);
  const text =
    `Week ${state.currentWeek + 1} Shopping List\n\n` +
    unc.map((i) => `• ${i.name} · ${i.qty}`).join('\n');

  navigator.clipboard
    .writeText(text)
    .then(() => showToast('Copied to clipboard'))
    .catch(() => showToast('Copy failed'));
}

export function wSearch(item, e) {
  e.stopPropagation();
  window.open(`https://www.walmart.com/search?q=${encodeURIComponent(item)}`, '_blank');
}

export function switchTab(t, btn) {
  $$('.screen').forEach((s) => s.classList.add('hidden'));
  $$('.tb').forEach((b) => b.classList.remove('active'));

  $(`#s-${t}`)?.classList.remove('hidden');
  btn.classList.add('active');
  updateTabState(t);

  if (t === 'shop') renderShop();
  if (t === 'cal') renderCal();
  if (t === 'more') syncMoreScreen(state);
}

export async function fetchWeather() {
  const wxEl = $('#h-wx');
  const banner = $('#wx-banner');

  if (!wxEl || !banner) return;

  banner.classList.remove('on');
  wxEl.style.display = 'none';

  try {
    const g = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${state.settings.zip}&count=1&language=en&format=json`
    );
    const gd = await g.json();
    if (!gd.results?.length) return;

    const { latitude: la, longitude: lo } = gd.results[0];
    const w = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${la}&longitude=${lo}&daily=temperature_2m_max&temperature_unit=fahrenheit&timezone=auto&forecast_days=7`
    );
    const wd = await w.json();
    const temps = wd.daily.temperature_2m_max;
    const avg = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);
    const peak = Math.max(...temps);
    const ico =
      avg >= 90 ? '🥵' :
      avg >= 75 ? '☀️' :
      avg <= 35 ? '❄️' :
      avg <= 50 ? '🧥' :
      '🌤';

    wxEl.textContent = `${ico} ${avg}°F avg`;
    wxEl.style.display = 'flex';

    if (peak >= 88) banner.classList.add('on');
  } catch (_) {}
}

export function renderWeek() {
  renderWeekView({
    state,
    getWeekData,
    getEffectiveProtein,
    fetchWeather
  });
}

export function renderShop() {
  renderShoppingView({
    state,
    getWkIngs
  });
}

export function chMonth(d) {
  state.calMonth += d;
  if (state.calMonth > 11) {
    state.calMonth = 0;
    state.calYear++;
  }
  if (state.calMonth < 0) {
    state.calMonth = 11;
    state.calYear--;
  }
  renderCal();
}

export function getDayInfo(date) {
  const start = new Date(state.settings.startDate);
  const diff = Math.floor((date - start) / 86400000);
  if (diff < 0) return null;

  const wkIdx = Math.floor(diff / 7) % TOTAL_WEEKS;
  const di = diff % 7;
  const wk = getWeekData(wkIdx);

  return wk?.days[di] ? { wkIdx, di, day: wk.days[di] } : null;
}

export function renderCal() {
  renderCalendarView({
    state,
    getDayInfo
  });
}

export function recipeHTML(day) {
  const r = day.r;
  if (!r) return '';

  const ings = r.i
    .map(
      (i) =>
        `<div class="ing-row"><div class="ing-dot"></div><span class="ing-name">${escapeHtml(i.n)}</span><span class="ing-qty">${escapeHtml(i.q)}</span></div>`
    )
    .join('');

  const steps = r.s
    .map(
      (s, idx) =>
        `<div class="step-row"><div class="step-n">${idx + 1}</div><div class="step-t">${escapeHtml(s)}</div></div>`
    )
    .join('');

  return `
    <div class="rs-hdr">Ingredients</div>
    <div class="ing-list">${ings}</div>
    <div class="rs-hdr" style="margin-top:4px">Steps</div>
    <div class="step-list" style="padding-bottom:4px">${steps}</div>
    ${r.note ? `<div class="note-box note-tip">💡 ${escapeHtml(r.note)}</div>` : ''}
    ${r.gfn ? `<div class="note-box note-gf">${escapeHtml(r.gfn)}</div>` : ''}
    <div style="height:16px"></div>
  `;
}

export function openRecipe(wkIdx, di) {
  const day = getWeekData(wkIdx).days[di];
  if (!day.r) return;

  renderRecipeSheet({
    day,
    recipeHTML
  });

  openSheet('ov-recipe');
}

export function openAllRecipes() {
  renderAllRecipesSheet({
    state,
    getWeekData,
    recipeHTML
  });
  openSheet('ov-allrec');
}

export function openPrepSheet() {
  renderPrepSheet({
    state,
    getWeekData
  });
  openSheet('ov-prep');
}

export function openThemePicker() {
  renderThemePicker({
    state,
    THEMES,
    THEMED_WEEKS
  });
  openSheet('ov-theme');
}

export function selectTheme(themeId) {
  if (themeId === 'classic') delete state.weekThemes[state.currentWeek];
  else state.weekThemes[state.currentWeek] = themeId;

  persist(STORAGE_KEYS.themes, state.weekThemes);

  setTimeout(() => {
    closeSheet('ov-theme');
    buildWeekSel();
    renderWeek();
    showToast('Theme updated');
  }, 220);
}

export function openProteinPicker() {
  renderProteinPicker({
    state,
    PROTEIN_OPTIONS,
    PROTEIN_META,
    getEffectiveProtein
  });
  openSheet('ov-protein');
}

export function selectProtein(protein) {
  state.weekProteins[state.currentWeek] = protein;
  persist(STORAGE_KEYS.proteins, state.weekProteins);

  setTimeout(() => {
    closeSheet('ov-protein');
    buildWeekSel();
    renderWeek();
    if (!$('#s-shop')?.classList.contains('hidden')) renderShop();
    if (!$('#s-cal')?.classList.contains('hidden')) renderCal();
    showToast(`Protein set to ${protein}`);
  }, 220);
}

export function getWkEvents(idx) {
  const start = new Date(state.settings.startDate);
  const wkStart = new Date(start.getTime() + idx * 7 * 86400000);

  return getWeekData(idx).days.map((day, di) => {
    const d = new Date(wkStart.getTime() + di * 86400000);
    const ds = d.toISOString().split('T')[0].replace(/-/g, '');
    const nds = new Date(d.getTime() + 86400000).toISOString().split('T')[0].replace(/-/g, '');
    const r = day.r;
    const desc = r ? `Serves: ${r.sv}\\nCost: ${r.cost}\\nTime: ${r.t}` : '';

    return {
      uid: `mp-w${idx}-d${di}@fp`,
      date: ds,
      end: nds,
      title: day.m,
      desc
    };
  });
}

export function dlICS(type) {
  let evs = [];
  let fn = 'meals.ics';

  if (type === 'week') {
    evs = getWkEvents(state.currentWeek);
    fn = `meals-week-${state.currentWeek + 1}.ics`;
  } else if (type === 'all') {
    for (let i = 0; i < TOTAL_WEEKS; i++) evs = evs.concat(getWkEvents(i));
    fn = 'meals-26-weeks.ics';
  } else {
    const dim = new Date(state.calYear, state.calMonth + 1, 0).getDate();

    for (let d = 1; d <= dim; d++) {
      const info = getDayInfo(new Date(state.calYear, state.calMonth, d));
      if (info) {
        const dt = new Date(state.calYear, state.calMonth, d);
        const ds = dt.toISOString().split('T')[0].replace(/-/g, '');
        const nds = new Date(dt.getTime() + 86400000).toISOString().split('T')[0].replace(/-/g, '');
        evs.push({
          uid: `mp-m${state.calMonth}-d${d}@fp`,
          date: ds,
          end: nds,
          title: info.day.m,
          desc: ''
        });
      }
    }

    fn = `meals-${new Date(state.calYear, state.calMonth).toLocaleString('default', { month: 'long' })}-${state.calYear}.ics`;
  }

  let ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Family Meals//EN\r\nX-WR-CALNAME:Family Dinners\r\n';
  evs.forEach((e) => {
    ics += `BEGIN:VEVENT\r\nUID:${e.uid}\r\nDTSTART;VALUE=DATE:${e.date}\r\nDTEND;VALUE=DATE:${e.end}\r\nSUMMARY:🍽 ${e.title}\r\nDESCRIPTION:${e.desc}\r\nEND:VEVENT\r\n`;
  });
  ics += 'END:VCALENDAR';

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fn;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('iCal downloaded');
}

export function saveSettings() {
  state.settings.zip = $('#s-zip')?.value || DEFAULT_SETTINGS.zip;
  state.settings.startDate = $('#s-date')?.value || DEFAULT_SETTINGS.startDate;
  state.settings.familySize = $('#s-fam')?.value || DEFAULT_SETTINGS.familySize;
  state.settings.defaultProtein = $('#s-protein')?.value || DEFAULT_SETTINGS.defaultProtein;

  persist(STORAGE_KEYS.settings, state.settings);
  buildWeekSel();
  renderWeek();
  fetchWeather();
  showToast('Saved');
}

function bindGlobals() {
  window.state = state;
  window.goWk = goWk;
  window.switchTab = switchTab;
  window.openRecipe = openRecipe;
  window.openAllRecipes = openAllRecipes;
  window.openPrepSheet = openPrepSheet;
  window.openThemePicker = openThemePicker;
  window.openProteinPicker = openProteinPicker;
  window.selectTheme = selectTheme;
  window.selectProtein = selectProtein;
  window.toggleCk = toggleCk;
  window.clearChecked = clearChecked;
  window.copyList = copyList;
  window.wSearch = wSearch;
  window.chMonth = chMonth;
  window.dlICS = dlICS;
  window.saveSettings = saveSettings;
  window.closeSheet = closeSheet;
  window.closeOverlay = closeOverlay;
}

function boot() {
  bindGlobals();
  buildWeekSel();
  state.currentWeek = detectCurrentWeek();

  const sel = $('#wk-sel');
  if (sel) sel.value = String(state.currentWeek);

  renderWeek();
}

boot();
