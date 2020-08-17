import React, { Component } from 'react'
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Container from "./container/Container"

import "./Assemble.css"
export default class Assemble extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Container></Container>
                <Footer></Footer>
            </div>
        )
    }
}
