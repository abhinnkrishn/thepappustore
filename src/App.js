import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from "./login"

import './components/css/style.css'
import './components/css/bootstrap.min.css'
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
// import './components/css/index.css'

import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {
    return (
        <Router>
        <div>
            <Route path="/" exact component={Navbar} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Footer} />
        </div>
        </Router>
    )
}

export default App
