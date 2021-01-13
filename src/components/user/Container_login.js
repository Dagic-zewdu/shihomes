import React, { Component } from 'react'
import Login from './Login'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default class Container_login extends Component {
  loader=(load)=>{
this.props.history.push('/')
  }
    render() {
        return (
        <div>
            <Navbar/>
            <div className="container min">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-5 space">
                        <Login Loader={this.loader}/>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
