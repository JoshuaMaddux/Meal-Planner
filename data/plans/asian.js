Save this as data/plans/asian.js

export const ASIAN_PLANS = [
  {
    id: 'asian-chicken-teriyaki-01',
    name: 'Asian Chicken Teriyaki Week',
    cuisine: 'asian',
    season: 'spring',
    weather: ['mild', 'warm'],
    protein: 'Chicken',
    themeId: 'asian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Teriyaki Chicken Rice Bowls',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min + 20 min bake',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Tamari, gluten free', q: '1/2 cup', c: 'pantry' },
            { n: 'Honey', q: '3 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Ginger', q: '1 tbsp', c: 'produce' },
            { n: 'Cornstarch', q: '1 tbsp', c: 'pantry' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Broccoli florets', q: '4 cups', c: 'produce' },
            { n: 'Sesame seeds', q: '1 tbsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Whisk tamari, honey, minced garlic, grated ginger, and cornstarch with a splash of water.',
            'Place chicken on a sheet pan and brush with half the sauce.',
            'Bake for about 20 minutes until cooked through.',
            'Steam or roast broccoli while the chicken cooks.',
            'Slice the chicken and drizzle with the remaining warmed sauce.',
            'Serve over rice with broccoli and sesame seeds.',
            'Reserve extra chicken for Monday and Tuesday.'
          ],
          note: 'This is the main batch-cook meal for the week.',
          gfn: 'Use tamari, not regular soy sauce.'
        }
      },
      {
        n: 'Monday',
        m: 'Teriyaki Chicken Leftover Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover teriyaki chicken', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Broccoli', q: '2 cups', c: 'produce' },
            { n: 'Edamame', q: '1 cup', c: 'frozen' }
          ],
          s: [
            'Warm the chicken, rice, and broccoli.',
            'Heat the edamame.',
            'Serve everything together in bowls.'
          ],
          gfn: 'Naturally gluten free when using tamari-based leftovers.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Teriyaki Chicken Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover teriyaki chicken, chopped', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Green onions', q: '3', c: 'produce' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' },
            { n: 'Mayo or Greek yogurt', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the chopped teriyaki chicken.',
            'Heat the tortillas in a dry skillet.',
            'Fill with chicken and cabbage.',
            'Top with sliced green onions, sesame seeds, and a small drizzle of mayo or yogurt.'
          ],
          note: 'This keeps the taco rhythm but with Asian flavors.',
          gfn: 'Use certified gluten free corn tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken Fried Rice',
        b: 'chicken',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Cooked chicken, diced', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice, chilled', q: '3 cups', c: 'pantry' },
            { n: 'Eggs', q: '2', c: 'dairy' },
            { n: 'Frozen peas and carrots', q: '1.5 cups', c: 'frozen' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Green onions', q: '3', c: 'produce' }
          ],
          s: [
            'Scramble the eggs in a large skillet and set aside.',
            'Cook peas and carrots until heated through.',
            'Add rice and chicken and stir-fry until hot.',
            'Add tamari and sesame oil.',
            'Fold the eggs back in and top with green onions.'
          ],
          gfn: 'Use tamari instead of soy sauce.'
        }
      },
      {
        n: 'Thursday',
        m: 'Sesame Tofu Rice Bowls',
        b: 'plant',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$10',
          gf: true,
          i: [
            { n: 'Extra firm tofu', q: '2 blocks', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Broccoli florets', q: '3 cups', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Honey', q: '1 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Cornstarch', q: '2 tbsp', c: 'pantry' },
            { n: 'Sesame seeds', q: '1 tbsp', c: 'spices' }
          ],
          s: [
            'Press and cube the tofu.',
            'Toss tofu with cornstarch and pan-fry or bake until crisp.',
            'Steam or roast the broccoli.',
            'Mix tamari, honey, and sesame oil and toss with the tofu.',
            'Serve over rice with broccoli and sesame seeds.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Teriyaki Chicken Pizza',
        b: 'chicken',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked teriyaki chicken', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Tamari, gluten free', q: '1 tbsp', c: 'pantry' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Top the crusts with mozzarella and cooked teriyaki chicken.',
            'Bake according to crust directions.',
            'Finish with green onions, a light tamari drizzle, and sesame seeds.'
          ],
          gfn: 'Use certified gluten free crusts and tamari.'
        }
      },
      {
        n: 'Saturday',
        m: 'Honey Garlic Chicken and Rice',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Chicken breast', q: '1.5 lbs', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Green beans', q: '12 oz', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Honey', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Dice the chicken and cook in a skillet until browned.',
            'Add minced garlic, tamari, and honey and cook until glazed.',
            'Cook the green beans until tender-crisp.',
            'Serve the chicken and green beans over rice.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      }
    ]
  },

  {
    id: 'asian-turkey-ginger-02',
    name: 'Asian Ginger Turkey Week',
    cuisine: 'asian',
    season: 'fall',
    weather: ['mild', 'cold'],
    protein: 'Turkey',
    themeId: 'asian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Ginger Turkey Rice Bowls',
        b: 'turkey',
        batch: true,
        r: {
          t: '20 min',
          sv: 6,
          cost: '~$15',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '2 lbs', c: 'protein' },
            { n: 'Tamari, gluten free', q: '1/3 cup', c: 'pantry' },
            { n: 'Honey', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Ginger', q: '1 tbsp', c: 'produce' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Shredded carrots', q: '2 cups', c: 'produce' },
            { n: 'Cucumber', q: '2', c: 'produce' },
            { n: 'Green onions', q: '3', c: 'produce' }
          ],
          s: [
            'Brown the ground turkey in a large skillet.',
            'Add minced garlic and grated ginger and cook briefly.',
            'Stir in tamari and honey and cook until glossy.',
            'Serve over rice with shredded carrots, cucumber, and green onions.',
            'Reserve leftovers for Monday and Tuesday.'
          ],
          note: 'This is the batch protein for the start of the week.',
          gfn: 'Use tamari, not soy sauce.'
        }
      },
      {
        n: 'Monday',
        m: 'Turkey Bowl Leftovers',
        b: 'turkey',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover ginger turkey', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Edamame', q: '1 cup', c: 'frozen' }
          ],
          s: [
            'Warm the turkey and rice.',
            'Heat the edamame.',
            'Serve with diced cucumber.'
          ],
          gfn: 'Naturally gluten free with tamari-based turkey.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Korean Style Turkey Tacos',
        b: 'turkey',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover ginger turkey', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Mayo or Greek yogurt', q: '1/4 cup', c: 'dairy' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Warm the turkey and tortillas.',
            'Fill tortillas with turkey and cabbage.',
            'Top with green onions, sesame seeds, and a light drizzle of mayo or yogurt.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Turkey and Vegetable Stir Fry',
        b: 'turkey',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Bell peppers', q: '2', c: 'produce' },
            { n: 'Broccoli florets', q: '3 cups', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Cook the turkey in a skillet until browned.',
            'Add garlic, peppers, and broccoli and cook until tender-crisp.',
            'Stir in tamari and sesame oil.',
            'Serve over rice.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Thursday',
        m: 'Vegetable Fried Rice',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cooked rice, chilled', q: '3 cups', c: 'pantry' },
            { n: 'Eggs', q: '2', c: 'dairy' },
            { n: 'Frozen peas and carrots', q: '2 cups', c: 'frozen' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Green onions', q: '3', c: 'produce' }
          ],
          s: [
            'Scramble the eggs in a skillet and remove.',
            'Cook the vegetables until hot.',
            'Add rice, tamari, and sesame oil and stir-fry until hot.',
            'Fold in the eggs and top with green onions.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Turkey Stir Fry Pizza',
        b: 'turkey',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked turkey', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Tamari, gluten free', q: '1 tbsp', c: 'pantry' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Top crusts with mozzarella and cooked turkey.',
            'Bake until crisp and bubbling.',
            'Finish with green onions, a light tamari drizzle, and sesame seeds.'
          ],
          gfn: 'Use certified gluten free crusts and tamari.'
        }
      },
      {
        n: 'Saturday',
        m: 'Turkey Lettuce Wrap Bowls',
        b: 'turkey',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Butter lettuce or romaine leaves', q: '1 head', c: 'produce' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Water chestnuts', q: '1 can', c: 'canned' },
            { n: 'Green onions', q: '2', c: 'produce' }
          ],
          s: [
            'Cook the turkey until browned.',
            'Add garlic, tamari, and chopped water chestnuts and cook until hot.',
            'Serve with lettuce leaves and rice so everyone can build wraps or bowls.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      }
    ]
  },

  {
    id: 'asian-pork-sesame-03',
    name: 'Asian Pork Sesame Week',
    cuisine: 'asian',
    season: 'summer',
    weather: ['warm', 'hot'],
    protein: 'Pork',
    themeId: 'asian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Sesame Pork Rice Bowls',
        b: 'pork',
        batch: true,
        r: {
          t: '20 min',
          sv: 6,
          cost: '~$17',
          gf: true,
          i: [
            { n: 'Pork tenderloin', q: '2.5 lbs', c: 'protein' },
            { n: 'Tamari, gluten free', q: '1/3 cup', c: 'pantry' },
            { n: 'Honey', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Ginger', q: '1 tbsp', c: 'produce' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Cucumber', q: '2', c: 'produce' },
            { n: 'Shredded carrots', q: '2 cups', c: 'produce' },
            { n: 'Sesame seeds', q: '1 tbsp', c: 'spices' }
          ],
          s: [
            'Slice the pork into medallions or strips.',
            'Cook pork in a skillet until browned and cooked through.',
            'Add tamari, honey, garlic, and ginger and cook until glazed.',
            'Serve over rice with cucumber, carrots, and sesame seeds.',
            'Reserve extra pork for Monday and Tuesday.'
          ],
          note: 'This is the main batch cook for the first half of the week.',
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Monday',
        m: 'Pork Leftover Bowls',
        b: 'pork',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover sesame pork', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Edamame', q: '1 cup', c: 'frozen' }
          ],
          s: [
            'Warm the pork and rice.',
            'Heat the edamame.',
            'Serve with diced cucumber.'
          ],
          gfn: 'Naturally gluten free with tamari-based pork.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Sesame Pork Tacos',
        b: 'pork',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover sesame pork', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' },
            { n: 'Mayo or Greek yogurt', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the pork and tortillas.',
            'Fill tortillas with pork and cabbage.',
            'Top with green onions, sesame seeds, and a little mayo or yogurt.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Pork and Green Bean Stir Fry',
        b: 'pork',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Pork loin or tenderloin, sliced', q: '1.25 lbs', c: 'protein' },
            { n: 'Green beans', q: '1 lb', c: 'produce' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' }
          ],
          s: [
            'Cook the sliced pork in a skillet until browned.',
            'Add garlic and green beans and cook until tender-crisp.',
            'Stir in tamari and sesame oil.',
            'Serve over rice.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Thursday',
        m: 'Tofu Veggie Noodle Bowls',
        b: 'plant',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$10',
          gf: true,
          i: [
            { n: 'Extra firm tofu', q: '2 blocks', c: 'protein' },
            { n: 'Gluten free rice noodles', q: '8 oz', c: 'pantry' },
            { n: 'Shredded carrots', q: '2 cups', c: 'produce' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Honey', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Cook the rice noodles according to package directions.',
            'Press and cube the tofu and pan-fry until crisp.',
            'Mix tamari, sesame oil, and honey.',
            'Toss noodles with tofu, carrots, cucumber, and sauce.'
          ],
          gfn: 'Use certified gluten free rice noodles and tamari.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Sesame Pork Pizza',
        b: 'pork',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked sesame pork', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Tamari, gluten free', q: '1 tbsp', c: 'pantry' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Top crusts with mozzarella and cooked pork.',
            'Bake until crisp and bubbling.',
            'Finish with green onions, sesame seeds, and a very light tamari drizzle.'
          ],
          gfn: 'Use certified gluten free crusts and tamari.'
        }
      },
      {
        n: 'Saturday',
        m: 'Honey Garlic Pork and Rice',
        b: 'pork',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Pork chops or sliced pork loin', q: '1.5 lbs', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Broccoli florets', q: '3 cups', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Honey', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' }
          ],
          s: [
            'Cook the pork until browned and cooked through.',
            'Add garlic, tamari, and honey and cook until glazed.',
            'Steam or roast the broccoli.',
            'Serve over rice with broccoli.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      }
    ]
  },

  {
    id: 'asian-family-favorites-04',
    name: 'Asian Family Favorites Week',
    cuisine: 'asian',
    season: 'all',
    weather: ['mild', 'warm', 'cold'],
    protein: 'Chicken',
    themeId: 'asian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Orange Chicken Rice Bowls',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min + 20 min bake',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Orange juice', q: '1/2 cup', c: 'canned' },
            { n: 'Tamari, gluten free', q: '1/4 cup', c: 'pantry' },
            { n: 'Honey', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Cornstarch', q: '1 tbsp', c: 'pantry' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Broccoli florets', q: '4 cups', c: 'produce' },
            { n: 'Green onions', q: '3', c: 'produce' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Bake or roast the chicken until cooked through.',
            'Whisk orange juice, tamari, honey, garlic, and cornstarch and simmer until slightly thickened.',
            'Slice the chicken and toss in the sauce.',
            'Serve over rice with broccoli and green onions.',
            'Reserve extra chicken for Monday and Tuesday.'
          ],
          note: 'This is the batch anchor for the week.',
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Monday',
        m: 'Orange Chicken Leftover Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover orange chicken', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Broccoli', q: '2 cups', c: 'produce' },
            { n: 'Edamame', q: '1 cup', c: 'frozen' }
          ],
          s: [
            'Warm the chicken, rice, and broccoli.',
            'Heat the edamame.',
            'Serve together in bowls.'
          ],
          gfn: 'Naturally gluten free with tamari-based sauce.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Orange Chicken Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover orange chicken, chopped', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Mayo or Greek yogurt', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the chicken and tortillas.',
            'Fill tortillas with chicken and cabbage.',
            'Top with green onions and a little mayo or yogurt.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken Lo Mein Style Rice Noodles',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Chicken breast, sliced', q: '1.25 lbs', c: 'protein' },
            { n: 'Gluten free rice noodles', q: '8 oz', c: 'pantry' },
            { n: 'Shredded carrots', q: '1 cup', c: 'produce' },
            { n: 'Broccoli florets', q: '2 cups', c: 'produce' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' }
          ],
          s: [
            'Cook the rice noodles according to package directions.',
            'Cook the chicken until browned.',
            'Add garlic, carrots, and broccoli and cook until tender-crisp.',
            'Add noodles, tamari, and sesame oil and toss together.'
          ],
          gfn: 'Use certified gluten free rice noodles and tamari.'
        }
      },
      {
        n: 'Thursday',
        m: 'Veggie Egg Fried Rice',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cooked rice, chilled', q: '3 cups', c: 'pantry' },
            { n: 'Eggs', q: '3', c: 'dairy' },
            { n: 'Frozen peas and carrots', q: '2 cups', c: 'frozen' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Sesame oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Green onions', q: '3', c: 'produce' }
          ],
          s: [
            'Scramble the eggs and remove from the pan.',
            'Cook the vegetables until hot.',
            'Add rice, tamari, and sesame oil and stir-fry.',
            'Fold in the eggs and top with green onions.'
          ],
          gfn: 'Use gluten free tamari.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Asian Chicken Pizza',
        b: 'chicken',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked chicken', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Green onions', q: '2', c: 'produce' },
            { n: 'Tamari, gluten free', q: '1 tbsp', c: 'pantry' },
            { n: 'Sesame seeds', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Top crusts with mozzarella and cooked chicken.',
            'Bake until crisp and bubbling.',
            'Finish with green onions, sesame seeds, and a light tamari drizzle.'
          ],
          gfn: 'Use certified gluten free crusts and tamari.'
        }
      },
      {
        n: 'Saturday',
        m: 'Weekend Beef and Broccoli Bowls',
        b: 'beef',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Flank steak or sirloin, sliced thin', q: '1.25 lbs', c: 'protein' },
            { n: 'Broccoli florets', q: '4 cups', c: 'produce' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Tamari, gluten free', q: '3 tbsp', c: 'pantry' },
            { n: 'Honey', q: '1 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' }
          ],
          s: [
            'Cook the sliced beef quickly in a hot skillet and remove.',
            'Cook broccoli until tender-crisp.',
            'Add garlic, tamari, and honey and return the beef to the pan briefly.',
            'Serve over rice.'
          ],
          note: 'This keeps beef as the occasional weekend meal.',
          gfn: 'Use gluten free tamari.'
        }
      }
    ]
  }
];
