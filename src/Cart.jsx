import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./firebase/firebase";
import Logo from "./components/img/logo1.png";
import Card from "./components/Card";
import "./components/css/cart.css";
import "./javascript/cart.js";

export default function Cart() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [totalprice, setTotalprice] = useState(0);
  const [totalitems, setTotalitems] = useState(0);

  // Getting email for seeing the collection in DB
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setEmail(user.email);
      console.log("YESS", user.email);
    } else {
      setEmail("");
    }
  });

  // useEffect(() => {
  //   setTotalitems(data.length);
  //   console.log(data.length);
  //   if (data.length > 0) {
  //     for (let i = 0; i < totalitems; i++) {
  //       setTotalprice(totalprice + data[i].price);
  //       console.log("pricre", data[0].price);
  //     }
  //   }
  // }, [data]);

  // Fetching Data from DB and Displaying
  const db = firebase.firestore();
  useEffect(() => {
    db.collection(`cart-${email}`).onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
  }, [email]);

  // Removing/Deleting data from the DB

  return (
    <>
      {/* NAVABR */}
      <div className="cart-navbar">
        <Link to={"/"}>
          <img src={Logo} alt="Home" className="cart-image" width="50px" />
        </Link>
        <h1 className="cart-name">
          the<strong>Dukaandar</strong>
        </h1>
        <h1 className="cart-cart-text">Cart</h1>
      </div>
      <div>
        {data.map((data) => (
          <Card data={data} innerhtml={"Remove"} />
        ))}
      </div>
      {/* cart prduct info */}
      <div className="cart-info">
        <h5 className="">
          <strong>Subtotal(3 Items): 949</strong>
        </h5>
        <input type="text" placeholder="APPLY COUPON" />
        <p id="select-coupon">Select</p>
        <br />
        <button>Checkout</button>
      </div>
    </>
  );
}
