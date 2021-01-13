import React, { Component } from 'react'
import Navbar from './../common/Navbar'
import Navlist from './Navlist'
import Footer from './../common/Footer'
 class Profile extends Component {
     
    render() {
        return (
            <div>
    <Navbar/>
      <Navlist/> 
      <Footer/>              
            </div>
        )
    }
}
export default Profile