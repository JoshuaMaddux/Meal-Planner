export const ITALIAN_PLANS = [
  {
    id: 'italian-chicken-pesto-01',
    name: 'Italian Chicken Pesto Week',
    cuisine: 'italian',
    season: 'spring',
    weather: ['mild', 'warm'],
    protein: 'Chicken',
    themeId: 'italian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Pesto Chicken and Roasted Potatoes',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min + 30 min roast',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Gluten free basil pesto', q: '1/2 cup', c: 'pantry' },
            { n: 'Baby potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Green beans', q: '12 oz', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Toss potatoes with olive oil, garlic powder, salt, and pepper and spread on a sheet pan.',
            'Rub chicken with pesto and place on the pan.',
            'Roast for 25 minutes, then add green beans and roast 8 to 10 minutes more until chicken reaches 165°F.',
            'Top with Parmesan before serving.',
            'Reserve extra chicken for Monday and Tuesday.'
          ],
          note: 'Use this as the batch-cook anchor for the week.',
          gfn: 'Use clearly labeled gluten free pesto.'
        }
      },
      {
        n: 'Monday',
        m: 'Pesto Chicken Rice Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover pesto chicken', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Roasted potatoes or green beans', q: '2 cups', c: 'produce' },
            { n: 'Parmesan cheese', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the leftover chicken and vegetables.',
            'Serve over warm rice and finish with Parmesan.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Parmesan Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$6',
          gf: true,
          i: [
            { n: 'Cooked chicken, chopped', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Mozzarella cheese', q: '1 cup', c: 'dairy' },
            { n: 'Mild marinara, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Basil', q: '2 tbsp', c: 'produce' }
          ],
          s: [
            'Warm the chicken with a little marinara.',
            'Heat the corn tortillas.',
            'Fill with chicken, mozzarella, Parmesan, and basil.'
          ],
          note: 'A fun Italian taco that still fits the weekly structure.',
          gfn: 'Use certified gluten free tortillas and sauce.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken Alfredo Broccoli Pasta',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Gluten free pasta', q: '12 oz', c: 'pantry' },
            { n: 'Cooked chicken', q: '2 cups', c: 'protein' },
            { n: 'Broccoli florets', q: '3 cups', c: 'produce' },
            { n: 'Gluten free Alfredo sauce', q: '1 cup', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Cook the pasta according to package directions.',
            'Steam the broccoli until tender.',
            'Warm the Alfredo sauce and stir in the chicken.',
            'Toss pasta with sauce, chicken, broccoli, and Parmesan.'
          ],
          gfn: 'Use certified gluten free pasta and Alfredo sauce.'
        }
      },
      {
        n: 'Thursday',
        m: 'White Bean Garlic Skillet',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Cannellini beans', q: '2 cans', c: 'canned' },
            { n: 'Spinach', q: '4 cups', c: 'produce' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' }
          ],
          s: [
            'Cook sliced garlic in olive oil over medium heat until fragrant.',
            'Add beans and heat through.',
            'Stir in spinach until wilted.',
            'Serve over rice and top with Parmesan.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Pesto Chicken Pizza',
        b: 'chicken',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Gluten free basil pesto', q: '1/3 cup', c: 'pantry' },
            { n: 'Cooked chicken', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Spinach', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Spread pesto over the crusts.',
            'Top with chicken, mozzarella, and spinach.',
            'Bake according to crust directions until crisp and bubbling.'
          ],
          gfn: 'Use certified gluten free crust and pesto.'
        }
      },
      {
        n: 'Saturday',
        m: 'Chicken Piccata with Potatoes',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$15',
          gf: true,
          i: [
            { n: 'Chicken breast, thin sliced', q: '1.5 lbs', c: 'protein' },
            { n: 'Gluten free flour blend', q: '1/4 cup', c: 'pantry' },
            { n: 'Butter', q: '2 tbsp', c: 'dairy' },
            { n: 'Chicken broth, gluten free', q: '3/4 cup', c: 'canned' },
            { n: 'Capers', q: '2 tbsp', c: 'canned' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Lemon zest', q: 'from 1 lemon', c: 'produce' }
          ],
          s: [
            'Boil or roast potatoes until tender.',
            'Lightly dredge chicken in gluten free flour, salt, and pepper.',
            'Cook chicken in butter until golden and cooked through.',
            'Add broth, capers, and lemon zest and simmer briefly.',
            'Serve with potatoes.'
          ],
          gfn: 'Use gluten free flour and broth.'
        }
      }
    ]
  },

  {
    id: 'italian-turkey-meatball-02',
    name: 'Italian Turkey Meatball Week',
    cuisine: 'italian',
    season: 'fall',
    weather: ['cold', 'mild'],
    protein: 'Turkey',
    themeId: 'italian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Turkey Meatballs with Gluten Free Pasta',
        b: 'turkey',
        batch: true,
        r: {
          t: '25 min + 25 min bake',
          sv: 6,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '2 lbs', c: 'protein' },
            { n: 'Gluten free breadcrumbs', q: '3/4 cup', c: 'bread' },
            { n: 'Egg', q: '1', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/3 cup', c: 'dairy' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Onion powder', q: '1 tsp', c: 'spices' },
            { n: 'Gluten free pasta', q: '12 oz', c: 'pantry' },
            { n: 'Mild marinara, gluten free', q: '3 cups', c: 'canned' }
          ],
          s: [
            'Preheat oven to 400°F.',
            'Mix turkey, breadcrumbs, egg, Parmesan, garlic powder, onion powder, salt, and pepper.',
            'Shape into meatballs and bake for 20 to 22 minutes.',
            'Warm marinara in a pot and add the meatballs.',
            'Cook pasta and serve with sauce and meatballs.',
            'Reserve extra meatballs for Monday and Tuesday.'
          ],
          note: 'This is the anchor batch meal for the week.',
          gfn: 'Use certified gluten free breadcrumbs, pasta, and sauce.'
        }
      },
      {
        n: 'Monday',
        m: 'Meatball Rice Bowls',
        b: 'turkey',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover turkey meatballs', q: '8 to 10', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Steamed zucchini', q: '2 cups', c: 'produce' },
            { n: 'Parmesan cheese', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the meatballs and zucchini.',
            'Serve over rice and top with Parmesan.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Meatball Mozzarella Tacos',
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
            { n: 'Mozzarella cheese', q: '1 cup', c: 'dairy' },
            { n: 'Mild marinara, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Basil', q: '2 tbsp', c: 'produce' }
          ],
          s: [
            'Warm sliced meatballs in marinara.',
            'Heat tortillas.',
            'Fill with meatballs, mozzarella, and basil.'
          ],
          gfn: 'Use certified gluten free tortillas and sauce.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Turkey Bolognese Rice Skillet',
        b: 'turkey',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Mild marinara, gluten free', q: '1.5 cups', c: 'canned' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Carrots, diced', q: '1 cup', c: 'produce' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Brown the turkey in a skillet.',
            'Add onion and carrots and cook until softened.',
            'Stir in marinara and simmer for 10 minutes.',
            'Fold in the cooked rice and top with Parmesan.'
          ],
          gfn: 'Use certified gluten free sauce.'
        }
      },
      {
        n: 'Thursday',
        m: 'Creamy Parmesan Polenta with Spinach',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$9',
          gf: true,
          i: [
            { n: 'Polenta or cornmeal', q: '1 cup dry', c: 'pantry' },
            { n: 'Milk', q: '2 cups', c: 'dairy' },
            { n: 'Water', q: '2 cups', c: 'pantry' },
            { n: 'Parmesan cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Spinach', q: '4 cups', c: 'produce' },
            { n: 'Butter', q: '1 tbsp', c: 'dairy' }
          ],
          s: [
            'Bring water and milk to a simmer.',
            'Whisk in polenta and cook until thickened, stirring often.',
            'Stir in butter and Parmesan.',
            'Wilt spinach separately and serve over or alongside the polenta.'
          ],
          gfn: 'Polenta is naturally gluten free.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Meatball Pizza',
        b: 'turkey',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Mild marinara, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Turkey meatballs, sliced', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Parmesan cheese', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Spread marinara over the crusts.',
            'Top with mozzarella and sliced meatballs.',
            'Bake until crisp and bubbling.',
            'Finish with Parmesan.'
          ],
          gfn: 'Use certified gluten free crust and sauce.'
        }
      },
      {
        n: 'Saturday',
        m: 'Turkey Stuffed Zucchini Boats',
        b: 'turkey',
        r: {
          t: '20 min + 25 min bake',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Zucchini', q: '4 large', c: 'produce' },
            { n: 'Mild marinara, gluten free', q: '1 cup', c: 'canned' },
            { n: 'Mozzarella cheese', q: '1 cup', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 400°F.',
            'Halve zucchini and scoop the centers.',
            'Brown turkey with garlic powder, salt, and pepper.',
            'Stir in marinara and fill the zucchini boats.',
            'Top with cheeses and bake 25 minutes.'
          ],
          gfn: 'Use certified gluten free sauce.'
        }
      }
    ]
  },

  {
    id: 'italian-pork-sausage-03',
    name: 'Italian Sausage and Peppers Week',
    cuisine: 'italian',
    season: 'winter',
    weather: ['cold', 'mild'],
    protein: 'Pork',
    themeId: 'italian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Sausage and Peppers with Roasted Potatoes',
        b: 'pork',
        batch: true,
        r: {
          t: '20 min + 30 min roast',
          sv: 6,
          cost: '~$17',
          gf: true,
          i: [
            { n: 'Gluten free Italian sausage', q: '2 lbs', c: 'protein' },
            { n: 'Bell peppers', q: '4', c: 'produce' },
            { n: 'Onions', q: '2', c: 'produce' },
            { n: 'Baby potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Italian seasoning', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Slice peppers, onions, and potatoes.',
            'Toss vegetables with olive oil, Italian seasoning, salt, and pepper.',
            'Arrange sausage and vegetables on sheet pans and roast until potatoes are tender and sausage is cooked through.',
            'Reserve extra sausage and peppers for Monday and Tuesday.'
          ],
          note: 'This sheet pan dinner sets up the first half of the week.',
          gfn: 'Use clearly labeled gluten free sausage.'
        }
      },
      {
        n: 'Monday',
        m: 'Sausage and Rice Bowls',
        b: 'pork',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover sausage and peppers', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Roasted potatoes', q: '2 cups', c: 'produce' },
            { n: 'Parmesan cheese', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the sausage, peppers, and potatoes.',
            'Serve over rice and finish with Parmesan.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Sausage and Pepper Tacos',
        b: 'pork',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$5',
          gf: true,
          i: [
            { n: 'Leftover sausage, sliced', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Peppers and onions', q: '1.5 cups', c: 'produce' },
            { n: 'Mozzarella cheese', q: '1 cup', c: 'dairy' },
            { n: 'Mild marinara, gluten free', q: '1/3 cup', c: 'canned' }
          ],
          s: [
            'Warm the sausage and peppers.',
            'Heat the tortillas.',
            'Fill with sausage, peppers, mozzarella, and a small spoonful of marinara.'
          ],
          gfn: 'Use certified gluten free tortillas and sauce.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Sausage and White Bean Skillet',
        b: 'pork',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Gluten free sausage', q: '1 lb', c: 'protein' },
            { n: 'Cannellini beans', q: '2 cans', c: 'canned' },
            { n: 'Spinach', q: '4 cups', c: 'produce' },
            { n: 'Garlic', q: '3 cloves', c: 'produce' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Brown the sausage and break it into pieces.',
            'Add garlic and cook briefly.',
            'Stir in beans and spinach until spinach wilts.',
            'Top with Parmesan and serve.'
          ],
          gfn: 'Use clearly labeled gluten free sausage.'
        }
      },
      {
        n: 'Thursday',
        m: 'Creamy Mushroom Risotto',
        b: 'plant',
        r: {
          t: '30 min',
          sv: 4,
          cost: '~$10',
          gf: true,
          i: [
            { n: 'Arborio rice', q: '1.5 cups', c: 'pantry' },
            { n: 'Mushrooms', q: '12 oz', c: 'produce' },
            { n: 'Onion', q: '1 small', c: 'produce' },
            { n: 'Chicken broth, gluten free', q: '5 cups', c: 'canned' },
            { n: 'Parmesan cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Butter', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the broth separately.',
            'Cook onion and mushrooms in butter until softened.',
            'Add arborio rice and stir briefly.',
            'Add warm broth a little at a time, stirring until creamy.',
            'Finish with Parmesan.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Sausage and Pepper Pizza',
        b: 'pork',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Mild pizza sauce, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Cooked sausage', q: '1.5 cups', c: 'protein' },
            { n: 'Bell pepper', q: '1', c: 'produce' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' }
          ],
          s: [
            'Spread sauce over the crusts.',
            'Top with mozzarella, sausage, and sliced pepper.',
            'Bake until crisp and browned.'
          ],
          gfn: 'Use certified gluten free crust and sauce.'
        }
      },
      {
        n: 'Saturday',
        m: 'Pork Chops with Parmesan Potatoes',
        b: 'pork',
        r: {
          t: '25 min + 25 min roast',
          sv: 4,
          cost: '~$15',
          gf: true,
          i: [
            { n: 'Pork chops', q: '4', c: 'protein' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Italian seasoning', q: '1 tsp', c: 'spices' },
            { n: 'Green beans', q: '12 oz', c: 'produce' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Toss potatoes with olive oil, Italian seasoning, salt, pepper, and Parmesan and roast until tender.',
            'Cook pork chops in a skillet or roast until done.',
            'Steam or sauté green beans and serve alongside.'
          ],
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  },

  {
    id: 'italian-mixed-family-04',
    name: 'Italian Family Favorites Week',
    cuisine: 'italian',
    season: 'all',
    weather: ['mild', 'warm', 'cold'],
    protein: 'Chicken',
    themeId: 'italian',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Chicken Parmesan Bake',
        b: 'chicken',
        batch: true,
        r: {
          t: '25 min + 25 min bake',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Chicken breast', q: '2 lbs', c: 'protein' },
            { n: 'Gluten free breadcrumbs', q: '1 cup', c: 'bread' },
            { n: 'Eggs', q: '2', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Mild marinara, gluten free', q: '2 cups', c: 'canned' },
            { n: 'Gluten free pasta', q: '12 oz', c: 'pantry' }
          ],
          s: [
            'Preheat oven to 400°F.',
            'Dip chicken in egg, then coat with gluten free breadcrumbs mixed with Parmesan.',
            'Bake until nearly cooked through, then top with marinara and mozzarella and bake until finished.',
            'Cook pasta and serve alongside.',
            'Reserve extra chicken for Monday and Tuesday.'
          ],
          note: 'This is the anchor bake for the week.',
          gfn: 'Use certified gluten free breadcrumbs, sauce, and pasta.'
        }
      },
      {
        n: 'Monday',
        m: 'Chicken Parmesan Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover chicken Parmesan', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Steamed broccoli', q: '3 cups', c: 'produce' },
            { n: 'Parmesan cheese', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the chicken and broccoli.',
            'Serve over rice and finish with Parmesan.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Alfredo Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$6',
          gf: true,
          i: [
            { n: 'Cooked chicken, chopped', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Gluten free Alfredo sauce', q: '1/2 cup', c: 'dairy' },
            { n: 'Mozzarella cheese', q: '1 cup', c: 'dairy' },
            { n: 'Spinach', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Warm the chicken with a little Alfredo sauce.',
            'Heat tortillas.',
            'Fill with chicken, spinach, mozzarella, and a drizzle of Alfredo.'
          ],
          gfn: 'Use certified gluten free tortillas and Alfredo sauce.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken and Spinach Risotto',
        b: 'chicken',
        r: {
          t: '30 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Arborio rice', q: '1.5 cups', c: 'pantry' },
            { n: 'Cooked chicken', q: '2 cups', c: 'protein' },
            { n: 'Spinach', q: '4 cups', c: 'produce' },
            { n: 'Chicken broth, gluten free', q: '5 cups', c: 'canned' },
            { n: 'Parmesan cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Butter', q: '2 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the broth separately.',
            'Cook arborio rice gradually with the broth, stirring often.',
            'Stir in chicken and spinach near the end.',
            'Finish with butter and Parmesan.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Thursday',
        m: 'Tomato-Free Garlic Butter Pasta',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Gluten free pasta', q: '12 oz', c: 'pantry' },
            { n: 'Butter', q: '3 tbsp', c: 'dairy' },
            { n: 'Garlic', q: '4 cloves', c: 'produce' },
            { n: 'Parmesan cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Frozen peas', q: '1 cup', c: 'frozen' }
          ],
          s: [
            'Cook the pasta according to package directions.',
            'Melt butter and gently cook sliced garlic.',
            'Stir in peas until heated through.',
            'Toss with pasta and Parmesan.'
          ],
          gfn: 'Use certified gluten free pasta.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Margherita Pizza',
        b: 'mixed',
        anchor: 'pizza',
        r: {
          t: '18 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Mild pizza sauce, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Fresh mozzarella', q: '8 oz', c: 'dairy' },
            { n: 'Basil', q: '1/4 cup', c: 'produce' }
          ],
          s: [
            'Spread sauce lightly over the crusts.',
            'Top with sliced fresh mozzarella.',
            'Bake until crisp and melted.',
            'Finish with basil after baking.'
          ],
          gfn: 'Use certified gluten free crust and sauce.'
        }
      },
      {
        n: 'Saturday',
        m: 'Weekend Beef Lasagna Skillet',
        b: 'beef',
        r: {
          t: '30 min',
          sv: 4,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Ground beef', q: '1.25 lbs', c: 'protein' },
            { n: 'Gluten free lasagna noodles or broken pasta', q: '8 oz', c: 'pantry' },
            { n: 'Mild marinara, gluten free', q: '2 cups', c: 'canned' },
            { n: 'Ricotta cheese', q: '1 cup', c: 'dairy' },
            { n: 'Mozzarella cheese', q: '1 cup', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Onion', q: '1 small', c: 'produce' }
          ],
          s: [
            'Brown the beef with diced onion.',
            'Add marinara and broken gluten free noodles with enough water to simmer.',
            'Cook until noodles are tender.',
            'Dollop with ricotta, top with mozzarella and Parmesan, cover, and melt.',
            'Serve as the rare weekend beef meal.'
          ],
          note: 'Beef stays limited to the weekend.',
          gfn: 'Use certified gluten free noodles and sauce.'
        }
      }
    ]
  }
];
