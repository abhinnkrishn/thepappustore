import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import firebase from "firebase";
import "./firebase/firebase";
import "./components/css/display.css";
import Toast from "./components/Toast";
import t1 from "./components/img/womenProduct/single-product/thumb-1.jpg";
import t2 from "./components/img/womenProduct/single-product/thumb-2.jpg";
import t3 from "./components/img/womenProduct/single-product/thumb-3.jpg";
import t4 from "./components/img/womenProduct/single-product/thumb-4.jpg";
import b1 from "./components/img/womenProduct/single-product/1.jpg";
import b2 from "./components/img/womenProduct/single-product/2.jpg";
import b3 from "./components/img/womenProduct/single-product/3.jpg";
import b4 from "./components/img/womenProduct/single-product/4.jpg";
import star from "./components/svg/star.svg";
import Slider from "./components/BestSeller";

export default function Display() {
  var thumbs = [t1, t2, t3, t4];
  var model = [b1, b2, b3, b4];

  const [modelImage, setModelImage] = useState(model[0]);
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

  // Adding items to the DB
  function addToCart(event) {
    if (email != "") {
      firebase
        .firestore()
        .collection(`cart-${email}`)
        .add({
          name: "DIVERSE WOMENS WHITE PEPLUM TOP",
          price: "5,999",
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

  return (
    <div>
      <Navbar />
      <div className="model">
        <div className="model-thumb">
          {thumbs.map((thumb, index) => (
            <img
              src={thumb}
              key={index}
              alt="Product-thumb"
              width="75px"
              onClick={() => {
                setModelImage(model[index]);
              }}
            />
          ))}
        </div>
        <div className="model-image">
          <img src={modelImage} alt="Product-image" />
        </div>
        {/* Product Details */}
        <div className="model-details">
          <h3 className="model-title">
            {" "}
            <strong>DIVERSE WOMENS WHITE PEPLUM TOP </strong>
          </h3>
          <h5 className="model-price"> &#x20B9;5,999</h5>
          <p>
            Avaliable: <span>In Stock</span>
          </p>
          <img src={star} alt="Ratings" width="15px" />{" "}
          <h6 className="model-rating">4.3</h6>
          <hr />
          <ul className="model-mini-info">
            <li>Care Instructions: Machine Wash</li>
            <li>Fit Type: Regular Fit</li>
            <li>100% Cotton</li>
            <li>Machine wash</li>
            <li>
              Disclaimer: Product colour may slightly vary due to photographic
              lighting sources or your monitor settings
            </li>
            <li>Made in India</li>
          </ul>
          <button className="model-buy" onClick={addToCart}>
            Add to Cart
          </button>
          <p className="model-wishlist">
            <strong>Wishlist</strong>
          </p>
          <br />
          <br />
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ex
            optio est corrupti assumenda quidem deleniti dolor, enim inventore
            alias aliquid cum maiores dignissimos voluptas delectus atque.
            Dolore aliquam deserunt quisquam excepturi architecto quaerat minus
            consectetur tempora? Saepe, facilis quisquam?
          </h6>
        </div>
      </div>
      <Slider />
      <Footer />
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
