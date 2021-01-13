import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/profile.css'
import $ from 'jquery'
import Index  from './index'
import Post from './Posts/Post'
import Message from './Messages/Message'
export default class Navlist extends Component {
   state={
     profile : 'profile',
     aprofile : 'active',
     apost : null,
     amessage : null
   }
  sidebar=()=>{
  $('#sidebar').toggleClass('active');
} 
ShowProfile=(e)=>{
  this.setState({
    profile : 'profile',
    apost : null,
    aprofile : 'active',
    amessage: 'null'
  })
  this.sidebar();
}
posts=(e)=>{
  this.setState({
    profile : 'posts',
    aprofile : null,
    apost: 'active',
    amessage : null
  })
  this.sidebar();
}
message=(e)=>{
  this.setState({
    profile : 'message',
    aprofile : null,
    apost: null,
    amessage : 'active' 
  })
}
    render() {
      console.log(this.state)
     const Profile=(e)=>{
  if(this.state.profile=='profile'){
    return(
      <div className="p-4 p-md-5 my-4">
      <Index/>
          </div>      
        )
  }
    else if(this.state.profile=='posts'){
      return(
        <div className="p-4 p-md-5 mt-5">
      <Post/>
          </div> 
      )
    }
    else if(this.state.profile=='message'){
      return(
        <div className="p-4 p-md-5 my-4">
      <Message/>
          </div> 
      )
    }
      }
      console.log(this.state.apost)
      const All=()=>{
        return(
          <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="custom-menu">
            <button type="button" id="sidebarCollapse" className="form-control btn-warning" onClick={this.sidebar}>
             
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="img bg-wrap text-center py-4 dive" >
            <div className="user-logo">
              <div className="img"></div>
              <h3>Dagic zewdu</h3>
            </div>
          </div>
          <ul className="list-unstyled components mb-5">
            <li className={this.state.aprofile}>
              <Link to='#' onClick={this.ShowProfile}>
             <div className="fa fa-user mr-3"></div>
               Profile
               </Link>
            </li>
            <li className={this.state.apost}>
                <Link to="#"  onClick={this.posts}>
                <i className="fas fa-id-card  mr-2  "></i>
                Posts
                  </Link>
            </li>
            <li className={this.state.amessage}>
              <Link to="#" onClick={this.message} >
              <i className="fas fa-mail-bulk  mr-3"></i>
              Messages
              </Link>
            </li>
            <li>
              <Link to="#">
              <i class="fas fa-save   mr-3 "></i>
             Search Saves
              </Link>
            </li>
            <li>
              <Link to="#">
              <i className="fas fa-bell mr-3 "></i>
            Notificaion
              </Link>
            </li>
           
            <li>
            <Link to="#">
            <i className="fas fa-coins mr-3"></i>
            Credits and Balance
            </Link>
            </li>
            <li>
              <Link to="#"><span className="fa fa-cog mr-3"></span> Settings</Link>
            </li>
            <li>
              <Link to="#">
              <i className="fa fa-arrow-left mr-3" aria-hidden="true"></i>
               Sign Out</Link>
            </li>
          </ul>
        </nav>
    {<Profile/>}   
      </div>
        )
      }
        return (
    <div>
      <All/>
    </div>           
            )
    }
}
