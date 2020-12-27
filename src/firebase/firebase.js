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
  measurementId: "G-WCX736JTBR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();