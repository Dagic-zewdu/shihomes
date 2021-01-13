import React, { Component } from 'react'
import Index from '../../profile'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery'
export default class AgentDetail extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <div className="container my-4">
            <Index/>
            <button className="btn btn-outline-primary text-center text-uppercase mx-5 my-3" data-toggle="collapse" data-target="#agent">
                <i className="fa fa-user fa-2x mx-2"></i>
                Assign this agent
                </button>
  <div className="collapse" id="agent">
      <p className="text-center">
        You send request to this Agent
        <Link to='/agent'>
          <button className="mx-2 btn btn-outline-info">
              Okay
          </button>
          </Link>
      </p>
      </div>
            </div>
            <Footer/>
            </div>
        )   
    }
}
