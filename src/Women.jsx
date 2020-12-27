import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import "./firebase/firebase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import "./components/css/women.css";
import b1 from "./components/img/womenProduct/1.jpg";
import b2 from "./components/img/womenProduct/2.jpg";
import b3 from "./components/img/womenProduct/3.jpg";
import b4 from "./components/img/womenProduct/4.jpg";
import b5 from "./components/img/womenProduct/5.jpg";
import b6 from "./components/img/womenProduct/6.jpg";
import b7 from "./components/img/womenProduct/7.jpg";
import b8 from "./components/img/womenProduct/8.jpg";
import b9 from "./components/img/womenProduct/9.jpg";
import b10 from "./components/img/womenProduct/10.jpg";
import b11 from "./components/img/womenProduct/11.jpg";
import b12 from "./components/img/womenProduct/12.jpg";
import star from "./components/svg/star.svg";

export default function Women() {
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setEmail(user.email);
      setAuth(true);
    } else {
      setEmail("");
      setAuth(false);
    }
  });

  const db = firebase.firestore();

  // Adding items to the DB
  function addToCart(event) {
    let key = event.target.value;
    let item = items[key];
    let img = parseInt(key + 1, 10);

    if (email != "") {
      db.collection(`cart-${email}`)
        .add({
          name: item.title,
          price: item.price,
          email: email,
        })
        .then((ref) => {
          console.log("Added doc with ID: ", ref.id);

          // Show Toast
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
        });
    } else {
      // Show Toast
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }
  }

  var items = [
    {
      image: b1,
      title: "DIVERSE WOMENS WHITE PEPLUM TOP",
      price: "5,999",
    },
    { image: b10, title: "Lorem Ipsum", price: "3,999" },
    {
      image: b11,
      title: "Lorem Ipsum",
      price: "3,999",
    },
    { image: b4, title: "Lorem Ipsum", price: "3,999" },
    { image: b5, title: "Lorem Ipsum", price: "3,999" },
    { image: b6, title: "Lorem Ipsum", price: "3,999" },
    { image: b7, title: "Lorem Ipsum", price: "3,999" },
    { image: b8, title: "Lorem Ipsum", price: "3,999" },
    { image: b9, title: "Lorem Ipsum", price: "3,999" },
    { image: b2, title: "Lorem Ipsum", price: "3,999" },
    { image: b3, title: "Lorem Ipsum", price: "3,999" },
    { image: b12, title: "Lorem Ipsum", price: "3,999" },
  ];

  const history = useHistory();
  const routeChange = () => {
    let path = `/womens/display`;
    history.push(path);
  };

  return (
    <div>
      <Navbar />

      {items.map((item, index) => (
        <div className="women-product-card" key={index}>
          <div
            className="women-product-image"
            onClick={index === 0 ? routeChange : console.log("SOME ERROR!!!")}
          >
            <img src={item.image} alt="product-image" width="200px" />
          </div>
          <div className="women-product-detail">
            <h5
              onClick={index === 0 ? routeChange : console.log("SOME ERROR!!!")}
            >
              <strong>{item.title}</strong>
            </h5>
            <p className="women-product-price">&#x20B9;{item.price}</p>
            <p className="women-product-dis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero
              officiis quidem excepturi dignissimos odio qui sint, iure quas,
              commodi quod ipsam, corrupti minima ullam delectus laborum! Sed,
              corporis illo!
            </p>
            <button onClick={addToCart} value={index}>
              Add to Cart
            </button>
            <img src={star} width="20px" className="women-star" />
          </div>
          <hr />
        </div>
      ))}
      <Footer />
      {/* toast */}
      <div>
        {auth ? (
          <Toast message={"Added to Cart"} />
        ) : (
          <Toast message={"Signin to Add to Cart"} />
        )}
      </div>
    </div>
  );
}
