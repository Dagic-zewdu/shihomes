import React, { Component } from 'react'
import Navbar from '../../common/Navbar'
import AgentList from './AgentList'
import './css/agent.css'
import Footer from '../../common/Footer'
export default class SellAgent extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                <div className="row min">
                  <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                <div className="col-lg-3 col-md-6 py-4"><AgentList/></div> 
                 </div>   
                </div>
                <Footer/>
            </div>
        )
    }
}
