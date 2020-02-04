export const createRecipe = (recipe) => {
  return (dispatch, getState, {getFirestore}) => {
    //Async call to database
    const firestore = getFirestore();
    firestore.collection('recipes').add({
      ...recipe,
      authorFirstName: 'rinem',
      authorLastName: 'test2',
      authorId: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_RECIPE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_RECIPE_ERROR' }, err);
    });
  }
};