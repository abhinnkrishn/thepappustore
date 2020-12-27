import React, { useEffect, useState } from "react";
import "./css/caro.css";
import Toast from "./Toast";
import firebase from "firebase";
import "../firebase/firebase";
import b1 from "./img/ft_images/banner-1.jpg";
import b2 from "./img/ft_images/banner-2.jpg";
import b3 from "./img/ft_images/banner-3.jpg";
import b4 from "./img/ft_images/banner-4.jpg";

export default function Caro() {
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
          price: item.Price,
          email: email,
          URL: `/img/ft_images/banner-${img}.jpg`,
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
      title: "Vivo x80",
      Price: "24,000",
      disc: 14,
      src: b1,
    },
    {
      title: "Godrej ultrakool d350",
      Price: "235,000",
      disc: 30,
      src: b2,
    },
    {
      title: "Samsung d8 pro",
      Price: "40,000",
      disc: 8,
      src: b3,
    },
    {
      title: "Livi Cotton",
      Price: "3,990",
      disc: 55,
      src: b4,
    },
  ];

  var display = items.map((item, index) => (
    <div id="slides" key={index}>
      <div className="slide">
        <img src={item.src} alt="" />
        <div className="caro-info">
          <h2>
            <strong>{item.title}</strong>
          </h2>
          <p>Price: &#x20B9;{item.Price}</p>
          <p>{item.disc}% OFF</p>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            maiores? Dignissimos, consectetur, incidunt dolores temporibus
            minima tempora sint, beatae nisi sed tempore totam at officia quos
            architecto. Reprehenderit, ratione explicabo.
          </h5>
          <button onClick={addToCart} value={index}>
            Add to Cart
          </button>
        </div>
      </div>
      <hr />
    </div>
  ));

  return (
    <div className="caro-container">
      <h1
        style={{
          margin: "7px 15px",
          textDecoration: "underline",
          paddingTop: "10px",
        }}
      >
        <strong>Winter Clearence</strong>
      </h1>
      {display}
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