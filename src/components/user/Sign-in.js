import React, { Component } from 'react'
import './css/user.css'
import {host} from '../../config/config'
import axios from 'axios'
 class Signin extends Component {
     state={
         name: "",
         ccode:"+251",
           phone : "",
           password : "",
           cpsw : "",
           ename : "",
           ephone : "",
           epass1: "",
           epass2:"",
           email:'',
           eemail:'',
           success: ''   
     }
     change=(e)=>{
   this.setState({
     ename :"",
     ephone: "",
     epass1:"",
  epass2:"",
  [e.target.id] : [e.target.value]
   })
     }
   handleclick=async (e)=>{
    e.preventDefault();
    var phone=this.state.phone.toString();
if(this.state.name===""){
  this.setState({
    ename : "Enter name"
  })
}
else if(this.state.email===''){
  this.setState({
    eemail :'Enter Email'
  })
}
else if(this.state.phone===""||phone.length!==9){
  this.setState({
     ephone :"Invalid phone number"
  })
}
else if(this.state.password===""){
  this.setState({
    epass1: "Enter password"
  })
}
else if(this.state.cpsw===""){
  this.setState({
    epass2: "Confirm password"
  })
}
else{
  let password=this.state.password.toString()
  let confirm=this.state.cpsw.toString()
    if(password.localeCompare(confirm)===0){
   let load='sign-in'
   if(this.props.Loader!==undefined){
    this.props.Loader(load)
   }
   else{
     let phone=this.state.ccode+this.state.phone
     const user={
       username: this.state.name[0],
       email : this.state.email[0],
       password : this.state.password[0],
       phone,
       usertype: 'user'
      }
      const save =await axios.post(host+'/api/signup',user)
     if(!save.data.login){
       this.setState({
         epass2 : save.data.message
       })
     }
     else{
      localStorage.clear() 
      var x
  save.data.authuser?(
        localStorage.setItem('auth_user',save.data.authuser)
      ):(
        save.data.authadmin?(
          localStorage.setItem('auth_admin',save.data.authuser)
        ):(
   save.data.authagent?(
     localStorage.setItem('auth_agent',save.data.authagent)
   ):(
x=0
   )
        )
      )
       localStorage.setItem('user_id',save.data.user._id)
       this.setState({
         sucess : 'Welcome'
       })
      setTimeout(()=>{
        this.props.set?(
          this.props.set()
        ):(x=1)
        this.props.closer();
      },2000) 
      
    }
   }
  }
  else{
    this.setState({
      epass2 : "Password confirmation error"
    })
  }
}
     }
    render() {
        return (
           
                                 <div className="card text-center">
  <h2>Sign-Up</h2>
  <div className="input-container">
    <i className="fa fa-user fa-3x icon"></i>
    <input className="input-field" type="text" placeholder="Username" id="name" onChange={this.change} />
  </div>
  <p className="text-center text-danger">{this.state.ename}</p>
  <div className="input-container">
    <i class="fas fa-mail-bulk icon fa-3x"></i>
    <input className="input-field" type="email" id='email' 
    placeholder="Email"  onChange={this.change} />
  </div>
  <p className="text-center text-danger">{this.state.eemail}</p>
  <div className="input-container">
    <i className="fa fa-phone fa-3x icon"></i>
    <input type="text" className="countrycode" id='ccode' value='+251'/>
    <input className="input-field" type="number" placeholder="Phone" id="phone"  onChange={this.change}/>
  </div>
  <p className="text-center text-danger">{this.state.ephone}</p>
  <div className="input-container">
    <i className="fa fa-key fa-3x icon"></i>
    <input className="input-field" type="password" placeholder="Password" id="password" onChange={this.change} />
  </div>
  <p className="text-center text-danger">{this.state.epass1}</p>
  <div className="input-container">
    <i className="fa fa-key fa-3x icon"></i>
    <input className="input-field" type="password" placeholder="Confirm Password" id="cpsw" onChange={this.change}/>
  </div>
  <p className="text-center text-danger">{this.state.epass2}</p>
  <p className="text-center text-success">{this.state.success}</p>
  <button  className="btn-primary form-control" onClick={this.handleclick}>Register</button>
</div>
               
        )
    }
}
export default Signin