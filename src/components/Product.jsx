import React, { useState, useEffect } from "react";
import Card from "./Card";
import Toast from "./Toast";
import firebase from "firebase";
import "../firebase/firebase";

function Product({ searchWord }) {
  const [matchedData, setMatchedData] = useState([]);
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setMatchedData([]);
    let match = [];

    if (searchWord === "") console.log("null");
    else extarctJSON();

    function extarctJSON() {
      fetch("./json/products.json")
        .then((res) => res.json())
        .then((data) => {
          var len = data.length;

          for (var i = 0; i < len; i++) {
            var keyLen = data[i].key.length;
            for (var j = 0; j < keyLen; j++) {
              if (data[i].key[j] === searchWord) {
                match = [...match, data[i]];
                break;
              }
            }
          }
          setMatchedData(match);
        });
    }
  }, [searchWord]);

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
    console.log("PROPS KEY : ", key);
    let item = matchedData[key];

    if (email != "") {
      db.collection(`cart-${email}`)
        .add({
          name: item.name,
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

  useEffect(() => {
    console.log("MATCHED DATA : ", matchedData);
    // console.log("MATCHED KEY : ", matchedData[key] );
  }, [matchedData]);

  return (
    <div>
      <div>
        <h3 className="card-search-for">
          <strong>Search Results for {searchWord}...</strong>
        </h3>
        {matchedData.map((data, index) => (
          <Card
            data={data}
            index={index}
            innerhtml={"Add to Cart"}
            addtocart={addToCart}
          />
        ))}
      </div>
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

export default Product;
