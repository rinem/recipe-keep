const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.recipeCreated = functions.firestore
  .document('recipes/{recipeId}')
  .onCreate(doc => {

    const recipe = doc.data();
    const notification = {
      content: 'Added a new recipe',
      user: `${recipe.authorFirstName} ${recipe.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});