import React, { useState, useEffect } from "react";
import Card from "./Card";

function Product({ searchWord }) {
  const [matchedData, setMatchedData] = useState([]);
  
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
          setMatchedData(match)
        });
    }
  }, [searchWord]);

  return (
    <div>
      <div>
        <h3 className="card-search-for">
          <strong>Search Results for {searchWord}...</strong>
        </h3>
        {matchedData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Product;
