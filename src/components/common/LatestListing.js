import React, { Component } from 'react'

 class LatestListing extends Component {
    render() {
        return (
             <div className="card my-1 text-center text-white text-uppercase">
               <img src="images/img_3.jpg" alt="" className="card-img-top"/>
                
                    <h6 className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit</h6> 
                     
                             <div className="row">
                                  <div className="col-md-6 text-dark col-sm-6 col-lg-6">
                                  1 Garages <br/>
                                  1 Kitchen <br/>
                                  3 bedrooms
                                  </div>
                                    <div className="col-md-6 text-dark col-sm-6 col-lg-6">
                                  Around Bole  
                                  </div>
                              </div>
                                <div className="bg-secondary">
                                   <h5 className="my-2">$1300</h5>   
                    </div>  
                </div>
                    
                )
    }
}
export default LatestListing