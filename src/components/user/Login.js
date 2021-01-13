import React, { Component } from 'react'
import './css/user.css'
import {Link} from 'react-router-dom'
import ModalSignUp from './Modal_signup'
import axios from 'axios'
import { host } from '../../config/config'
export default class Login extends Component {
    state={
 ccode :['+251'],
 phone : '',
 password:'',
 error:''        
    }
    change=(e)=>{
        this.setState({
            [e.target.id] : [e.target.value],
            error : ''
        })
    }
    handleclick=async (e)=>{
   e.preventDefault();
   if(this.state.phone===''){
       this.setState({
           error : 'Enter your phone number'
       })
   }
   else if(this.state.password===''){
    this.setState({
        error : 'Enter your password'
    })
   }
   else{
       let phone=this.state.ccode[0]+this.state.phone[0]
       localStorage.clear()
       const login= await axios.post(host+'/api/login',{
      phone,
      password :this.state.password[0]
       })
       if(!login.data.login){
 this.setState({
     error: login.data.message
 })
       }
       else{
        localStorage.clear() 
        var x
    login.data.authuser?(
          localStorage.setItem('auth_user',login.data.authuser)
        ):(
          login.data.authadmin?(
            localStorage.setItem('auth_admin',login.data.authuser)
          ):(
     login.data.authagent?(
       localStorage.setItem('auth_agent',login.data.authagent)
     ):(
  x=0
     )
          )
        )
       localStorage.setItem('user_id',login.data.user[0]._id)
        this.props.Loader?(
            this.props.Loader(this.state)
        ):
        (
            x=1
        )
        this.setState({
            error : 'Welcome...'
        })
        setTimeout(()=>{
            this.props.set?(
                this.props.set()
            ):(
                x=2
            )
            this.props.dismiss()
        },2000)
       }
       
   }
 
    }
    render() {
        return (
              <div className="card text-center">
  <h3 className='text-dark mb-4'> Login </h3>
  <form>
  <div className="input-container">
    <i className="fa fa-phone fa-3x icon"></i>
    <input type="text" className="countrycode" id='ccode' 
     onChange={this.change} value='+251'/>
    <input className="input-field" type="number"
     placeholder="Phone" id="phone"  onChange={this.change}/>
  </div>
  <div className="input-container">
    <i className="fa fa-key fa-3x icon"></i>
    <input className="input-field" type="password" placeholder="Password" id="password" onChange={this.change} />
  </div>
  <p className="text-center text-danger">{this.state.error}</p>
  <h6 className="text-center text-info">
      <ModalSignUp destroy={this.props.dismiss} set={this.props.set}/>
  </h6>
  <button  className="btn-primary form-control" onClick={this.handleclick}>Login</button>
  </form>
                                 </div>
        )
    }
}
