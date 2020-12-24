import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Product";

function ProductPage(props) {

  return (
    <div>
      <Navbar />
      <Products searchWord={props.location.state.searchQuery} />
      <Footer />
    </div>
  );
}

export default ProductPage;
