import firebase from  'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDX2rn_iJ0m7376fhv7mosbujbNlnrwivE",
    authDomain: "clone-dda48.firebaseapp.com",
    projectId: "clone-dda48",
    storageBucket: "clone-dda48.appspot.com",
    messagingSenderId: "670381777637",
    appId: "1:670381777637:web:3ad0bf034f31d0a2a06a0c",
    measurementId: "G-7DR8TBD400"
  };
  const fireBaseApp=firebase.initializeApp(firebaseConfig);
  const db=fireBaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};