   import firebase from 'firebase'
   
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
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

            var provider = new firebase.auth.GoogleAuthProvider();

     export function googleSignin() {
        var user = {};
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            var token = result.credential.accessToken;
            user = result.user;

            console.log(token);
            console.log(user);
            console.log(user.displayName);
          })
          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code);
            console.log(error.message);
          });
      console.log(user);

      }

      function googleSignout() {
        firebase
          .auth()
          .signOut()

          .then(
            function () {
              console.log("Signout Succesfull");
            },
            function (error) {
              console.log("Signout Failed");
            }
          );
      }

      

