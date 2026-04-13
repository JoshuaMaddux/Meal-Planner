import { ALL_PLANS } from './index.js';

/**
 * Filter plans by metadata
 */
export function getFilteredPlans({
  cuisine = null,
  season = null,
  protein = null,
  weather = null,
  tags = []
} = {}) {
  return ALL_PLANS.filter((plan) => {
    if (!plan) return false;

    if (cuisine && plan.cuisine !== cuisine) return false;

    if (season && plan.season !== season && plan.season !== 'all') {
      return false;
    }

    if (protein && plan.protein !== protein) return false;

    if (weather && plan.weather && !plan.weather.includes(weather)) {
      return false;
    }

    if (tags.length && plan.tags) {
      const hasAllTags = tags.every((tag) => plan.tags.includes(tag));
      if (!hasAllTags) return false;
    }

    return true;
  });
}

/**
 * Rotate plans by index
 */
export function getPlanForWeekIndex(index, plans = ALL_PLANS) {
  if (!plans || !plans.length) return null;

  return plans[index % plans.length];
}

/**
 * Safer plan getter with fallback
 */
export function getPlanSafe(index, options = {}) {
  let plans = getFilteredPlans(options);

  // fallback if filters return nothing
  if (!plans.length) {
    plans = ALL_PLANS;
  }

  return getPlanForWeekIndex(index, plans);
}

/**
 * Get a random plan (useful for "shuffle week" later)
 */
export function getRandomPlan(options = {}) {
  const plans = getFilteredPlans(options);

  if (!plans.length) return null;

  return plans[Math.floor(Math.random() * plans.length)];
}

/**
 * Group plans by cuisine (useful for UI later)
 */
export function groupPlansByCuisine() {
  const map = {};

  ALL_PLANS.forEach((plan) => {
    if (!map[plan.cuisine]) {
      map[plan.cuisine] = [];
    }
    map[plan.cuisine].push(plan);
  });

  return map;
}

/**
 * Get available filter options dynamically
 * (so you don’t hardcode dropdowns)
 */
export function getAvailableFilters() {
  const cuisines = new Set();
  const seasons = new Set();
  const proteins = new Set();

  ALL_PLANS.forEach((plan) => {
    if (plan.cuisine) cuisines.add(plan.cuisine);
    if (plan.season) seasons.add(plan.season);
    if (plan.protein) proteins.add(plan.protein);
  });

  return {
    cuisines: [...cuisines],
    seasons: [...seasons],
    proteins: [...proteins]
  };
}
