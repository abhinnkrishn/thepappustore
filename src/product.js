import React, { Component } from 'react'
import Card from "./components/card"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import "./components/card"

var num = [1,2,3,4,5]



export default class product extends Component {



    render(props) {
        return (
            <div>
                <Navbar />
                <Card name={"Hello"} />
                <Footer />
                
            </div>
        )
    }
}

