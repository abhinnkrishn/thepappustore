import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from "./login"
import './components/css/style.css'
import './components/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Product from "./product"
import Hero from "./components/Hero"
import Caro from "./components/Caro"
import BestSeller from "./components/BestSeller"
import Women from "./Women"
import Display from "./Display"
function App() {
    return (
        <Router>
        <div>
            <Route path="/" exact component={Navbar} />
            <Route path="/" exact component={Hero} />
            <Route path="/" exact component={BestSeller} title="Best Sellers" />
            <Route path="/" exact component={Caro} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Footer} />
            <Route path="/product" exact component={Product} />
            <Route path="/womens" exact component={Women} />
            <Route path="/womens/display" exact component={Display} />


        </div>
        </Router>
    )
}

export default App
