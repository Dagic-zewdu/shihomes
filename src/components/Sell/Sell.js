import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './../common/Navbar'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/Sell.css'
import Footer from './../common/Footer'
 class Sell extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };
        return (
            <div>
                <Navbar/>
                <hr/>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h1>Sell or Rent with confidence</h1>
                                <h4>
                                    Ther is a lot of process to sell or Rent a house. ShiHomes make it easy for you 
                                </h4>
                                <h2 className="py-3">Our Success stories</h2>
                                  
<Carousel responsive={responsive} >
<div className="card mx-3 l my-3 text-center">
        <div className="card gratitude text-center">
   <p className="center">
       Shi homes is the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, iusto neque. Iste voluptatum alias tempora itaque, quisquam ipsum soluta labore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, maxime?
   </p>
   <h6 className="py float-right">--ps.Dagic</h6>
        </div>
              </div>
              <div className="card mx-3 l my-3 text-center">
        <div className="card gratitude text-center">
   <p className="center">
       Shi homes is the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, iusto neque. Iste voluptatum alias tempora itaque, quisquam ipsum soluta labore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, maxime?
   </p>
   <h6 className="py float-right">--ps.Kasu</h6>
        </div>
              </div>
              <div className="card mx-3 l my-3 text-center">
        <div className="card gratitude text-center">
   <p className="center">
       Shi homes is the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, iusto neque. Iste voluptatum alias tempora itaque, quisquam ipsum soluta labore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, maxime?
   </p>
   <h6 className="py float-right">--ps.werash</h6>
        </div>
              </div>
              <div className="card mx-3 l my-3 text-center">
        <div className="card gratitude text-center">
   <p className="center">
       Shi homes is the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, iusto neque. Iste voluptatum alias tempora itaque, quisquam ipsum soluta labore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, maxime?
   </p>
   <h6 className="py float-right">--ps.Inch</h6>
        </div>
              </div>
              <div className="card mx-3 l my-3 text-center">
        <div className="card gratitude text-center">
   <p className="center">
       Shi homes is the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, iusto neque. Iste voluptatum alias tempora itaque, quisquam ipsum soluta labore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, maxime?
   </p>
   <h6 className="py float-right">--ps.Yeshiwas</h6>
        </div>
              </div>
</Carousel>
<h4 className="py-4">What you waiting for sell or rent it with confidence</h4>
  <h5>what are my options? </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 pt-3">
                            <Link to='/contact'>
                       <div className="card text-center">
                           <div className="card-header">
                               <i className="fa fa-phone fa-5x text-danger"></i>
                           </div>
                           <div className="card-body text-dark">
                            <h5>
                              contact Shihomes for Fast selling and
                                renting
                            </h5>
                           </div>
                           <div className="card-footer bg-secondary text-white">
                               <h4>Contatct</h4>
                           </div>
                       </div>   
                            </Link>
                        </div>
                        <div className="col-lg-4 pt-3">
                            <Link to='/createlist#create'>
                            <div className="card text-center">
                           <div className="card-header">
                               <i className="fa fa-list fa-5x text-danger"></i>
                           </div>
                           <div className="card-body text-dark">
                            <h4>
                              Sell or Rent it yourself
                            </h4>
                           </div>
                           <div className="card-footer bg-secondary text-white">
                               <h5>Create listing</h5>
                           </div>
                       </div>                
</Link>
                        </div> 
                        <div className="col-lg-4 pt-3">
                            <Link to='/agent'>
                            <div className="card text-center">
                           <div className="card-header">
                               <i className="fa fa-user fa-5x text-danger"></i>
                           </div>
                           <div className="card-body text-dark">
                            <h5>
                             Find an agent 
                            </h5>
                           </div>
                           <div className="card-footer bg-secondary text-white">
                               <h4>Find an agent who can sell or Rent your
                                   property
                               </h4>
                           </div>
                       </div>
</Link>
                        </div>
                    </div>
                </div>
                
                <div className="pt-5">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Sell