import firebase from 'firebase'
   
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPm4y1WzYXznNrIZVL3Kh96F86tjfTg8",
  authDomain: "thepappustore-9dbd7.firebaseapp.com",
  databaseURL: "https://thepappustore-9dbd7.firebaseio.com",
  projectId: "thepappustore-9dbd7",
  storageBucket: "thepappustore-9dbd7.appspot.com",
  messagingSenderId: "638565040364",
  appId: "1:638565040364:web:88db44c9f08e945ebf25c9",
  measurementId: "G-QGPQ4238YJ"
};

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

       export function googleSignin() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
       // This gives you a Google Access Token. You can use it to access the Google API.
       var token = result.credential.accessToken;
       // The signed-in user info.
       var user = result.user;
       console.log(user);
       console.log(result);
       })
      .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
     var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
      // ...
      });
    }
           

      
      // function googleSignout() {
      //   firebase
      //     .auth()
      //     .signOut()

      //     .then(
      //       function () {
      //         console.log("Signout Succesfull");
      //       },
      //       function (error) {
      //         console.log("Signout Failed");
      //       }
      //     );
      // }

      

