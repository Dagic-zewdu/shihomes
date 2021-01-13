import React, { Component } from 'react'
import EditPost from './EditPost'
import Addpost from './SetLocation'
import Step0 from '../../Sell/Createlisting/Step0'
import Step1 from '../../Sell/Createlisting/Step1'
import SetLocation from './SetLocation'
import Step2 from '../../Sell/Createlisting/Step2'

export default class Post extends Component {
    state={
        view : 'list',
        color1 : 'text-danger',
        color2 : 'text-white',
        color3 : 'text-white',
        color4 : 'text-white',
        color5 : 'text-white',
        color6 : 'text-white',               
    }
    edit=(e)=>{
        e.preventDefault()
        this.setState({
            view : 'edit'
        })
        
    }
    okay=(okay)=>{
this.setState({
    view : 'list'
})
    } 
    Addpost=()=>{
        this.setState({
            view: 'addpost'
        })
    }
    steper=(load)=>{
        if(load=='step0')
        {
            this.setState({
            view : 'step1',
            color2: 'text-danger',
        })
    }
    else if(load=='step1'){
        this.setState({
            view : 'step2',
            color3 : 'text-danger',
        })
    }
    else if(load=='step2'){
        this.setState({
            view : 'step3',
            color4 : 'text-danger',
        })
    }
    else if(load=='step3'){
        this.setState({
            view : 'step4',
            color5: 'text-danger'
        })
    }
    }
    pay=(e)=>{
        this.setState({
            view: 'step5',
            color6:'text-danger'
        })
    }
    render() {
        
        const Icons=()=>{
            return(
      <div className="card-header bg-warning listing align-item-justify">
      <i className={"fa fa-money-bill fa-2x m mx-5 "+this.state.color1}></i>
      <i className={"fa fa-list fa-2x m mx-5 "+this.state.color2}></i>
      <i className={"fa fa-map-marker fa-2x m mx-5 "+this.state.color3}></i>
      <i className={"fa fa-image fa-2x mx-5 m "+this.state.color4}></i>
      <i className={"fa fa-money-bill fa-2x m mx-5 "+this.state.color5}></i>
      <i className={"fa fa-check fa-2x m mx-5 "+this.state.color6}></i>
      </div>
            )
        }
        const All=()=>{
            if(this.state.view=='list'){
                return(
                    <div className="row mt-2">
                    <div className="col-lg-4 col-md-6 col-sm-12a">
             <div className="card">
                 <div className="card-header">
                  <h6>post 1</h6>  
                    
                    <button className="float-right btn-outline-info btns" onClick={this.edit}>
                        <i className="fas fa-edit"></i>
                        </button>
                    <button className="float-right btn-outline-danger btns">
        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                 </div>

                <div className="card-body text-center" onClick={this.edit}>
                <img src="images/img_4.jpg" alt="" className="card-img-top"/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut pariatur numquam sint minus porro tenetur, eos veniam? Ducimus, odio dolor?
    
                </div>
                <h4 className="bg-secondary text-white text-center">$ 122232</h4>
                 </div>  
           </div>
           <div className=" col-lg-12 col-md-12 col-sm-12 mt-4 text-center">
               <button className="btn  btn-outline-primary px-5" onClick={this.Addpost}>
               Add Posts
               </button>
               </div>
 </div>
                    
                )
            }
            else if(this.state.view=='edit'){
                return(
                    <EditPost/>
                )
            }
            else if(this.state.view=='addpost'){
                return(
    <div className="container box">
        <div className="row">
            <div className="col-lg-12 text-center">
             {<Icons/>}
             <Step0 Loader={this.steper}/>
            </div>
        </div>
    </div>
                )
            }
            else if(this.state.view=='step1'){
                return(
               <div className="container box">
        <div className="row">
            <div className="col-lg-12 text-center">
             {<Icons/>}
             <Step1 Loader={this.steper}/>
            </div>
        </div>
    </div>       
                )
            }
            else if(this.state.view=='step2'){
                return(
               <div className="container box">
        <div className="row">
            <div className="col-lg-12 text-center">
             {<Icons/>}
             <SetLocation Loader={this.steper}/>
            </div>
        </div>
    </div>          
                )
            }
            else if(this.state.view=='step3'){
                return(
               <div className="container box">
        <div className="row">
            <div className="col-lg-12 text-center">
             {<Icons/>}
             <Step2 Addfile={this.steper}/>
            </div>
        </div>
    </div>          
                )
            }
            else if(this.state.view=='step4'){
                return(
               <div className="container box">
        <div className="row">
            <div className="col-lg-12 text-center">
             {<Icons/>}
            <p className="text-center mx-3" onClick={this.pay}>Payment</p>
            </div>
        </div>
    </div>          
                )
            }
            else if(this.state.view=='step5'){
                return(
               <div className="container box">
        <div className="row">
            <div className="col-lg-12 text-center">
             {<Icons/>}
            <p className="text-center text-success">
  You have successfully create
            </p>
            </div>
        </div>
    </div>          
                )
            }
        }
        return (
                  <All/>
            )
    }
}
