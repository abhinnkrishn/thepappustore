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

         

      function googleSignin() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithRedirect(provider)
        .then(function(result) {
       // This gives you a Google Access Token. You can use it to access the Google API.
       var token = result.credential.accessToken;
       // The signed-in user info.
       var user = result.user;
       console.log(user);
       console.log(result);

       document.getElementsByClassName("signin").innerHTML = user.displayName;
       document.querySelector(".signin").innerHTML = user.displayName;

       })
      .catch(function(error) {
       console.log(error);
      
      });

    }

    export { googleSignin }

    
      
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

      

