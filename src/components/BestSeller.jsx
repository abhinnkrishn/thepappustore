import React, { useState } from "react";
import firebase from "firebase";
import "../firebase/firebase";
import Toast from "./Toast";
import "./css/BestSeller.css";
import b1 from "./img/best_seller_images/banner-1.jpg";
import b2 from "./img/best_seller_images/banner-2.jpg";
import b3 from "./img/best_seller_images/banner-3.jpg";
import b4 from "./img/best_seller_images/banner-4.jpg";
import b5 from "./img/best_seller_images/banner-5.jpg";
import b6 from "./img/best_seller_images/banner-6.jpg";
import b7 from "./img/best_seller_images/banner-7.jpg";
import b8 from "./img/best_seller_images/banner-8.jpg";
import pd from "./img/productDisplay286.png";

export default function BestSeller() {
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState(false);

  var items = [
    {
      src: b1,
      title: "Sony D3xYT",
      price: "45,000",
    },
    {
      src: b2,
      title: "Phillips xHm3",
      price: "2,999",
    },
    {
      src: b3,
      title: "Skullcandy 3 prox",
      price: "6,399",
    },
    {
      src: b4,
      title: "Phillips LED",
      price: "100",
    },
    {
      src: b5,
      title: "Bear Sweatshirt",
      price: "659",
    },
    {
      src: b6,
      title: "HP Officejet Dx30",
      price: "6,999",
    },
    {
      src: b7,
      title: "Alexa Dot",
      price: "3,999",
    },
    {
      src: b8,
      title: "Bass",
      price: "9,999",
    },
    {
      src: pd,
      title: "Bikaji Bhujia",
      price: "999",
    },
    {
      src: pd,
      title: "Gulabi RoseWater",
      price: "199",
    },
    {
      src: pd,
      title: "Google Home Mini",
      price: "3,999",
    },
    {
      src: pd,
      title: "LifeBouy Hand Sanitizer",
      price: "349",
    },
    {
      src: pd,
      title: "Premier N-95 Mask",
      price: "99",
    },
  ];

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

  const display = items.map((item, index) => (
    <div>
      <img src={item.src} alt="product-image" />
      <span>
        <h5>
          <strong>{item.title}</strong>
        </h5>
        <p>Price: &#x20B9;{item.price}</p>
        <button onClick={addToCart} value={index}>
          Add to Cart
        </button>
      </span>
    </div>
  ));
  return (
    <div className="bs-div">
      <h3>
        <strong>Best Sellers</strong>
      </h3>
      <div className="bs-container">{display}</div>
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
