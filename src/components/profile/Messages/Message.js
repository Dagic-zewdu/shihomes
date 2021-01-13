import React, { Component } from 'react'

export default class Message extends Component {
    state={
        body : 'list',
        chat : ''
    }
    messagebody=(e)=>{
 this.setState({
     body : 'message'
 })
    }
    list=(e)=>{
        this.setState({
            body :'list'
        })
    }
    render() {
        const All=()=>{
            if(this.state.body=='list')
            {
                return (
                
                        <div className="col-lg-12 vh">
                            <div className="card text-center">
                                <div className="card-header listing">
  <i class="fas fa-facebook-messenger mx-2"></i>
                                    New message
                                    <p className="text-danger mx-1">(10)</p>
                                </div>
                                <div className="card-header text-center listing" onClick={this.messagebody}>
                                Abel
                                    <p className="text-info">(4)</p>
                                    </div>
                                <div className="card-header text-center listing" onClick={this.messagebody}>
                                    Werash
                                    <p className="text-info">(4)</p>

                                </div>
                            </div>
                        </div>
                      
                      )}
     else if(this.state.body=='message'){
         return(
<div className="col-lg-12 vh">
    <div className="card-header listing">
        <button className="btn mr-1 btn-outline-danger" onClick={this.list}>
            <i class="fa fa-arrow-left"></i>
</button>
<img src="images/img_6.jpg" alt="" className="rounded-circle card-img-top mx-2 rimg"/>
        Abel
    </div>
    <div className="card-body chat">
        {this.state.chat}
    </div>
    <div className="card-footer listing">
 <button className="btn btn-outline-danger">
     <i className="fa fa-image"></i>
 </button>
 <input type="text" className="form-control mx-2 mess" placeholder="message" />
 <button className="btn btn-outline-primary">
     Send
 </button>
    </div>
</div>
         )
     }                 
        }
        return(
            <div className="container mt-2">
                    <div className="row">
            <All/>
            </div>
            </div>
        )
    }
}
