import React, { Component } from 'react'
import Login from './Login'
import Signin from './Sign-in'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default class Container_login extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div className="container min">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-5 space">
                        <Signin/>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
