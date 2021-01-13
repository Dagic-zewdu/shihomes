import React, { Component } from 'react'
import Navbar from '../../common/Navbar'
import LatestListing from '../../common/LatestListing'
import Signin from '../../user/Sign-in'
import {Progress} from 'reactstrap'
import Step1 from './Step1'
import Step0 from './Step0'
import Footer from '../../common/Footer'
import Step2 from './Step2'
import Step3 from './Step3'
import { Link } from 'react-router-dom'
import TopDeals from '../../common/TopDeals'
class CreateListing extends Component {
    state={

        signin: 'fa fa-user fa-2x text-warning',
        step0 : 'fas fa-money-check fa-2x text-secondary',
        step1: 'fa fa-tasks fa-2x text-secondary',
        step2: 'fa fa-image fa-2x text-secondary',
        step3: 'fas fa-money-bill-alt fa-2x text-secondary',
        step4: 'fa fa-check fa-2x text-secondary',
        loaded :17
    }
    loader=(load)=>{
    if(load=='sign-in'){
        this.setState({
            loaded:34,
            step0 : 'fas fa-money-bill-alt fa-2x text-warning'
        })
    }
    else if(load=='step0')
     {
         this.setState({
        loaded: 51,
        step1 : 'fa fa-tasks fa-2x text-warning'
     })
    }
     else if(load=='step1'){
         this.setState({
             loaded : 68,
             step2 : 'fa fa-image fa-2x text-warning'
         })
     }
     else if(load=='step2'){
         this.setState({
             loaded : 83,
             step3 : 'fa fa-money-bill-alt fa-2x text-warning'
         })
     }
     else if(load=='step3'){
        this.setState({
            loaded : 100,
            step4 : 'fa fa-check fa-2x text-warning'
        })
    }
    }
    render() {

        const Form=()=>{
          if(this.state.loaded==17){
              return(
                     <div className="row">
                         <div className="col-lg-2">
                         </div>
                         <div className="col-lg-8">
                         <Signin Loader={this.loader} /> 
                         </div>
                      </div>
            )
          }  
          else if(this.state.loaded==34){
              return(
                <div className="row">
                         <div className="col-lg-2">
                         </div>
                         <div className="col-lg-8">
                         <Step0 Loader={this.loader} /> 
                         </div>
                      </div>
              )
          }
         
          else if(this.state.loaded==51){
            return( 
               <div className="row">
                         <div className="col-lg-2">
                         </div>
                         <div className="col-lg-8">
                         <Step1 Loader={this.loader} /> 
                         </div>
                      </div>
            )
          }
          else if(this.state.loaded==68){
            return( 
                   <div className="row">
                         <div className="col-lg-12">
                         <Step2 Loader={this.loader} /> 
                         </div>
                      </div>
            )
          }
          else if(this.state.loaded==83){
            return( 
                   <div className="row">
                         <div className="col-lg-12">
                         <Step3 Loader={this.loader} /> 
                         </div>
                      </div>
            )
          }
          else if(this.state.loaded==100){
              return(
                  <div className="row">
                      <div className="col-lg-8">
        <p className="text-success">
        You have succesfully uploaded your Deals.For Further notice         
            </p>    
     <Link to='/profile'>
     <button className="btn btn-outline-success text-uppercase mx-5 my-3"> <i class="fa fa-arrow-right" aria-hidden="true"></i> Goto profile page </button>
           </Link>
                      </div>
                  </div>
              )
          }
           }
           
           const StepZero=()=>{
               return(
               <div className="px-5">
               <i className={this.state.step0}></i>
               </div>
                )
           }
           const StepOne=()=>{
            return(
             <div className="px-5">
               <i className={this.state.step1}></i>
               </div> 
             )
        }
        const StepTwo=()=>{
            return(
             <div className="px-5">
               <i className={this.state.step2}></i>
               </div>
               )
        }
        const StepThree=()=>{
            return( 
            <div className="px-5">
            <i className={this.state.step3}></i>
            </div> 
            )
        }
        const StepFour=()=>{
            return(
             <div className="px-5">
               <i className={this.state.step4}></i>
               </div>)
        }
           const SignIn=()=>{
               return(
               <div className="px-3">
               <i className={this.state.signin}></i>
               </div>
               )
           }
        return (
            <div>
                <Navbar/>
                <hr/>
                <div className="container" id='create'>
                    <div className="row">
                        <div className="col-lg-8">
                            <div  className="bg-dark text-white py-3  listing">
                            <SignIn/>
                       {<StepZero/>}
                        {<StepOne/>}
                        {<StepTwo/>}
                        {<StepThree/>}
                        {<StepFour/>}
                        </div>
                            <div className="py-2 text-center">
                                <p className="font-weight-light py-2">This will take a few second</p>
 <Progress max="100" color="text-success" value={this.state.loaded} ></Progress>
                            </div>
  <div className="my-2">
     <div className="my-4">
        <div className="container">
           <div className="row">
                <div className="lg-12">
                    </div>
                </div>
            </div>
                 <div className="container">
                  {<Form/>}
                  </div>
        </div>
        </div>
                        </div>
                   
  <TopDeals/>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default  CreateListing