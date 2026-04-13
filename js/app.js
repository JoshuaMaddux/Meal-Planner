let currentWeek = 0;
let weekThemes = JSON.parse(localStorage.getItem('themes')||'{}');

function getWeekData(i){
  return BASE_WEEKS[i % BASE_WEEKS.length];
}

function buildWeekSel(){
  const sel=document.getElementById('wk-sel');
  for(let i=0;i<TOTAL_WEEKS;i++){
    const o=document.createElement('option');
    o.value=i;
    o.textContent='Week '+(i+1);
    sel.appendChild(o);
  }
}

function goWk(n){
  if(n<0)n=TOTAL_WEEKS-1;
  if(n>=TOTAL_WEEKS)n=0;
  currentWeek=n;
  renderWeek();
}

function renderWeek(){
  const wk=getWeekData(currentWeek);

  document.getElementById('wk-sub').textContent='Week '+(currentWeek+1);

  const list=document.getElementById('day-list');
  list.innerHTML='';

  wk.days.forEach(d=>{
    const div=document.createElement('div');
    div.className='day-card';
    div.textContent=d.n+' - '+d.m;
    list.appendChild(div);
  });
}

function switchTab(t,btn){
  document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
  document.querySelectorAll('.tb').forEach(b=>b.classList.remove('active'));

  document.getElementById('s-'+t).classList.remove('hidden');
  btn.classList.add('active');
}

function openThemePicker(){
  document.getElementById('ov-theme').classList.add('on');
}

buildWeekSel();
renderWeek();
