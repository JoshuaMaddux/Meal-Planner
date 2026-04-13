import { THEMES, TOTAL_WEEKS, PROTEIN_OPTIONS, PROTEIN_META, PROTO_ICONS, TAG_CLS, CATS, CAT_ORDER } from './constants.js';
import { CLASSIC_PLANS } from './plans/classic.js';
import { MEXICAN_PLANS } from './plans/mexican.js';
import { GREEK_PLANS } from './plans/greek.js';
import { ITALIAN_PLANS } from './plans/italian.js';

export {
  THEMES,
  TOTAL_WEEKS,
  PROTEIN_OPTIONS,
  PROTEIN_META,
  PROTO_ICONS,
  TAG_CLS,
  CATS,
  CAT_ORDER
};

export const ALL_PLANS = [
  ...CLASSIC_PLANS,
  ...MEXICAN_PLANS,
  ...GREEK_PLANS,
  ...ITALIAN_PLANS
];
