import { ALL_PLANS } from './index.js';

export function getPlansByCuisine(cuisine) {
  return ALL_PLANS.filter((p) => p.cuisine === cuisine);
}

export function getPlansBySeason(season) {
  return ALL_PLANS.filter((p) => p.season === season || p.season === 'all');
}

export function getPlansByProtein(protein) {
  return ALL_PLANS.filter((p) => p.protein === protein);
}

export function getPlansByWeather(weather) {
  return ALL_PLANS.filter((p) => (p.weather || []).includes(weather));
}

export function getFilteredPlans({ cuisine, season, protein, weather, tags = [] } = {}) {
  return ALL_PLANS.filter((plan) => {
    if (cuisine && plan.cuisine !== cuisine) return false;
    if (season && plan.season !== season && plan.season !== 'all') return false;
    if (protein && plan.protein !== protein) return false;
    if (weather && !(plan.weather || []).includes(weather)) return false;
    if (tags.length && !tags.every((tag) => (plan.tags || []).includes(tag))) return false;
    return true;
  });
}

export function getPlanForWeekIndex(index, plans) {
  if (!plans.length) return null;
  return plans[index % plans.length];
}
