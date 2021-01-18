import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHDbQQZYKIMm5FSQxdmGD-LbrTD-XZ3f8",
    authDomain: "pi2sbpp21.firebaseapp.com",
    databaseURL: "https://pi2sbpp21.firebaseio.com",
    projectId: "pi2sbpp21",
    storageBucket: "pi2sbpp21.appspot.com",
    messagingSenderId: "567937183366",
    appId: "1:567937183366:web:0c34e1a76819885ee22b07",
    measurementId: "G-9QTY7E1Z43"
  };

  const fire= firebase.initializeApp(config);
  export default fire;