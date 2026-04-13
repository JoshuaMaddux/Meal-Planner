export const CLASSIC_PLANS = [
  {
    id: 'classic-chicken-roast-01',
    name: 'Classic Roast Chicken Week',
    cuisine: 'classic',
    season: 'fall',
    weather: ['cold', 'mild'],
    protein: 'Chicken',
    themeId: 'classic',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Sheet Pan Roast Chicken and Vegetables',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min + 40 min roast',
          sv: 6,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Bone-in chicken thighs', q: '3 lbs', c: 'protein' },
            { n: 'Baby potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Carrots', q: '1 lb', c: 'produce' },
            { n: 'Green beans', q: '12 oz', c: 'produce' },
            { n: 'Olive oil', q: '3 tbsp', c: 'pantry' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Dried rosemary', q: '1 tsp', c: 'spices' },
            { n: 'Paprika', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Toss potatoes and carrots with olive oil, rosemary, paprika, salt, and pepper. Spread on a sheet pan.',
            'Season chicken thighs with garlic powder, salt, and pepper and place on the pan.',
            'Roast for 30 minutes.',
            'Add green beans tossed with a little oil and roast 10 more minutes until chicken reaches 165°F.',
            'Reserve extra chicken and vegetables for Monday.'
          ],
          note: 'This is the anchor meal for the week and gives you easy leftovers.',
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Roast Chicken Leftover Bowls',
        b: 'chicken',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover roast chicken', q: '2 cups', c: 'protein' },
            { n: 'Leftover roasted potatoes and carrots', q: '2 to 3 cups', c: 'produce' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Butter', q: '1 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the leftover chicken and vegetables.',
            'Heat rice and stir in a little butter.',
            'Serve in bowls with chicken and roasted vegetables over rice.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Ranch Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$6',
          gf: true,
          i: [
            { n: 'Cooked shredded chicken', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded lettuce', q: '2 cups', c: 'produce' },
            { n: 'Cheddar cheese', q: '1 cup', c: 'dairy' },
            { n: 'Gluten free ranch dressing', q: '1/4 cup', c: 'dairy' },
            { n: 'Cherry tomatoes', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Warm the shredded chicken.',
            'Heat the tortillas in a dry skillet.',
            'Fill with chicken, lettuce, cheese, and tomatoes.',
            'Drizzle lightly with ranch before serving.'
          ],
          gfn: 'Use certified gluten free corn tortillas and gluten free ranch.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken and Rice Skillet',
        b: 'chicken',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Chicken breast', q: '1.5 lbs', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Frozen peas', q: '1 cup', c: 'frozen' },
            { n: 'Carrots, diced', q: '1 cup', c: 'produce' },
            { n: 'Chicken broth, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Butter', q: '1 tbsp', c: 'dairy' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Dice the chicken and season with garlic powder, salt, and pepper.',
            'Cook chicken in a skillet until browned and cooked through.',
            'Add carrots and cook until softened.',
            'Stir in rice, peas, broth, and butter.',
            'Cook until heated through and lightly creamy.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Thursday',
        m: 'White Bean and Potato Soup',
        b: 'plant',
        r: {
          t: '15 min + 25 min simmer',
          sv: 6,
          cost: '~$9',
          gf: true,
          i: [
            { n: 'Cannellini beans', q: '2 cans', c: 'canned' },
            { n: 'Potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Carrots', q: '3', c: 'produce' },
            { n: 'Celery', q: '3 stalks', c: 'produce' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Vegetable broth, gluten free', q: '5 cups', c: 'canned' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' },
            { n: 'Dried thyme', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Dice the onion, carrots, celery, and potatoes.',
            'Cook onion, carrots, and celery in olive oil until softened.',
            'Add potatoes, beans, broth, thyme, salt, and pepper.',
            'Simmer until potatoes are tender.',
            'Mash a small portion of the soup to thicken and serve.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Chicken Alfredo Pizza',
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
            { n: 'Alfredo sauce, gluten free', q: '1/2 cup', c: 'dairy' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Spinach', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Spread Alfredo sauce over the crusts.',
            'Top with chicken, mozzarella, and spinach.',
            'Bake according to crust directions until bubbling and crisp.'
          ],
          gfn: 'Use certified gluten free crust and gluten free Alfredo sauce.'
        }
      },
      {
        n: 'Saturday',
        m: 'Crispy Chicken Tenders and Oven Fries',
        b: 'chicken',
        r: {
          t: '20 min + 25 min bake',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Chicken tenders', q: '1.5 lbs', c: 'protein' },
            { n: 'Russet potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Gluten free breadcrumbs', q: '1 cup', c: 'bread' },
            { n: 'Eggs', q: '2', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Cut potatoes into fries, toss with oil, salt, and pepper, and bake for 25 minutes, flipping halfway.',
            'Dip chicken in beaten egg, then in gluten free breadcrumbs mixed with Parmesan and garlic powder.',
            'Bake chicken on a lined sheet pan for 18 to 20 minutes until cooked through.',
            'Serve with fries.'
          ],
          gfn: 'Use certified gluten free breadcrumbs.'
        }
      }
    ]
  },

  {
    id: 'classic-turkey-comfort-02',
    name: 'Classic Turkey Comfort Week',
    cuisine: 'classic',
    season: 'winter',
    weather: ['cold', 'mild'],
    protein: 'Turkey',
    themeId: 'classic',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Turkey Meatballs with Mashed Potatoes',
        b: 'turkey',
        batch: true,
        r: {
          t: '25 min + 25 min cook',
          sv: 6,
          cost: '~$16',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '2 lbs', c: 'protein' },
            { n: 'Gluten free breadcrumbs', q: '3/4 cup', c: 'bread' },
            { n: 'Egg', q: '1', c: 'dairy' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Onion powder', q: '1 tsp', c: 'spices' },
            { n: 'Potatoes', q: '3 lbs', c: 'produce' },
            { n: 'Butter', q: '3 tbsp', c: 'dairy' },
            { n: 'Milk', q: '1/2 cup', c: 'dairy' },
            { n: 'Frozen peas', q: '1 bag', c: 'frozen' }
          ],
          s: [
            'Mix turkey, breadcrumbs, egg, garlic powder, onion powder, salt, and pepper.',
            'Form into meatballs and bake at 400°F for 20 minutes.',
            'Boil potatoes until tender, then mash with butter and milk.',
            'Heat peas on the stovetop or in the microwave.',
            'Serve meatballs over mashed potatoes with peas on the side.',
            'Reserve extra meatballs for Monday and Tuesday.'
          ],
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
            { n: 'Green beans', q: '12 oz', c: 'produce' },
            { n: 'Butter', q: '1 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm the meatballs.',
            'Cook or steam the green beans.',
            'Heat rice and stir in a little butter.',
            'Serve bowls with rice, meatballs, and green beans.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Turkey Cheeseburger Tacos',
        b: 'turkey',
        anchor: 'taco',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$10',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Cheddar cheese', q: '1 cup', c: 'dairy' },
            { n: 'Shredded lettuce', q: '2 cups', c: 'produce' },
            { n: 'Diced pickles', q: '1/4 cup', c: 'produce' },
            { n: 'Gluten free ketchup', q: '2 tbsp', c: 'pantry' },
            { n: 'Yellow mustard', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Cook the ground turkey in a skillet and season with salt and pepper.',
            'Stir in ketchup and mustard.',
            'Warm tortillas and fill with turkey, cheese, lettuce, and diced pickles.'
          ],
          note: 'A fun burger-inspired taco that still fits the weekly pattern.',
          gfn: 'Use certified gluten free tortillas and ketchup.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Turkey and Vegetable Rice Bake',
        b: 'turkey',
        r: {
          t: '20 min + 25 min bake',
          sv: 4,
          cost: '~$11',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.25 lbs', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Frozen mixed vegetables', q: '2 cups', c: 'frozen' },
            { n: 'Chicken broth, gluten free', q: '1/2 cup', c: 'canned' },
            { n: 'Cheddar cheese', q: '1 cup', c: 'dairy' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 375°F.',
            'Brown the turkey with garlic powder, salt, and pepper.',
            'Mix turkey with rice, vegetables, broth, and half the cheese.',
            'Spread in a baking dish, top with remaining cheese, and bake 25 minutes.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Thursday',
        m: 'Creamy Tomato-Free Lentil Stew',
        b: 'plant',
        r: {
          t: '15 min + 30 min simmer',
          sv: 6,
          cost: '~$8',
          gf: true,
          i: [
            { n: 'Brown lentils', q: '1.5 cups dry', c: 'pantry' },
            { n: 'Carrots', q: '3', c: 'produce' },
            { n: 'Celery', q: '3 stalks', c: 'produce' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Vegetable broth, gluten free', q: '5 cups', c: 'canned' },
            { n: 'Heavy cream', q: '1/4 cup', c: 'dairy' },
            { n: 'Dried thyme', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Cook onion, carrots, and celery in a pot until softened.',
            'Add lentils, broth, thyme, salt, and pepper.',
            'Simmer until lentils are tender.',
            'Stir in cream at the end for richness.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Turkey Ranch Pizza',
        b: 'turkey',
        anchor: 'pizza',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$14',
          gf: true,
          i: [
            { n: 'Gluten free pizza crusts', q: '2', c: 'frozen' },
            { n: 'Cooked ground turkey', q: '1.5 cups', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Gluten free ranch dressing', q: '1/4 cup', c: 'dairy' },
            { n: 'Spinach', q: '1 cup', c: 'produce' }
          ],
          s: [
            'Spread a thin layer of ranch over the crusts.',
            'Top with turkey, mozzarella, and spinach.',
            'Bake until crisp and browned.'
          ],
          gfn: 'Use certified gluten free crust and ranch.'
        }
      },
      {
        n: 'Saturday',
        m: 'Turkey Salisbury Steaks',
        b: 'turkey',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$13',
          gf: true,
          i: [
            { n: 'Ground turkey', q: '1.5 lbs', c: 'protein' },
            { n: 'Egg', q: '1', c: 'dairy' },
            { n: 'Gluten free breadcrumbs', q: '1/2 cup', c: 'bread' },
            { n: 'Mushrooms', q: '8 oz', c: 'produce' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Beef broth, gluten free', q: '1 cup', c: 'canned' },
            { n: 'Cornstarch', q: '1 tbsp', c: 'pantry' },
            { n: 'Mashed potatoes', q: 'prepared, 3 cups', c: 'pantry' }
          ],
          s: [
            'Mix turkey, egg, breadcrumbs, salt, and pepper. Form into oval patties.',
            'Brown patties in a skillet and set aside.',
            'Cook mushrooms and onion until softened.',
            'Add broth and thicken with cornstarch slurry.',
            'Return patties to the pan and simmer until cooked through.',
            'Serve over mashed potatoes.'
          ],
          gfn: 'Use certified gluten free breadcrumbs and broth.'
        }
      }
    ]
  },

  {
    id: 'classic-pork-hearty-03',
    name: 'Classic Pork Hearty Week',
    cuisine: 'classic',
    season: 'winter',
    weather: ['cold', 'mild'],
    protein: 'Pork',
    themeId: 'classic',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Slow Cooker Pulled Pork Bowls',
        b: 'pork',
        batch: true,
        r: {
          t: '15 min + 8 hr slow',
          sv: 8,
          cost: '~$18',
          gf: true,
          i: [
            { n: 'Pork shoulder', q: '3.5 lbs', c: 'protein' },
            { n: 'Chicken broth, gluten free', q: '1 cup', c: 'canned' },
            { n: 'Garlic powder', q: '1 tsp', c: 'spices' },
            { n: 'Paprika', q: '1 tsp', c: 'spices' },
            { n: 'Brown sugar', q: '1 tbsp', c: 'pantry' },
            { n: 'Rice', q: '2 cups dry', c: 'pantry' },
            { n: 'Roasted broccoli', q: '4 cups', c: 'produce' }
          ],
          s: [
            'Rub pork with garlic powder, paprika, brown sugar, salt, and pepper.',
            'Place in slow cooker with broth and cook on LOW 8 hours.',
            'Shred the pork.',
            'Serve over rice with roasted broccoli.',
            'Reserve extra for Monday and Tuesday.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Monday',
        m: 'Pulled Pork Rice Bowls',
        b: 'pork',
        r: {
          t: '10 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover pulled pork', q: '2 cups', c: 'protein' },
            { n: 'Cooked rice', q: '2 cups', c: 'pantry' },
            { n: 'Green beans', q: '12 oz', c: 'produce' },
            { n: 'Butter', q: '1 tbsp', c: 'dairy' }
          ],
          s: [
            'Warm pulled pork.',
            'Steam or sauté green beans.',
            'Serve over rice with a little butter.'
          ],
          gfn: 'Naturally gluten free.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Pork BBQ Tacos',
        b: 'pork',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$6',
          gf: true,
          i: [
            { n: 'Leftover pulled pork', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Shredded cabbage', q: '2 cups', c: 'produce' },
            { n: 'Cheddar cheese', q: '1 cup', c: 'dairy' },
            { n: 'Gluten free BBQ sauce', q: '1/4 cup', c: 'pantry' }
          ],
          s: [
            'Warm the pork with a small amount of BBQ sauce.',
            'Warm tortillas.',
            'Fill with pork, cabbage, and cheese.'
          ],
          gfn: 'Use certified gluten free tortillas and BBQ sauce.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Pork Sausage and Potato Skillet',
        b: 'pork',
        r: {
          t: '25 min',
          sv: 4,
          cost: '~$12',
          gf: true,
          i: [
            { n: 'Gluten free pork sausage', q: '1 lb', c: 'protein' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Bell peppers', q: '2', c: 'produce' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Olive oil', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Parboil or microwave potatoes until slightly tender.',
            'Brown sausage in a skillet and remove.',
            'Cook potatoes, peppers, and onion in olive oil until golden.',
            'Return sausage to the pan and cook until heated through.'
          ],
          gfn: 'Use clearly labeled gluten free sausage.'
        }
      },
      {
        n: 'Thursday',
        m: 'Loaded Baked Potato Soup',
        b: 'plant',
        r: {
          t: '15 min + 25 min simmer',
          sv: 6,
          cost: '~$10',
          gf: true,
          i: [
            { n: 'Potatoes', q: '3 lbs', c: 'produce' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Chicken broth, gluten free', q: '5 cups', c: 'canned' },
            { n: 'Milk', q: '1 cup', c: 'dairy' },
            { n: 'Cheddar cheese', q: '1.5 cups', c: 'dairy' },
            { n: 'Sour cream', q: '1/4 cup', c: 'dairy' },
            { n: 'Green onions', q: '2', c: 'produce' }
          ],
          s: [
            'Cook onion in a pot until softened.',
            'Add diced potatoes and broth and simmer until potatoes are tender.',
            'Mash part of the soup for thickness.',
            'Stir in milk, cheese, and sour cream.',
            'Top with green onions.'
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
            { n: 'Gluten free sausage', q: '10 oz', c: 'protein' },
            { n: 'Mozzarella cheese', q: '2 cups', c: 'dairy' },
            { n: 'Bell pepper', q: '1', c: 'produce' },
            { n: 'Mild pizza sauce, gluten free', q: '1/2 cup', c: 'canned' }
          ],
          s: [
            'Brown the sausage.',
            'Spread sauce over crusts and top with cheese, sausage, and sliced pepper.',
            'Bake until crisp and bubbling.'
          ],
          gfn: 'Use certified gluten free crust, sausage, and sauce.'
        }
      },
      {
        n: 'Saturday',
        m: 'Pork Chops with Apples and Potatoes',
        b: 'pork',
        r: {
          t: '20 min + 25 min roast',
          sv: 4,
          cost: '~$15',
          gf: true,
          i: [
            { n: 'Pork chops', q: '4', c: 'protein' },
            { n: 'Apples', q: '2', c: 'produce' },
            { n: 'Baby potatoes', q: '1.5 lbs', c: 'produce' },
            { n: 'Olive oil', q: '2 tbsp', c: 'pantry' },
            { n: 'Dried thyme', q: '1 tsp', c: 'spices' }
          ],
          s: [
            'Preheat oven to 425°F.',
            'Toss potatoes with oil, thyme, salt, and pepper and begin roasting.',
            'Season pork chops and add them to the pan after 10 minutes.',
            'Add sliced apples for the final 15 minutes.',
            'Roast until pork reaches a safe temperature.'
          ],
          gfn: 'Naturally gluten free.'
        }
      }
    ]
  },

  {
    id: 'classic-mixed-family-04',
    name: 'Classic Mixed Family Favorites Week',
    cuisine: 'classic',
    season: 'spring',
    weather: ['mild', 'warm'],
    protein: 'Chicken',
    themeId: 'classic',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free', 'fast-prep'],
    days: [
      {
        n: 'Sunday',
        m: 'Rotisserie Chicken Dinner Plates',
        b: 'chicken',
        batch: true,
        r: {
          t: '20 min',
          sv: 6,
          cost: '~$17',
          gf: true,
          i: [
            { n: 'Rotisserie chicken, gluten free', q: '2 whole', c: 'protein' },
            { n: 'Mashed potatoes', q: 'prepared, 4 cups', c: 'pantry' },
            { n: 'Green beans', q: '1 lb', c: 'produce' },
            { n: 'Butter', q: '2 tbsp', c: 'dairy' },
            { n: 'Chicken broth, gluten free', q: '1/2 cup', c: 'canned' }
          ],
          s: [
            'Warm the rotisserie chicken if needed and carve.',
            'Prepare or reheat mashed potatoes.',
            'Cook green beans until tender.',
            'Optional: use a little broth for a simple pan-style drizzle over the chicken.',
            'Reserve leftover chicken for Monday and Tuesday.'
          ],
          gfn: 'Confirm the rotisserie chicken is gluten free.'
        }
      },
      {
        n: 'Monday',
        m: 'Chicken and Gravy Bowls',
        b: 'chicken',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$4',
          gf: true,
          i: [
            { n: 'Leftover rotisserie chicken', q: '2 cups', c: 'protein' },
            { n: 'Mashed potatoes', q: '3 cups', c: 'pantry' },
            { n: 'Frozen peas', q: '1 cup', c: 'frozen' },
            { n: 'Chicken broth, gluten free', q: '1 cup', c: 'canned' },
            { n: 'Cornstarch', q: '1 tbsp', c: 'pantry' }
          ],
          s: [
            'Warm chicken, potatoes, and peas.',
            'Make a quick gravy by simmering broth and thickening with cornstarch slurry.',
            'Serve chicken and peas over mashed potatoes with gravy.'
          ],
          gfn: 'Use gluten free broth.'
        }
      },
      {
        n: 'Tuesday',
        m: 'Taco Tuesday · Chicken Caesar Tacos',
        b: 'chicken',
        anchor: 'taco',
        r: {
          t: '15 min',
          sv: 4,
          cost: '~$6',
          gf: true,
          i: [
            { n: 'Cooked chicken', q: '2 cups', c: 'protein' },
            { n: 'Corn tortillas', q: '12', c: 'bread' },
            { n: 'Romaine lettuce', q: '3 cups', c: 'produce' },
            { n: 'Parmesan cheese', q: '1/2 cup', c: 'dairy' },
            { n: 'Gluten free Caesar dressing', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Warm the chicken and tortillas.',
            'Toss romaine lightly with Caesar dressing.',
            'Fill tacos with chicken, romaine, and Parmesan.'
          ],
          note: 'A playful family-friendly fusion taco night.',
          gfn: 'Use certified gluten free Caesar dressing and tortillas.'
        }
      },
      {
        n: 'Wednesday',
        m: 'Chicken Broccoli Alfredo Pasta',
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
            { n: 'Alfredo sauce, gluten free', q: '1 cup', c: 'dairy' },
            { n: 'Parmesan cheese', q: '1/4 cup', c: 'dairy' }
          ],
          s: [
            'Cook the gluten free pasta according to package directions.',
            'Steam or boil the broccoli until tender.',
            'Warm the Alfredo sauce and chicken together.',
            'Toss pasta with sauce, broccoli, and Parmesan.'
          ],
          gfn: 'Use certified gluten free pasta and Alfredo sauce.'
        }
      },
      {
        n: 'Thursday',
        m: 'Mac and Cheese with Peas',
        b: 'plant',
        r: {
          t: '20 min',
          sv: 4,
          cost: '~$9',
          gf: true,
          i: [
            { n: 'Gluten free pasta', q: '12 oz', c: 'pantry' },
            { n: 'Cheddar cheese', q: '2 cups', c: 'dairy' },
            { n: 'Milk', q: '1.5 cups', c: 'dairy' },
            { n: 'Butter', q: '2 tbsp', c: 'dairy' },
            { n: 'Cornstarch', q: '1 tbsp', c: 'pantry' },
            { n: 'Frozen peas', q: '1 cup', c: 'frozen' }
          ],
          s: [
            'Cook gluten free pasta.',
            'Make a simple cheese sauce with butter, milk, cornstarch, and cheese.',
            'Stir in peas and pasta and serve.'
          ],
          gfn: 'Use certified gluten free pasta.'
        }
      },
      {
        n: 'Friday',
        m: 'Pizza Friday · Classic Cheese Pizza',
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
            { n: 'Mozzarella cheese', q: '2.5 cups', c: 'dairy' }
          ],
          s: [
            'Spread sauce over crusts.',
            'Top generously with mozzarella.',
            'Bake until crisp and bubbly.'
          ],
          gfn: 'Use certified gluten free crust and sauce.'
        }
      },
      {
        n: 'Saturday',
        m: 'Weekend Beef Meatloaf Plates',
        b: 'beef',
        r: {
          t: '20 min + 45 min bake',
          sv: 6,
          cost: '~$17',
          gf: true,
          i: [
            { n: 'Ground beef', q: '2 lbs', c: 'protein' },
            { n: 'Gluten free breadcrumbs', q: '1 cup', c: 'bread' },
            { n: 'Eggs', q: '2', c: 'dairy' },
            { n: 'Onion', q: '1 medium', c: 'produce' },
            { n: 'Gluten free ketchup', q: '1/3 cup', c: 'pantry' },
            { n: 'Potatoes', q: '2 lbs', c: 'produce' },
            { n: 'Green beans', q: '12 oz', c: 'produce' }
          ],
          s: [
            'Preheat oven to 375°F.',
            'Mix beef, breadcrumbs, eggs, diced onion, half the ketchup, salt, and pepper.',
            'Shape into a loaf and top with remaining ketchup.',
            'Bake for 45 minutes or until cooked through.',
            'Serve with potatoes and green beans.'
          ],
          note: 'Beef is the rare weekend meal.',
          gfn: 'Use certified gluten free breadcrumbs and ketchup.'
        }
      }
    ]
  }
];
