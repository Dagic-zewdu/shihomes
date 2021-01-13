import React, { Component } from 'react'
import Navbar from './../common/Navbar'
import './css/Home.css'
import Footer from './../common/Footer'
import LatestListing from './../common/LatestListing'
import TopDeals from '../common/TopDeals'
import HomeTopDeals from './HomeTopDeals'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
 class Home extends Component {
    render() {
        return (
            <div>
             <Navbar/> 
             <div id="banner">
                 <div className="insidebanner text-center">
                     <h1 className='text-uppercase text-white mrs mb-4'>
                         We make process easy</h1>
                 <input type="text" placeholder="SEARCH BY ADRESS, HOUSE TYPE" className="inp ml-3 text-dark" palceholder="Adress,"/>
                 <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                 </div>
              </div>
              <div className="container-fluid py-4">
                  <div className="row">
                       <div className="col-lg-9 col-md-12 listing ">
                    <HomeTopDeals/>
                    <HomeTopDeals/>
                    <HomeTopDeals/>
                    <HomeTopDeals/>
                    <HomeTopDeals/>
                    <HomeTopDeals/>
                      </div>  

                      <div className="col-lg-3 my-3 bxrs">
                      <div className="realeatate-house bg-secondary">
                        
                        <h3 className ="text-white">Houses for sale by city</h3> 
                        <div className="list-type1">
                            <ol>
                           <li><a href="#">Luxury Apartments for Sale</a></li>
                            <li><a href="#">EMA Trading PLC</a></li>
                            <li><a href="#">Kaah Real Estate</a></li>
                            <li><a href="#">Ethiopianhome</a></li>
                            <li><a href="#">Galvanized Building in kit</a></li>
                            <li><a href="#">Addis Mender Real Estate S.Co</a></li>
                            <li><a href="#">Aser Real Estate</a></li>
                            <li><a href="#">Hamdail Plc</a></li>
                            <li><a href="#">Petram Real Estate</a></li>
                            <li><a href="#">Sirdengi Housing Plc</a></li>
                            <li><a href="#">DASSET PLC</a></li>
                            <li><a href="#">AYU SHASHIE houses for sale</a></li>
                            <li><a href="#">AYAT REAL ESTATE DEVELOPMENT ENTERPRISE</a></li>
                            <li><a href="#">AMBASSADOR REAL ESTATE</a></li>
                            <li><a href="#">FRIENDSHIP BUSINESS GROUP PLC</a></li>
                            <li><a href="#">GREEN LAND PLC</a></li>
                            </ol>
                            </div> 
                    </div>
                      </div>
                  </div>
              </div> 
              <div className="container shw my-3">
                  <div className="row text-uppercase">
                      <div className="col-lg-4 my-2 col-md-6 mx-auto">
                          <div className="card">
                              <Link to='/Buy'>
                              <div className="card-header text-center">
                  <i class="fas fa-money-bill text-primary fa-5x "></i>
                  <h4> Buy Home </h4>
                              </div>
                              </Link>
                          </div>
                      </div>
                      
                      <div className="col-lg-4 my-2 col-md-6 mx-auto">
                          <div className="card">
                          <Link to='/Rent'>
                              <div className="card-header  text-dark text-center">
              <i class="fas fa-money-bill-alt fa-5x text-warning   "></i>
                  <h4> Rent Home </h4>
                              </div>
                              
                      </Link>
                          </div>
                      </div>
                      <div className="col-lg-4 my-2 col-md-6 mx-auto">
                          <div className="card">
                          <Link to='/sell'>
                              <div className="card-header  text-dark text-center">
          <i class="fas fa-money-bill-wave-alt fa-5x text-info   "></i>
                  <h4> Sell or rent your property </h4>
                              </div>
                              
                      </Link>
                          </div>
                      </div>
                  </div>
              </div> 
              
              <div className="container py-4">
                  <div className="row">
                   <div className="col-lg-4 col-md-6">
                       <div className="card">
                           <div className="card-header text-center">
                               <i class="fas fa-coins text-warning fa-5x  "></i>
                           <h3>Be an agent and start earning money</h3>
                           <button className="btn btn-outline-info text-center">
                               Read-more
                           </button>
                           </div>
                       </div>
                       </div> 
                       <div className="col-lg-4 col-md-6 my-2">
                       <div className="card">
                           <div className="card-header text-center">
                           <i class="fa fa-handshake fa-7x" aria-hidden="true"></i>
                           <h3>Work with Shihomes</h3>
                           <button className="btn btn-outline-info text-center">
                               Read-more
                           </button>
                           </div>
                       </div>
                       </div> 
                       <div className="col-lg-4 col-md-6 my-2">
                       <div className="card">
                           <div className="card-header text-center">
                           <i class="fa fa-newspaper fa-7x text-primary" aria-hidden="true"></i>
                         <h3>Advertise with us</h3>
                           <button className="btn btn-outline-info text-center">
                               Read-more
                           </button>
                           </div>
                       </div>
                       </div>  
                      </div>
                      </div>
                      <div className="container">
                          <div className="row">
                              <TopDeals/>
                              <TopDeals/>
                              <TopDeals/>
                              <TopDeals/>
                              <TopDeals/>
                              <TopDeals/>
                              <TopDeals/>
                              <TopDeals/>
                          </div>
                      </div>
              <div className="mt-3">
                  <Footer/>
              </div>
            </div>
        )
    }
}
export default Home