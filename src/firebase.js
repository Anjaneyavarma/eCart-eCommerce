import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2adJyfF6AAOXCMXb-Ph1TnyrqjOcBNYc",
  authDomain: "e-shopping-f53fb.firebaseapp.com",
  databaseURL: "https://e-shopping-f53fb.firebaseio.com",
  projectId: "e-shopping-f53fb",
  storageBucket: "e-shopping-f53fb.appspot.com",
  messagingSenderId: "597595156039",
  appId: "1:597595156039:web:5e2836054116305e294b62",
  measurementId: "G-8NJTPNMW26"
  });

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}