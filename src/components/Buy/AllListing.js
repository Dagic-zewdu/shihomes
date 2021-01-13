import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class AllBuyListing extends Component {
    state={
        like : 'bg-danger text-white',
    }
    like=(e)=>{
        if(this.state.like=='bg-danger text-white')
       { 
           this.setState({
            like: 'text-danger'
        })
    }
    else{
        this.setState({
            like : 'bg-danger text-white'
        })
    }}
    render() {
        return (
             <div className="col-lg-4 col-md-6 my-2">
            <div className="card my-1">
            <div className="card-header text-center">
            <Link to='/detail'>
                <img src="images/img_6.jpg" alt="" className="card-img-top"/>
                <h6 className='text-dark'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit</h6> 
                
                </Link>
                <div className="row">
                                  <div className="col-md-6 text-dark col-sm-6 col-lg-6">
                                  1 Garages <br/>
                                  1 Kitchen <br/>
                                  3 bedrooms
                                  </div>
                                    <div className="col-md-6 text-dark col-sm-6 col-lg-6">
                                  Around Bole <br/>
 <button className="float-right btn btn-outline-white" onClick={this.like}>
  <i className={'fa fa-heart '+this.state.like+' bore'} >
  </i>
      </button>  
                                  </div>
                                 
                              </div>        
                </div>
               <div className="card-footer text-center">
                   <h5 className='text-info'>$134345</h5>
               </div>
                </div>
            </div>
       
        )
    }
}
export default AllBuyListing