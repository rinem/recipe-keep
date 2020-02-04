const initState = {
    recipes: [
    {id: '1', title: 'Instant Pot Greek Chicken Bowls', content: 'The flavors of the Mediterranean are cooked up in 30 minutes in an Instant Pot® for a quick and filling, souvlaki-inspired weeknight dinner.'},
    {id: '2', title: 'Moroccan Chicken', content: 'Looking for a meal to warm you up from the inside out? With spices like cinnamon, turmeric, ginger and coriander, this family-friendly chicken dish will certainly do the trick.'},
    {id: '3', title: 'Baked Potatoes with Broccoli', content: 'This hearty and wholesome weeknight dinner will please both kids and grown-ups, and it\'s made entirely in the Instant Pot®'}
  ]
}

const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_RECIPE':
          console.log('create recipe', action.recipe);
          return state;
        default: 
          return state;    
    }
};

export default recipeReducer;