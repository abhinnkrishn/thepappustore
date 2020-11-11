// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIdP_b2p6SNKxlC5V3DvryU3pDLBeEap0",
  authDomain: "thedukaandar.firebaseapp.com",
  databaseURL: "https://thedukaandar.firebaseio.com",
  projectId: "thedukaandar",
  storageBucket: "thedukaandar.appspot.com",
  messagingSenderId: "278257760391",
  appId: "1:278257760391:web:0458aecb5df9ecc7102022",
  measurementId: "G-WCX736JTBR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.FacebookAuthProvider();

export function facebookLogin() {

  console.log("INDIDE facebookLogin");

firebase.auth().signInWithRedirect(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;

  console.log(token);

  // The signed-in user info.
  var user = result.user;

  console.log(user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}// fun closed