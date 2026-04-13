export const GREEK_PLANS = [
  {
    id: 'greek-chicken-lemon-herb-01',
    name: 'Greek Lemon Herb Chicken Week',
    cuisine: 'greek',
    season: 'spring',
    weather: ['mild', 'warm'],
    protein: 'Chicken',
    themeId: 'greek',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep', 'low-acid'],
    days: [
      {
        n: 'Sunday',
        m: 'Greek Lemon Herb Chicken Bowls',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min + 30 min roast',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Olive oil', q: '3 tbsp', c: 'pantry' },
            { n: 'Lemon zest', q: 'from 2 lemons', c: 'produce' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Dried oregano', q: '2 tsp', c: 'spices' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Cucumber', q: '2', c: 'produce' },
            { n: 'Cherry tomatoes', q: '1 cup', c: 'produce' },
            { n: 'Feta cheese', q: '1 cup', c: 'dairy' },
            { n: 'Plain Greek yogurt', q: '1 cup', c: 'dairy' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Mix olive oil, lemon zest, minced garlic, oregano, salt, and pepper.',
            'Rub the chicken with the mixture and roast until golden and cooked through, about 30 minutes.',
            'Dice cucumber and halve tomatoes.',
            'Serve chicken over rice with cucumber, tomatoes, feta, and a spoonful of yogurt.',
            'Reserve extra chicken for Monday and Tuesday.'
          ],
          note: 'This is the anchor meal and gives you easy reuse for the first half of the week.',
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Greek Chicken Rice Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover Greek chicken', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Plain Greek yogurt', q: '1/2 cup', c: 'dairy' }
          ],
          s: [
            'Warm the leftover chicken and rice.',
            'Dice the cucumber.',
            'Serve in bowls with cucumber, feta, and yogurt.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Greek Chicken Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover Greek chicken', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Cucumber, diced', q: '1 cup', c: 'produce' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Plain Greek yogurt', q: '1/2 cup', c: 'dairy' },
            { n: 'Fresh dill', q: '1 tbsp', c: 'produce' }
          ],
          s: [
            'Warm the chicken and tortillas.',
            'Mix yogurt with dill, salt, and pepper.',
            'Fill tortillas with chicken, cucumber, feta, and dill yogurt.'
          ],
          note: 'This is basically a gyro-style taco night.',
          gfn: 'Use certified gluten free corn tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken and Zucchini Skillet',
        b: 'chicken',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Chicken breast', q: '1.5 lbs', c: 'protein' },
            { n: 'Zucchini', q: '3 medium', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Dice the chicken and season with oregano, salt, and pepper.',
            'Cook chicken in olive oil until browned and cooked through.',
            'Add sliced zucchini and garlic and cook until just tender.',
            'Serve over rice and finish with feta.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Thursday',
        m: 'Greek White Bean Skillet',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cannellini beans', q: '2 cans', c: 'canned' },
            { n: 'Spinach', q: '4 cups', c: 'produce' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' }
          ],
          s: [
            'Cook the garlic in olive oil until fragrant.',
            'Add beans and warm through.',
            'Stir in spinach until wilted.',
            'Serve over rice and top with feta.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Greek White Pizza',
        b: 'chicken',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Cooked chicken', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Spinach', q: '1 cup', c: 'produce' },
            { n: 'Olives', q: '1/4 cup', c: 'canned' }
          ],
          s: [
            'Brush the crusts lightly with olive oil.',
            'Top with mozzarella, chicken, feta, spinach, and olives.',
            'Bake until crisp and bubbling.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Chicken Souvlaki Plates',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Chicken breast', q: '1.5 lbs', c: 'protein' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Lemon zest', q: 'from 1 lemon', c: 'produce' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Plain Greek yogurt', q: '3/4 cup', c: 'dairy' }
          ],
          s: [
            'Cube the chicken and toss with olive oil, lemon zest, oregano, salt, and pepper.',
            'Roast or pan-cook until done.',
            'Cook or roast potatoes until tender.',
            'Serve with cucumber and Greek yogurt on the side.'
          ],
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  },

  {
    id: 'greek-turkey-meatball-02',
    name: 'Greek Turkey Meatball Week',
    cuisine: 'greek',
    season: 'fall',
    weather: ['cold', 'mild'],
    protein: 'Turkey',
    themeId: 'greek',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Greek Turkey Meatballs with Rice',
        b: 'turkey',
        batch: true,
        r: {
          t: '25 min + 20 min bake',
          sv: 6,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '2 lbs', c: 'protein' },
            { n: 'Egg', q: '1', c: 'dairy' },
            { n: 'Gluten free breadcrumbs', q: '3/4 cup', c: 'bread' },
            { n: 'Dried oregano', q: '2 tsp', c: 'spices' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Cucumber', q: '2', c: 'produce' },
            { n: 'Plain Greek yogurt', q: '1 cup', c: 'dairy' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' }
          ],
          s: [
            'Preheat oven to 400°F.',
            'Mix turkey, egg, breadcrumbs, oregano, garlic powder, salt, and pepper.',
            'Shape into meatballs and bake until cooked through, about 18 to 20 minutes.',
            'Mix yogurt with diced cucumber, salt, and pepper for a quick sauce.',
            'Serve meatballs over rice with cucumber yogurt and feta.',
            'Reserve extra meatballs for Monday and Tuesday.'
          ],
          note: 'This is the main batch-cook meal for the week.',
          gfn: 'Use certified gluten free breadcrumbs.'
        }
      },
      {
        n: 'Monday',
        m: 'Turkey Meatball Bowls',
        b: 'turkey',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover turkey meatballs', q: '8 to 10', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Greek yogurt sauce', q: '1/2 cup', c: 'dairy' }
          ],
          s: [
            'Warm the meatballs and rice.',
            'Dice cucumber.',
            'Serve bowls with cucumber, feta, and yogurt sauce.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Turkey Gyro Tacos',
        b: 'turkey',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover turkey meatballs, sliced', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Greek yogurt sauce', q: '1/2 cup', c: 'dairy' },
            { n: 'Cucumber, diced', q: '1 cup', c: 'produce' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the sliced meatballs and tortillas.',
            'Fill tortillas with meatballs, cucumber, feta, and yogurt sauce.'
          ],
          note: 'A taco version of gyro flavors.',
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Turkey Zucchini Rice Skillet',
        b: 'turkey',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Zucchini', q: '3 medium', c: 'produce' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Cook the turkey in a skillet with oregano, salt, and pepper.',
            'Add diced zucchini and cook until tender.',
            'Fold in rice and warm through.',
            'Top with feta before serving.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Thursday',
        m: 'Lemony Chickpea Rice Soup',
        b: 'plant',
        r: {
          t: '15 min + 20 min simmer',
          sv: 6,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Chickpeas', q: '2 cans', c: 'canned' },
            { n: 'Cooked rice', q: '1.5 cups', c: 'pantry' },
            { n: 'Carrots', q: '3', c: 'produce' },
            { n: 'Celery', q: '3 stalks', c: 'produce' },
            { n: 'Onion', q: '1', c: 'produce' },
            { n: 'Vegetable broth, gluten free', q: '5 cups', c: 'canned' },
            { n: 'Lemon zest', q: 'from 1 lemon', c: 'produce' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Cook onion, carrots, and celery in olive oil until softened.',
            'Add broth, chickpeas, rice, salt, and pepper.',
            'Simmer 20 minutes.',
            'Finish with lemon zest before serving.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Greek Turkey Pizza',
        b: 'turkey',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Cooked turkey', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Spinach', q: '1 cup', c: 'produce' },
            { n: 'Olives', q: '1/4 cup', c: 'canned' }
          ],
          s: [
            'Brush crusts lightly with olive oil.',
            'Top with mozzarella, turkey, spinach, olives, and feta.',
            'Bake until crisp and bubbling.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Turkey Stuffed Peppers Greek Style',
        b: 'turkey',
        r: {
          t: '25 min + 30 min bake',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Bell peppers', q: '4 large', c: 'produce' },
            { n: 'Cooked rice', q: '1.5 cups', c: 'pantry' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Preheat oven to 375°F.',
            'Brown turkey with oregano, salt, and pepper.',
            'Mix with rice and half the feta.',
            'Stuff the peppers and top with the remaining feta.',
            'Bake until peppers are tender.'
          ],
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  },

  {
    id: 'greek-pork-souvlaki-03',
    name: 'Greek Pork and Potatoes Week',
    cuisine: 'greek',
    season: 'summer',
    weather: ['warm', 'hot'],
    protein: 'Pork',
    themeId: 'greek',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Greek Pork Souvlaki Bowls',
        b: 'pork',
        batch: true,
        r: {
          t: '20 min + 20 min cook',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Pork tenderloin', q: '2.5 lbs', c: 'protein' },
            { n: 'Olive oil', q: '3 tbsp', c: 'pantry' },
            { n: 'Lemon zest', q: 'from 2 lemons', c: 'produce' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Dried oregano', q: '2 tsp', c: 'spices' },
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Cucumber', q: '2', c: 'produce' },
            { n: 'Greek yogurt', q: '1 cup', c: 'dairy' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' }
          ],
          s: [
            'Cut pork into bite-sized pieces and toss with olive oil, lemon zest, garlic, oregano, salt, and pepper.',
            'Roast or pan-cook until browned and cooked through.',
            'Serve over rice with cucumber, yogurt, and feta.',
            'Reserve extra pork for Monday and Tuesday.'
          ],
          note: 'This is your main batch protein for the week.',
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Pork Rice Bowls with Yogurt Sauce',
        b: 'pork',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover pork souvlaki', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Greek yogurt', q: '1/2 cup', c: 'dairy' },
            { n: 'Cucumber, diced', q: '1 cup', c: 'produce' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the pork and rice.',
            'Serve with cucumber, feta, and a spoonful of yogurt.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Pork Gyro Tacos',
        b: 'pork',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover pork souvlaki', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Greek yogurt', q: '1/2 cup', c: 'dairy' },
            { n: 'Cucumber, diced', q: '1 cup', c: 'produce' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the pork and tortillas.',
            'Fill tortillas with pork, cucumber, feta, and yogurt.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Sausage, Potato, and Green Bean Skillet',
        b: 'pork',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Gluten free pork sausage', q: '1 lb', c: 'protein' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Green beans', q: '12 oz', c: 'produce' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Parboil or microwave potatoes until slightly tender.',
            'Brown sausage in a skillet and remove.',
            'Cook potatoes until golden.',
            'Add green beans and sausage back to the pan and finish with oregano.'
          ],
          gfn: 'Use clearly labeled gluten free sausage.'
        }
      },
      {
        n: 'Thursday',
        m: 'Greek Lentil Bowls',
        b: 'plant',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cooked lentils', q: '3 cups', c: 'pantry' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Fresh parsley', q: '2 tbsp', c: 'produce' }
          ],
          s: [
            'Warm lentils and rice.',
            'Dice cucumber and chop parsley.',
            'Build bowls with lentils, rice, cucumber, feta, olive oil, and parsley.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Greek Sausage Pizza',
        b: 'pork',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Cooked sausage', q: '1 cup', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Olives', q: '1/4 cup', c: 'canned' },
            { n: 'Spinach', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Brush crusts with olive oil.',
            'Top with mozzarella, sausage, olives, spinach, and feta.',
            'Bake until crisp and bubbling.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Pork Chops with Lemon Potatoes',
        b: 'pork',
        r: {
          t: '20 min + 30 min roast',
          sv: 4,
          cost: '~$15',
          gf: true,
          i: [
            { n: 'Pork chops', q: '4', c: 'protein' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Lemon zest', q: 'from 1 lemon', c: 'produce' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' },
            { n: 'Green beans', q: '12 oz', c: 'produce' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Toss potatoes with olive oil, lemon zest, oregano, salt, and pepper and roast until tender.',
            'Cook pork chops in a skillet or roast until done.',
            'Steam or sauté green beans and serve alongside.'
          ],
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  },

  {
    id: 'greek-family-favorites-04',
    name: 'Greek Family Favorites Week',
    cuisine: 'greek',
    season: 'all',
    weather: ['mild', 'warm', 'cold'],
    protein: 'Chicken',
    themeId: 'greek',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep', 'low-acid'],
    days: [
      {
        n: 'Sunday',
        m: 'Greek Chicken and Potatoes',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min + 35 min roast',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Baby potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Olive oil', q: '3 tbsp', c: 'pantry' },
            { n: 'Lemon zest', q: 'from 2 lemons', c: 'produce' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Dried oregano', q: '2 tsp', c: 'spices' },
            { n: 'Green beans', q: '12 oz', c: 'produce' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Toss potatoes with olive oil, lemon zest, garlic, oregano, salt, and pepper.',
            'Arrange chicken and potatoes on a sheet pan and roast.',
            'Add green beans near the end and finish roasting until chicken is cooked through.',
            'Reserve extra chicken for Monday and Tuesday.'
          ],
          note: 'A simple classic Greek-style roast dinner to anchor the week.',
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Chicken and Potato Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover chicken', q: '2 cups', c: 'protein' },
            { n: 'Leftover roasted potatoes', q: '2 cups', c: 'produce' },
            { n: 'Greek yogurt', q: '1/2 cup', c: 'dairy' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Feta cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the chicken and potatoes.',
            'Dice cucumber.',
            'Serve with yogurt, cucumber, and feta.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Feta Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Cooked chicken', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Cucumber, diced', q: '1 cup', c: 'produce' },
            { n: 'Greek yogurt', q: '1/2 cup', c: 'dairy' },
            { n: 'Fresh dill', q: '1 tbsp', c: 'produce' }
          ],
          s: [
            'Warm the chicken and tortillas.',
            'Mix yogurt with dill, salt, and pepper.',
            'Fill tortillas with chicken, cucumber, feta, and yogurt sauce.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Greek Chicken Pasta Salad Bowls',
        b: 'chicken',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Gluten free pasta', q: '10 oz', c: 'pantry' },
            { n: 'Cooked chicken', q: '2 cups', c: 'protein' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Fresh parsley', q: '2 tbsp', c: 'produce' }
          ],
          s: [
            'Cook the gluten free pasta and rinse slightly cool.',
            'Dice cucumber and chop parsley.',
            'Toss pasta with chicken, cucumber, feta, olive oil, salt, pepper, and parsley.'
          ],
          gfn: 'Use certified gluten free pasta.'
        }
      },
      {
        n: 'Thursday',
        m: 'Spanakorizo Style Rice and Spinach',
        b: 'plant',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cooked rice', q: '3 cups', c: 'pantry' },
            { n: 'Spinach', q: '5 cups', c: 'produce' },
            { n: 'Onion', q: '1 small', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' }
          ],
          s: [
            'Cook diced onion in olive oil until softened.',
            'Add spinach and cook until wilted.',
            'Stir in rice and warm through.',
            'Top with feta before serving.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Greek Margherita Pizza',
        b: 'mixed',
        anchor: 'pizza',
        r: {
          t: '18 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Basil', q: '2 tbsp', c: 'produce' },
            { n: 'Spinach', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Brush crusts with olive oil.',
            'Top with mozzarella, feta, and spinach.',
            'Bake until crisp and bubbling.',
            'Finish with basil.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Weekend Beef Greek Bowls',
        b: 'beef',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Ground beef', q: '1.25 lbs', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cucumber', q: '1', c: 'produce' },
            { n: 'Feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Greek yogurt', q: '1/2 cup', c: 'dairy' },
            { n: 'Dried oregano', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Brown the ground beef with oregano, salt, and pepper.',
            'Warm the rice.',
            'Dice cucumber.',
            'Build bowls with rice, beef, cucumber, feta, and yogurt.'
          ],
          note: 'This keeps beef limited to the occasional weekend meal.',
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  }
];
