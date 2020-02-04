export const createRecipe = (recipe) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_RECIPE', recipe });
    }
  };