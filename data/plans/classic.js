export const CLASSIC_PLANS = [
  {
    id: 'classic-winter-turkey-01',
    name: 'Winter Turkey Classic',
    cuisine: 'classic',
    season: 'winter',
    weather: ['cold', 'mild'],
    protein: 'Turkey',
    themeId: 'classic',
    tags: ['kid-friendly', 'batch-friendly', 'gluten-free'],
    days: [
      {
        n:'Sunday',
        m:'Slow Cooker Pulled Turkey Bowls',
        b:'turkey',
        batch:true,
        r:{
          t:'15 min + 6 hr',
          sv:6,
          cost:'~$18',
          gf:true,
          i:[
            {n:'Bone-in turkey thighs',q:'3 lbs',c:'protein'},
            {n:'Sweet potatoes',q:'3 medium',c:'produce'},
            {n:'Green beans',q:'12 oz',c:'produce'}
          ],
          s:[
            'Season turkey thighs.',
            'Cook low 6 to 8 hours.',
            'Roast sweet potatoes.',
            'Serve with rice and green beans.'
          ],
          note:'Leftovers power Monday bowls and Tuesday taco meat.',
          gfn:'Check broth label for gluten free.'
        }
      }
    ]
  }
];
