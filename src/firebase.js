


// import firebase from 'firebase'
// import './components/Navbar'



// require("firebase/auth");

//    var firebaseConfig = {
//         apiKey: "AIzaSyDyOeuSswlbgmOzHAJu8454164PdGtPzmU",
//         authDomain: "loginlearn-6e3e0.firebaseapp.com",
//         databaseURL: "https://loginlearn-6e3e0.firebaseio.com",
//         projectId: "loginlearn-6e3e0",
//         storageBucket: "loginlearn-6e3e0.appspot.com",
//         messagingSenderId: "699755752010",
//         appId: "1:699755752010:web:ecef951104c432dec7d4b3",
//         measurementId: "G-HSSJJZ11G0",
//       };
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);

//      const provider = new firebase.auth.GoogleAuthProvider();
//      const auth = firebase.auth();

    
//    function googleSignin() {
//         firebase
//           .auth()

//           .signInWithPopup(provider)
//           .then(function (result) {
//             var token = result.credential.accessToken;
//             var user = result.user;

//             console.log(token);
//             console.log(user);
//             console.log(user.displayName);
//           })
//           .catch(function (error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;

//             console.log(error.code);
//             console.log(error.message);
//           });
//       }

//     function googleSignout() {
//         firebase
//           .auth()
//           .signOut()

//           .then(
//             function () {
//               console.log("Signout Succesfull");
//             },
//             function (error) {
//               console.log("Signout Failed");
//             }
//           );
//       }


//      /***************************
//                Providing credentials of user to every global object
//      ***************************/

//       firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...
//   } else {
//     console.log('USER IS SIGNED OUT');
//   }
// });

// module.exports.signin = googleSignin();



