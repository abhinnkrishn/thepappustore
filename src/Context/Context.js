// import React, { Component } from 'react';
// import {storeUser} from "../firebase/googleLogin"

// // first we will make a new context
// const MyContext = React.createContext();

// // Then create a provider Component
// export default class MyProvider extends Component {
//   constructor() {
//     super()
//     this.state = {
//     name: "stateSignin",
//     email: "",
//     signin: false,
//     }
//     this.changeName = function(user) {
     
//            this.setState({
//         name: user.displayName,
//         email: user.email,
//         signin: true
//         })
      
//     }
//   }
     

  
//   render() {
 
//     return (
//       <MyContext.Provider value={{data: {
//         state: this.state,
//         updateState: (user) => changeName
//       }}}>
//         {this.props.children}
//      </MyContext.Provider>
//     )
//   }
// }

// export {MyContext}
