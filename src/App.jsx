import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import MyProvider from "./Context/Context"

import Login from "./login.jsx";
import "./components/css/style.css";
import "./components/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Product from "./product"
import Hero from "./components/Hero";
import Caro from "./components/Caro";
import BestSeller from "./components/BestSeller";
import Women from "./Women";
import Display from "./Display";
import Cart from "./Cart";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Navbar} />
        <Route path="/" exact component={Hero} />
        <Route path="/" exact component={BestSeller} title="Best Sellers" />
        <Route path="/" exact component={Caro} />
        <Route path="/" exact component={Footer} />
        <Route path="/login" exact component={Login} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/womens" exact component={Women} />
        <Route path="/womens/display" exact component={Display} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </Router>
  );
}

export default App;
