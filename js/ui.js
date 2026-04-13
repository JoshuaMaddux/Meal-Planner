import { $, $$, escapeHtml } from './utils.js';

export function updateTabState(activeTab) {
  $$('.screen').forEach((s) => s.classList.add('hidden'));
  $(`#s-${activeTab}`)?.classList.remove('hidden');

  $$('.tb').forEach((b) => b.classList.remove('active'));
  const tabs = $$('.tb');
  const map = { week: 0, shop: 1, cal: 2, more: 3 };
  if (tabs[map[activeTab]]) tabs[map[activeTab]].classList.add('active');
}

export function syncMoreScreen(state) {
  const wn = $('#ical-wn');
  const md = $('#ical-md');
  const zip = $('#s-zip');
  const date = $('#s-date');
  const fam = $('#s-fam');
  const protein = $('#s-protein');

  if (wn) wn.textContent = state.currentWeek + 1;

  if (md) {
    const mn = new Date(state.calYear, state.calMonth).toLocaleString('default', { month: 'long' });
    md.textContent = `Download ${mn} ${state.calYear} .ics`;
  }

  if (zip) zip.value = state.settings.zip;
  if (date) date.value = state.settings.startDate;
  if (fam) fam.value = state.settings.familySize;
  if (protein) protein.value = state.settings.defaultProtein;
}

export function renderWeekView({
  state,
  getWeekData,
  getEffectiveProtein,
  fetchWeather,
  THEMES,
  PROTEIN_META,
  PROTO_ICONS,
  TAG_CLS
}) {
  const wk = getWeekData(state.currentWeek);
  const themeId = state.weekThemes[state.currentWeek];
  const theme =
    THEMES.find((t) => t.id === (themeId || wk.themeId)) || {
      name: 'Classic Family',
      emoji: '🏠',
      desc: 'Comfort food staples the whole family loves',
      heroGrad: 'linear-gradient(140deg,#1a2c1e,#0d1a0f)',
      heroBorder: 'rgba(48,209,88,.18)',
      heroGlow: 'radial-gradient(circle,rgba(48,209,88,.1),transparent 70%)',
      heroAcc: '#30D158'
    };

  const hero = $('#hero-card');
  if (hero) {
    hero.style.background = theme.heroGrad;
    hero.style.borderColor = theme.heroBorder;
    hero.style.setProperty('--hero-glow', theme.heroGlow);
    hero.style.setProperty('--hero-acc', theme.heroAcc);
  }

  const hEmoji = $('#h-emoji');
  const hWk = $('#h-wk');
  const hName = $('#h-name');
  const hTheme = $('#h-theme');
  const hProtein = $('#h-protein');
  const wkSub = $('#wk-sub');
  const wkSel = $('#wk-sel');
  const icalWn = $('#ical-wn');

  if (hEmoji) hEmoji.textContent = theme.emoji;
  if (hWk) hWk.textContent = `Week ${state.currentWeek + 1}`;
  if (hName) hName.textContent = `${wk.season} · ${theme.name}`;
  if (hTheme) hTheme.textContent = theme.desc;

  const effectiveProtein = getEffectiveProtein(state.currentWeek);
  const meta = PROTEIN_META[effectiveProtein] || { emoji: '🍽' };

  if (hProtein) {
    hProtein.textContent = `${meta.emoji} ${effectiveProtein} week`;
    hProtein.style.color = theme.heroAcc;
    hProtein.style.background = `${theme.heroAcc}22`;
    hProtein.style.borderColor = `${theme.heroAcc}44`;
  }

  if (wkSub) wkSub.textContent = `Week ${state.currentWeek + 1} · ${theme.name}`;
  if (wkSel) wkSel.value = String(state.currentWeek);
  if (icalWn) icalWn.textContent = state.currentWeek + 1;

  const list = $('#day-list');
  if (!list) return;

  list.innerHTML = '';

  wk.days.forEach((day, i) => {
    const accentColor =
      day.anchor === 'taco' ? 'var(--ora)' :
      day.anchor === 'pizza' ? 'var(--red)' :
      'var(--acc)';

    const tagCls = TAG_CLS[day.b] || 'tg-g';
    const icon = PROTO_ICONS[day.b] || '🍽';

    const div = document.createElement('div');
    div.className = 'day-card';
    div.onclick = () => window.openRecipe(state.currentWeek, i);
    div.innerHTML = `
      <div class="dc-bar" style="background:${accentColor}"></div>
      <div class="dc-body">
        <div class="dc-day">${escapeHtml(day.n)}</div>
        <div class="dc-name">${escapeHtml(day.m)}</div>
        <div class="dc-tags">
          <span class="tag ${tagCls}">${icon} ${escapeHtml(day.b)}</span>
          ${day.r?.gf ? '<span class="tag tg-g">✓ GF</span>' : ''}
          ${day.batch ? '<span class="tag tg-b">🧊 batch</span>' : ''}
          ${themeId ? `<span class="tag tg-th">🎨 ${escapeHtml(theme.name)}</span>` : ''}
        </div>
      </div>
      <div class="dc-chev">›</div>
    `;
    list.appendChild(div);
  });

  fetchWeather?.();
}

