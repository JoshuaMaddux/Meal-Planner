export const MEXICAN_PLANS = [
  {
    id: 'mexican-chicken-tinga-01',
    name: 'Mexican Chicken Tinga Week',
    cuisine: 'mexican',
    season: 'all',
    weather: ['mild', 'warm', 'hot'],
    protein: 'Chicken',
    themeId: 'mexican',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Slow Cooker Chicken Tinga Bowls',
        b: 'chicken',
        batch: true,
        r: {
          t: '15 min + 6 hr slow',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Boneless skinless chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Mild salsa', q: '1 cup', c: 'canned' },
            { n: 'Chipotle peppers in adobo', q: '1 to 2 peppers', c: 'canned' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Chicken broth, gluten free', q: '1 cup', c: 'canned' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Smoked paprika', q: '1 tsp', c: 'spices' },
            { n: 'Jasmine rice', q: '2 cups dry', c: 'pantry' },
            { n: 'Avocados', q: '2', c: 'produce' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Lime', q: '1', c: 'produce' }
          ],
          s: [
            'Add chicken, salsa, chipotle, sliced onion, garlic, broth, cumin, and smoked paprika to the slow cooker.',
            'Cook on LOW for 6 to 7 hours or HIGH for 3 to 4 hours.',
            'Shred chicken directly in the slow cooker and mix into the sauce.',
            'Cook rice while the chicken finishes.',
            'Serve in bowls with rice, cabbage, avocado, and lime.',
            'Reserve about half the chicken for Monday and Tuesday.'
          ],
          note: 'This is the anchor cook for the week. Make enough to reuse.',
          gfn: 'Check the broth and adobo peppers label for gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Chicken Tinga Rice Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover chicken tinga', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Black beans', q: '1 can', c: 'canned' },
            { n: 'Frozen corn', q: '1 cup', c: 'frozen' },
            { n: 'Avocado', q: '1', c: 'produce' },
            { n: 'Sour cream', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm leftover chicken tinga in a skillet or microwave.',
            'Heat black beans and corn together until hot.',
            'Layer rice, beans, corn, and chicken in bowls.',
            'Top with avocado and sour cream.'
          ],
          gfn: 'All ingredients are naturally gluten free if canned items are labeled safely.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Tinga Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover chicken tinga', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Queso fresco or shredded cheese', q: '1 cup', c: 'dairy' },
            { n: 'Avocado', q: '1', c: 'produce' },
            { n: 'Lime wedges', q: 'from 1 lime', c: 'produce' }
          ],
          s: [
            'Warm the chicken tinga.',
            'Heat the corn tortillas in a dry skillet.',
            'Fill tortillas with chicken, cabbage, cheese, and avocado.',
            'Serve with lime on the side.'
          ],
          gfn: 'Use certified gluten free corn tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Turkey Taco Skillet',
        b: 'turkey',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.5 lbs', c: 'protein' },
            { n: 'Bell peppers', q: '2', c: 'produce' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Black beans', q: '1 can', c: 'canned' },
            { n: 'Frozen corn', q: '1 cup', c: 'frozen' },
            { n: 'Gluten free taco seasoning', q: '2 tbsp', c: 'spices' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Shredded cheese', q: '1 cup', c: 'dairy' }
          ],
          s: [
            'Brown the ground turkey in a large skillet.',
            'Add diced onion and peppers and cook until softened.',
            'Stir in taco seasoning, beans, and corn.',
            'Cook until everything is hot and combined.',
            'Serve over rice and top with cheese.'
          ],
          gfn: 'Use a gluten free taco seasoning blend.'
        }
      },
      {
        n: 'Thursday',
        m: 'Black Bean and Sweet Potato Bowls',
        b: 'plant',
        r: {
          t: '15 min + 25 min roast',
          sv: 4,
          cost: '~$10',
          gf: true,
          i: [
            { n: 'Sweet potatoes', q: '2 large', c: 'produce' },
            { n: 'Black beans', q: '2 cans', c: 'canned' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Avocados', q: '2', c: 'produce' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Pumpkin seeds', q: '1/4 cup', c: 'pantry' }
          ],
          s: [
            'Cube sweet potatoes and toss with olive oil, cumin, garlic powder, salt, and pepper.',
            'Roast at 425°F for about 25 minutes until tender.',
            'Warm black beans and rice.',
            'Build bowls with rice, beans, sweet potatoes, avocado, and pumpkin seeds.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Mexican Street Corn Pizza',
        b: 'chicken',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked shredded chicken', q: '1.5 cups', c: 'protein' },
            { n: 'Frozen corn, thawed', q: '1 cup', c: 'frozen' },
            { n: 'Shredded mozzarella', q: '2 cups', c: 'dairy' },
            { n: 'Cotija or feta cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Sour cream', q: '1/4 cup', c: 'dairy' },
            { n: 'Mild salsa', q: '1/4 cup', c: 'canned' },
            { n: 'Chili powder', q: '1/2 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven according to crust directions.',
            'Spread a thin layer of salsa over each crust.',
            'Top with mozzarella, chicken, and corn.',
            'Bake until crisp and bubbly.',
            'Finish with sour cream drizzle, cotija, and a pinch of chili powder.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Chicken Fajita Sheet Pan Dinner',
        b: 'chicken',
        r: {
          t: '15 min + 20 min roast',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Chicken breast or thighs', q: '1.5 lbs', c: 'protein' },
            { n: 'Bell peppers', q: '3', c: 'produce' },
            { n: 'Onion', q: '1 large', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Paprika', q: '1 tsp', c: 'spices' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Corn tortillas', q: '12', c: 'bread' }
          ],
          s: [
            'Slice chicken, peppers, and onion.',
            'Toss with oil and seasonings.',
            'Spread on a sheet pan and roast at 425°F for about 20 minutes.',
            'Serve with warm corn tortillas.'
          ],
          gfn: 'Use certified gluten free corn tortillas.'
        }
      }
    ]
  },

  {
    id: 'mexican-chicken-verde-02',
    name: 'Mexican Chicken Verde Week',
    cuisine: 'mexican',
    season: 'spring',
    weather: ['mild', 'warm'],
    protein: 'Chicken',
    themeId: 'mexican',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Slow Cooker Chicken Verde',
        b: 'chicken',
        batch: true,
        r: {
          t: '10 min + 6 hr slow',
          sv: 6,
          cost: '~$17',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Salsa verde', q: '2 cups', c: 'canned' },
            { n: 'Chicken broth, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Rice', q: '2 cups dry', c: 'pantry' },
            { n: 'Cabbage slaw mix', q: '1 bag', c: 'produce' },
            { n: 'Avocados', q: '2', c: 'produce' }
          ],
          s: [
            'Add chicken, salsa verde, broth, cumin, and garlic powder to slow cooker.',
            'Cook until tender and shred.',
            'Serve over rice with cabbage slaw and avocado.',
            'Reserve extra for Monday and Tuesday.'
          ],
          gfn: 'Use gluten free broth and salsa verde.'
        }
      },
      {
        n: 'Monday',
        m: 'Chicken Verde Burrito Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover chicken verde', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Pinto beans', q: '1 can', c: 'canned' },
            { n: 'Cheddar cheese', q: '1 cup', c: 'dairy' },
            { n: 'Avocado', q: '1', c: 'produce' },
            { n: 'Sour cream', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the chicken verde, rice, and beans.',
            'Assemble in bowls and top with cheese, avocado, and sour cream.'
          ],
          gfn: 'Naturally gluten free with safe canned beans.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Verde Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover chicken verde', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded lettuce', q: '2 cups', c: 'produce' },
            { n: 'Monterey Jack cheese', q: '1 cup', c: 'dairy' },
            { n: 'Avocado', q: '1', c: 'produce' }
          ],
          s: [
            'Warm the chicken verde and tortillas.',
            'Fill tortillas with chicken, lettuce, cheese, and avocado.'
          ],
          gfn: 'Use certified gluten free corn tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Quick Chicken Quesadilla Skillet',
        b: 'chicken',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Cooked shredded chicken', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '10', c: 'bread' },
            { n: 'Cheddar cheese', q: '2 cups', c: 'dairy' },
            { n: 'Bell pepper', q: '1', c: 'produce' },
            { n: 'Onion', q: '1/2 medium', c: 'produce' },
            { n: 'Mild salsa', q: '1/2 cup', c: 'canned' }
          ],
          s: [
            'Sauté diced onion and bell pepper until softened.',
            'Add chicken and warm through.',
            'Layer tortillas, cheese, and chicken mixture in a large skillet in batches.',
            'Cook until crisp and melty, then cut into wedges and serve with salsa.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Thursday',
        m: 'Bean Tostada Plates',
        b: 'plant',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$9',
          gf: true,
          i: [
            { n: 'Gluten free tostadas', q: '8', c: 'bread' },
            { n: 'Refried beans, gluten free', q: '2 cans', c: 'canned' },
            { n: 'Shredded lettuce', q: '2 cups', c: 'produce' },
            { n: 'Cherry tomatoes', q: '1 cup', c: 'produce' },
            { n: 'Avocados', q: '2', c: 'produce' },
            { n: 'Cheese', q: '1 cup', c: 'dairy' }
          ],
          s: [
            'Warm the refried beans.',
            'Spread beans on tostadas.',
            'Top with lettuce, tomatoes, avocado, and cheese.'
          ],
          gfn: 'Use gluten free tostadas and refried beans.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Verde Chicken Pizza',
        b: 'chicken',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Salsa verde', q: '1/3 cup', c: 'canned' },
            { n: 'Cooked chicken', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Red onion', q: '1/4', c: 'produce' },
            { n: 'Cilantro', q: '2 tbsp', c: 'produce' }
          ],
          s: [
            'Spread salsa verde over the crusts.',
            'Top with chicken, cheese, and thin sliced red onion.',
            'Bake until crisp and bubbly.',
            'Finish with chopped cilantro.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Chicken Burrito Bowl Bar',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '1.5 lbs', c: 'protein' },
            { n: 'Rice', q: '2 cups dry', c: 'pantry' },
            { n: 'Black beans', q: '1 can', c: 'canned' },
            { n: 'Corn', q: '1 cup', c: 'frozen' },
            { n: 'Cheese', q: '1 cup', c: 'dairy' },
            { n: 'Avocados', q: '2', c: 'produce' },
            { n: 'Gluten free taco seasoning', q: '2 tbsp', c: 'spices' }
          ],
          s: [
            'Season and cook the chicken in a skillet, then slice.',
            'Cook rice and heat beans and corn.',
            'Set up all toppings in bowls and let everyone build their own.'
          ],
          gfn: 'Use gluten free taco seasoning.'
        }
      }
    ]
  },

  {
    id: 'mexican-turkey-chili-03',
    name: 'Mexican Turkey Chili Week',
    cuisine: 'mexican',
    season: 'fall',
    weather: ['cold', 'mild'],
    protein: 'Turkey',
    themeId: 'mexican',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Turkey Chili',
        b: 'turkey',
        batch: true,
        r: {
          t: '20 min + 35 min simmer',
          sv: 8,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '2 lbs', c: 'protein' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Bell peppers', q: '2', c: 'produce' },
            { n: 'Black beans', q: '2 cans', c: 'canned' },
            { n: 'Kidney beans', q: '1 can', c: 'canned' },
            { n: 'Corn', q: '1 cup', c: 'frozen' },
            { n: 'Crushed tomatoes', q: '1 can', c: 'canned' },
            { n: 'Chili powder', q: '2 tbsp', c: 'spices' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Brown ground turkey in a large pot.',
            'Add onion and peppers and cook until softened.',
            'Stir in beans, corn, tomatoes, and seasonings.',
            'Simmer 30 to 35 minutes.',
            'Reserve leftovers for Monday and Tuesday.'
          ],
          gfn: 'Use safe canned goods and seasonings.'
        }
      },
      {
        n: 'Monday',
        m: 'Chili Rice Bowls',
        b: 'turkey',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover turkey chili', q: '3 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Cheddar cheese', q: '1 cup', c: 'dairy' },
            { n: 'Sour cream', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the chili and rice.',
            'Serve the chili over rice with cheese and sour cream.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chili Tacos',
        b: 'turkey',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover turkey chili', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cheese', q: '1 cup', c: 'dairy' },
            { n: 'Shredded lettuce', q: '2 cups', c: 'produce' },
            { n: 'Avocado', q: '1', c: 'produce' }
          ],
          s: [
            'Warm the chili until thick and scoopable.',
            'Warm the tortillas.',
            'Fill tortillas with chili, cheese, lettuce, and avocado.'
          ],
          gfn: 'Use certified gluten free tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Turkey Enchilada Skillet',
        b: 'turkey',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Corn tortillas', q: '8', c: 'bread' },
            { n: 'Green enchilada sauce, gluten free', q: '1 can', c: 'canned' },
            { n: 'Cheddar cheese', q: '1.5 cups', c: 'dairy' },
            { n: 'Black beans', q: '1 can', c: 'canned' },
            { n: 'Onion', q: '1/2 medium', c: 'produce' }
          ],
          s: [
            'Brown turkey with diced onion.',
            'Stir in beans and enchilada sauce.',
            'Tear tortillas into strips and fold into the skillet.',
            'Top with cheese, cover, and cook until melty.'
          ],
          gfn: 'Use gluten free enchilada sauce and tortillas.'
        }
      },
      {
        n: 'Thursday',
        m: 'Lentil Taco Bowls',
        b: 'plant',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cooked lentils', q: '3 cups', c: 'pantry' },
            { n: 'Rice', q: '2 cups cooked', c: 'pantry' },
            { n: 'Corn', q: '1 cup', c: 'frozen' },
            { n: 'Avocados', q: '2', c: 'produce' },
            { n: 'Taco seasoning, gluten free', q: '1 tbsp', c: 'spices' },
            { n: 'Lime', q: '1', c: 'produce' }
          ],
          s: [
            'Warm the lentils with taco seasoning and a splash of water.',
            'Heat rice and corn.',
            'Assemble bowls with rice, lentils, corn, avocado, and lime.'
          ],
          gfn: 'Use gluten free taco seasoning.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Taco Pizza',
        b: 'turkey',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked taco turkey', q: '1.5 cups', c: 'protein' },
            { n: 'Mild salsa', q: '1/3 cup', c: 'canned' },
            { n: 'Cheddar and mozzarella blend', q: '2 cups', c: 'dairy' },
            { n: 'Corn', q: '1/2 cup', c: 'frozen' },
            { n: 'Crushed tortilla chips, gluten free', q: '1/2 cup', c: 'pantry' }
          ],
          s: [
            'Spread salsa over the crusts.',
            'Top with cooked taco turkey, cheese, and corn.',
            'Bake until crisp.',
            'Finish with crushed gluten free tortilla chips.'
          ],
          gfn: 'Use certified gluten free crust and chips.'
        }
      },
      {
        n: 'Saturday',
        m: 'Weekend Beef Fajita Skillet',
        b: 'beef',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Flank steak or sirloin', q: '1.25 lbs', c: 'protein' },
            { n: 'Bell peppers', q: '3', c: 'produce' },
            { n: 'Onion', q: '1 large', c: 'produce' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Paprika', q: '1 tsp', c: 'spices' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Corn tortillas', q: '12', c: 'bread' }
          ],
          s: [
            'Slice the beef thinly against the grain.',
            'Cook in a hot skillet with oil until just browned.',
            'Remove, then cook peppers and onion until tender-crisp.',
            'Return beef to pan, season, and serve with warm tortillas.'
          ],
          note: 'Use beef sparingly as the weekend treat meal.',
          gfn: 'Use certified gluten free tortillas.'
        }
      }
    ]
  },

  {
    id: 'mexican-pork-carnitas-04',
    name: 'Mexican Pork Carnitas Week',
    cuisine: 'mexican',
    season: 'winter',
    weather: ['cold', 'mild'],
    protein: 'Pork',
    themeId: 'mexican',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Slow Cooker Pork Carnitas',
        b: 'pork',
        batch: true,
        r: {
          t: '15 min + 8 hr slow',
          sv: 8,
          cost: '~$19',
          gf: true,
          i: [
            { n: 'Pork shoulder', q: '3.5 lbs', c: 'protein' },
            { n: 'Onion', q: '1 large', c: 'produce' },
            { n: 'Garlic', q: '5 cloves', c: 'produce' },
            { n: 'Orange juice', q: '1/2 cup', c: 'canned' },
            { n: 'Lime juice', q: '2 tbsp', c: 'produce' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Oregano', q: '1 tsp', c: 'spices' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' }
          ],
          s: [
            'Add pork, onion, garlic, orange juice, lime juice, cumin, oregano, salt, and pepper to slow cooker.',
            'Cook on LOW 8 hours until the pork shreds easily.',
            'Shred and crisp some of it in a hot skillet if desired.',
            'Serve over rice with cabbage.',
            'Reserve for Monday and Tuesday.'
          ],
          gfn: 'All ingredients are naturally gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Carnitas Bowls',
        b: 'pork',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover carnitas', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Black beans', q: '1 can', c: 'canned' },
            { n: 'Avocado', q: '1', c: 'produce' },
            { n: 'Sour cream', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the carnitas, rice, and beans.',
            'Serve in bowls with avocado and sour cream.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Carnitas Tacos',
        b: 'pork',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover carnitas', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Diced onion', q: '1/2 cup', c: 'produce' },
            { n: 'Cilantro', q: '1/4 cup', c: 'produce' },
            { n: 'Lime', q: '1', c: 'produce' }
          ],
          s: [
            'Warm the carnitas in a skillet.',
            'Warm the tortillas.',
            'Fill with carnitas, onion, cilantro, and lime.'
          ],
          gfn: 'Use certified gluten free corn tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Pork and Pepper Rice Skillet',
        b: 'pork',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Cooked pork carnitas', q: '2 cups', c: 'protein' },
            { n: 'Bell peppers', q: '2', c: 'produce' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Corn', q: '1 cup', c: 'frozen' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Sauté sliced peppers until tender.',
            'Add pork, rice, corn, and cumin.',
            'Cook until hot and lightly crisped.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Thursday',
        m: 'Veggie Taco Soup',
        b: 'plant',
        r: {
          t: '15 min + 20 min simmer',
          sv: 6,
          cost: '~$9',
          gf: true,
          i: [
            { n: 'Black beans', q: '2 cans', c: 'canned' },
            { n: 'Corn', q: '1 cup', c: 'frozen' },
            { n: 'Diced tomatoes', q: '1 can', c: 'canned' },
            { n: 'Vegetable broth, gluten free', q: '4 cups', c: 'canned' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Bell pepper', q: '1', c: 'produce' },
            { n: 'Taco seasoning, gluten free', q: '1 tbsp', c: 'spices' }
          ],
          s: [
            'Cook onion and bell pepper until softened.',
            'Add beans, corn, tomatoes, broth, and taco seasoning.',
            'Simmer for 20 minutes and serve.'
          ],
          gfn: 'Use gluten free broth and taco seasoning.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Carnitas Pizza',
        b: 'pork',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked carnitas', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Mild salsa', q: '1/4 cup', c: 'canned' },
            { n: 'Red onion', q: '1/4', c: 'produce' },
            { n: 'Cilantro', q: '2 tbsp', c: 'produce' }
          ],
          s: [
            'Spread a thin layer of salsa over the crusts.',
            'Top with cheese, carnitas, and onion.',
            'Bake until crisp and bubbly.',
            'Finish with cilantro.'
          ],
          gfn: 'Use certified gluten free crusts.'
        }
      },
      {
        n: 'Saturday',
        m: 'Chicken Fajita Bowls',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '1.5 lbs', c: 'protein' },
            { n: 'Rice', q: '2 cups cooked', c: 'pantry' },
            { n: 'Bell peppers', q: '2', c: 'produce' },
            { n: 'Onion', q: '1', c: 'produce' },
            { n: 'Cumin', q: '1 tsp', c: 'spices' },
            { n: 'Paprika', q: '1 tsp', c: 'spices' },
            { n: 'Avocados', q: '2', c: 'produce' }
          ],
          s: [
            'Cook sliced chicken in a skillet with cumin, paprika, salt, and pepper.',
            'Cook peppers and onion until tender.',
            'Serve over rice with avocado.'
          ],
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  }
];
