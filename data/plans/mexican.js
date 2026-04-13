export const MEXICAN_PLANS = [
  {
    id: 'mexican-all-chicken-01',
    name: 'Chicken Mexican Week',
    cuisine: 'mexican',
    season: 'all',
    weather: ['mild', 'warm'],
    protein: 'Chicken',
    themeId: 'mexican',
    tags: ['kid-friendly', 'gluten-free'],
    days: [
      {
        n:'Sunday',
        m:'Slow Cooker Chicken Posole Verde',
        b:'chicken',
        batch:true,
        r:{
          t:'15 min + 7 hr slow',
          sv:8,
          cost:'~$18',
          gf:true,
          i:[
            {n:'Chicken thighs',q:'3 lbs',c:'protein'},
            {n:'Hominy',q:'2 cans',c:'canned'},
            {n:'Salsa verde',q:'1.5 cups',c:'canned'}
          ],
          s:[
            'Add ingredients to slow cooker.',
            'Cook low 6 to 8 hours.',
            'Shred chicken and serve.'
          ],
          gfn:'Hominy is naturally gluten free.'
        }
      }
    ]
  }
];
