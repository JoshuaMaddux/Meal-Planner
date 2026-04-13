export const TOTAL_WEEKS = 26;

export const PROTEIN_OPTIONS = ['Chicken', 'Turkey', 'Pork', 'Beef', 'Fish', 'Plant', 'Mixed'];

export const PROTEIN_META = {
  Chicken: { emoji: '🍗', key: 'chicken' },
  Turkey: { emoji: '🦃', key: 'turkey' },
  Pork: { emoji: '🐷', key: 'pork' },
  Beef: { emoji: '🥩', key: 'beef' },
  Fish: { emoji: '🐟', key: 'fish' },
  Plant: { emoji: '🫘', key: 'plant' },
  Mixed: { emoji: '🍽', key: 'mixed' }
};

export const PROTO_ICONS = {
  chicken:'🍗',
  turkey:'🦃',
  pork:'🐷',
  beef:'🥩',
  fish:'🐟',
  plant:'🫘',
  mixed:'🍽'
};

export const TAG_CLS = {
  chicken:'tg-c',
  turkey:'tg-t',
  pork:'tg-p',
  fish:'tg-f',
  plant:'tg-v',
  beef:'tg-p',
  mixed:'tg-g'
};

export const CATS = {
  protein:'🥩 Protein',
  produce:'🥕 Produce',
  dairy:'🧀 Dairy & Eggs',
  canned:'🥡 Canned Goods',
  frozen:'🧊 Frozen',
  pantry:'🥫 Pantry & Dry',
  bread:'🍞 Bread',
  spices:'🌿 Spices'
};

export const CAT_ORDER = ['protein','produce','dairy','canned','frozen','pantry','bread','spices'];

export const THEMES = [
  {
    id:'classic',
    name:'Classic Family',
    emoji:'🏠',
    desc:'Comfort food staples the whole family loves',
    heroGrad:'linear-gradient(140deg,#1a2c1e,#0d1a0f)',
    heroBorder:'rgba(48,209,88,.18)',
    heroGlow:'radial-gradient(circle,rgba(48,209,88,.1),transparent 70%)',
    heroAcc:'#30D158'
  },
  {
    id:'mexican',
    name:'Mexican Fiesta',
    emoji:'🇲🇽',
    desc:'Tacos, enchiladas, pozole and more',
    heroGrad:'linear-gradient(140deg,#2d1a0a,#1a0d04)',
    heroBorder:'rgba(255,159,10,.22)',
    heroGlow:'radial-gradient(circle,rgba(255,159,10,.12),transparent 70%)',
    heroAcc:'#FF9F0A'
  }
];
