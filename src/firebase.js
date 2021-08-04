import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOVarmPLisvhfVlPbSdxaQKO7x40ay7XI",
  authDomain: "shopping-cart-57848.firebaseapp.com",
  projectId: "shopping-cart-57848",
  storageBucket: "shopping-cart-57848.appspot.com",
  messagingSenderId: "788575197183",
  appId: "1:788575197183:web:9f3e18367e2a297108b9ca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialise app 
const db = firebaseApp.firestore();  // database connect
const auth = firebase.auth();   // variables for authentication to handle sign in 

export { db, auth };  //export is necessary to use outside of file