export function renderShoppingView({ state, getWkIngs, CATS, CAT_ORDER }) {
  const sub = $('#shop-sub');
  if (sub) sub.textContent = `Week ${state.currentWeek + 1} · Check what you have`;

  const ings = getWkIngs(state.currentWeek);
  const byCat = {};

  ings.forEach((i) => {
    if (!byCat[i.cat]) byCat[i.cat] = [];
    byCat[i.cat].push(i);
  });

  const container = $('#shop-content');
  if (!container) return;

  let html = '';

  CAT_ORDER.forEach((cat) => {
    if (!byCat[cat]) return;

    html += `<div class="cat-hdr">${escapeHtml(CATS[cat] || cat)}</div>`;
    html += `<div class="shop-grp">`;

    byCat[cat].forEach((ing) => {
      const ck = `w${state.currentWeek}_${ing.key}`;
      const done = state.checked[ck];

      html += `
        <div class="ck-row${done ? ' done' : ''}" onclick="window.toggleCk('${escapeHtml(ck)}', this, event)">
          <div class="ck-circle"><span class="ck-chk">✓</span></div>
          <span class="ck-name">${escapeHtml(ing.name)}</span>
          <span class="ck-qty">${escapeHtml(ing.qty)}</span>
          <button class="w-btn" onclick="window.wSearch(${JSON.stringify(ing.name)}, event)" title="Search Walmart">W</button>
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

export function renderCalendarView({ state, getDayInfo }) {
  const hd = $('#cal-hd');
  const wrap = $('#cal-wrap');
  const md = $('#ical-md');

  if (!wrap) return;

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (hd) hd.textContent = `${monthNames[state.calMonth]} ${state.calYear}`;

  const dim = new Date(state.calYear, state.calMonth + 1, 0).getDate();
  const firstDow = new Date(state.calYear, state.calMonth, 1).getDay();
  const today = new Date();

  const dotColors = {
    chicken: '#FF9F0A',
    turkey: '#30D158',
    pork: '#FF453A',
    fish: '#0A84FF',
    plant: '#30D158',
    beef: '#FF453A',
    mixed: '#BF5AF2'
  };

  let html = '<div class="cal-dow">';
  ['S','M','T','W','T','F','S'].forEach((d) => { html += `<div class="cdow">${d}</div>`; });
  html += '</div><div class="cal-cells">';

  for (let i = 0; i < firstDow; i++) html += '<div class="cc emp"></div>';

  for (let d = 1; d <= dim; d++) {
    const dt = new Date(state.calYear, state.calMonth, d);
    const isToday = dt.toDateString() === today.toDateString();
    const info = getDayInfo(dt);

    let inner = `<div class="cc-d">${d}</div>`;

    if (info) {
      const day = info.day;
      const dc = dotColors[day.b] || '#888';
      const isTaco = day.anchor === 'taco';
      const isPizza = day.anchor === 'pizza';
      const short = day.m
        .replace('Taco Tuesday · ', '')
        .replace('Pizza Friday · ', '')
        .substring(0, 20);

      inner += `<div class="cc-dot" style="background:${dc}"></div>`;
      inner += `<div class="cc-m${isTaco ? ' taco' : isPizza ? ' pizza' : ''}">${escapeHtml(short)}</div>`;
    }

    const click = info
      ? `onclick="window.goWk(${info.wkIdx}); window.switchTab('week', document.querySelectorAll('.tb')[0])"`
      : '';

    html += `<div class="cc${isToday ? ' today' : ''}" ${click}>${inner}</div>`;
  }

  html += '</div>';
  wrap.innerHTML = html;

  if (md) {
    const mn = new Date(state.calYear, state.calMonth).toLocaleString('default', { month: 'long' });
    md.textContent = `Download ${mn} ${state.calYear} .ics`;
  }
}

export function renderThemePicker({ state, THEMES, allPlans }) {
  const grid = $('#theme-grid');
  if (!grid) return;

  const currentThemeId = state.weekThemes[state.currentWeek] || 'classic';
  grid.innerHTML = '';

  const availableCuisineIds = new Set((allPlans || []).map((p) => p.cuisine).filter(Boolean));

  THEMES.forEach((th) => {
    const hasData = th.id === 'classic' || availableCuisineIds.has(th.id);
    const div = document.createElement('div');
    div.className = `theme-card${th.id === currentThemeId ? ' sel' : ''}`;
    if (!hasData) div.style.opacity = '0.45';

    div.innerHTML = `
      <span class="tc-emoji">${th.emoji}</span>
      <div class="tc-name">${escapeHtml(th.name)}</div>
      <div class="tc-desc">${escapeHtml(th.desc)}</div>
      ${!hasData ? '<div style="font-size:10px;color:var(--t3);margin-top:4px;font-weight:700">Coming soon</div>' : ''}
      <div class="tc-check">✓</div>
    `;

    if (hasData) div.onclick = () => window.selectTheme(th.id);
    grid.appendChild(div);
  });
}

export function renderProteinPicker({ state, PROTEIN_OPTIONS, PROTEIN_META, getEffectiveProtein }) {
  const grid = $('#protein-grid');
  if (!grid) return;

  const current = getEffectiveProtein(state.currentWeek);
  grid.innerHTML = '';

  PROTEIN_OPTIONS.forEach((p) => {
    const meta = PROTEIN_META[p] || { emoji: '🍽' };
    const div = document.createElement('div');
    div.className = `theme-card${p === current ? ' sel' : ''}`;
    div.innerHTML = `
      <span class="tc-emoji">${meta.emoji}</span>
      <div class="tc-name">${escapeHtml(p)}</div>
      <div class="tc-desc">Use ${escapeHtml(p.toLowerCase())} as the main protein for this week.</div>
      <div class="tc-check">✓</div>
    `;
    div.onclick = () => window.selectProtein(p);
    grid.appendChild(div);
  });
}

export function renderRecipeSheet({ day, recipeHTML }) {
  const title = $('#r-title');
  const meta = $('#r-meta');
  const body = $('#r-body');

  if (title) title.textContent = day.m;

  if (meta && day.r) {
    meta.innerHTML = `
      <span class="mc mc-t">⏱ ${escapeHtml(day.r.t)}</span>
      <span class="mc mc-s">👨‍👩‍👧‍👦 Serves ${escapeHtml(String(day.r.sv))}</span>
      <span class="mc mc-c">💰 ${escapeHtml(day.r.cost)}</span>
      ${day.r.gf ? '<span class="mc mc-g">✓ GF</span>' : ''}
    `;
  }

  if (body) body.innerHTML = recipeHTML(day);
}

export function renderAllRecipesSheet({ state, getWeekData, recipeHTML }) {
  const wk = getWeekData(state.currentWeek);
  const wn = $('#ar-wn');
  const body = $('#ar-body');

  if (wn) wn.textContent = state.currentWeek + 1;
  if (!body) return;

  let html = '';

  wk.days.forEach((day) => {
    const accentColor =
      day.anchor === 'taco' ? 'var(--ora)' :
      day.anchor === 'pizza' ? 'var(--red)' :
      'var(--acc)';

    html += `
      <div style="margin:0 16px 6px;padding:14px 0 6px;border-bottom:1px solid var(--sep)">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--t3)">${escapeHtml(day.n)}</div>
        <div style="font-size:17px;font-weight:900;margin:4px 0 2px;border-left:3px solid ${accentColor};padding-left:10px">${escapeHtml(day.m)}</div>
        ${day.r ? `<div style="font-size:12px;color:var(--t2);font-weight:600;padding-left:10px">⏱ ${escapeHtml(day.r.t)} · 💰 ${escapeHtml(day.r.cost)} · Serves ${escapeHtml(String(day.r.sv))}</div>` : ''}
      </div>
      ${day.r ? recipeHTML(day) : ''}
    `;
  });

  body.innerHTML = html;
}

export function renderPrepSheet({ state, getWeekData }) {
  const wk = getWeekData(state.currentWeek);
  const prepWeekEls = $$('.prep-wn');
  const body = $('#prep-body');

  prepWeekEls.forEach((el) => { el.textContent = state.currentWeek + 1; });
  if (!body) return;

  const bigCooks = [];
  const leftoverChain = [];
  const needsThaw = [];
  const allProduce = [];

  wk.days.forEach((day) => {
    if (day.batch) bigCooks.push({ name: day.m, night: day.n, time: day.r?.t });
    if (day.r?.note && day.r.note.toLowerCase().includes('leftover')) {
      leftoverChain.push({ night: day.n, note: day.r.note });
    }

    day.r?.i?.forEach((ing) => {
      if (ing.c === 'frozen' && !needsThaw.includes(ing.n)) needsThaw.push(ing.n);
      if (ing.c === 'produce' && !allProduce.find((p) => p.n === ing.n)) allProduce.push(ing);
    });
  });

  let html = '';

  if (bigCooks.length) {
    html += `<div class="rs-hdr">Big Cook Days</div><div class="prep-section">`;
    bigCooks.forEach((bc) => {
      html += `
        <div class="prep-card">
          <div class="prep-card-title">🗓 ${escapeHtml(bc.night)} · ${escapeHtml(bc.name)}</div>
          <div class="prep-steps">
            <div class="prep-step">Set aside ${escapeHtml(bc.time || 'extra time')} for this anchor cook.</div>
            <div class="prep-step">Make extra if you want leftovers to carry the week.</div>
            <div class="prep-step">Label and refrigerate or freeze portions right away.</div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (leftoverChain.length) {
    html += `<div class="rs-hdr">Leftover Strategy</div><div class="prep-section"><div class="prep-card"><div class="prep-card-title">Use leftovers intentionally</div><div class="prep-steps">`;
    leftoverChain.forEach((lc) => {
      html += `<div class="prep-step">${escapeHtml(lc.night)}: ${escapeHtml(lc.note)}</div>`;
    });
    html += `</div></div></div>`;
  }

  if (allProduce.length) {
    html += `<div class="rs-hdr">Produce Prep</div><div class="prep-section"><div class="prep-card"><div class="prep-card-title">Wash and prep in advance</div><div class="prep-steps">`;
    allProduce.slice(0, 8).forEach((p) => {
      html += `<div class="prep-step">${escapeHtml(p.n)}: wash and store in airtight container.</div>`;
    });
    html += `</div></div></div>`;
  }

  if (needsThaw.length) {
    html += `<div class="rs-hdr">Thaw Reminders</div><div class="prep-section"><div class="prep-card"><div class="prep-card-title">Move from freezer the night before</div><div class="prep-steps">`;
    needsThaw.forEach((item) => {
      html += `<div class="prep-step">${escapeHtml(item)}: move to fridge the night before.</div>`;
    });
    html += `</div></div></div>`;
  }

  html += `
    <div class="rs-hdr">GF Safety Checks</div>
    <div class="prep-section">
      <div class="prep-card">
        <div class="prep-card-title">Check these labels every week</div>
        <div class="prep-steps">
          <div class="prep-step">Broth or stock must say gluten free.</div>
          <div class="prep-step">Use gluten free taco and fajita seasoning.</div>
          <div class="prep-step">Use tamari instead of soy sauce.</div>
          <div class="prep-step">Use certified gluten free pizza crust.</div>
          <div class="prep-step">Check sausage labels every time.</div>
        </div>
      </div>
    </div>
    <div style="height:20px"></div>
  `;

  body.innerHTML = html;
}
