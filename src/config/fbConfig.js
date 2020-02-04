import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCcBtqGFwBR0kOBQHe7P51ZKJYK1LX_WsU",
    authDomain: "recipe-keep-92c71.firebaseapp.com",
    databaseURL: "https://recipe-keep-92c71.firebaseio.com",
    projectId: "recipe-keep-92c71",
    storageBucket: "recipe-keep-92c71.appspot.com",
    messagingSenderId: "99652606785",
    appId: "1:99652606785:web:fc7d06369dd32c7cbf9fc0",
    measurementId: "G-C694G6QR57"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 