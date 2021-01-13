import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import './Detail.css'
import { Link } from 'react-router-dom'
import GoogleMap from '../common/GoogleMap'
export default class Detail extends Component {
    state={
        image : '',
        like : 'bg-danger text-white',
    }
    showimage=()=>{
        this.setState({
            image :'images/img_1.jpg',
        })
    }
    like=(e)=>{
        if(this.state.like==='bg-danger text-white')
       { 
           this.setState({
            like: 'text-danger'
        })
    }
    else{
        this.setState({
            like : 'bg-danger text-white'
        })
    }
    }
    render() {
        const Location=()=>{
            return(
                <div className="card-body my-3">
                    <h4 className='text-center'>Location</h4>
                <h5>City : Addis Abeba</h5>
                <h5>Around : Bole</h5> 
                <h5 className="form-control btn-inherit mx-4
                 btn-secondary text-uppercase mx-5 my-3"
                     data-toggle="collapse" data-target="#map">
                        <i className="fa fa-map-marker text-white  fa-1x mx-2"></i>
                        Show on map
                        </h5>
    <div className="collapse" id="map">
        <GoogleMap/>
        </div>                           
                    </div>
            )
        }
        const Contact_info=()=>{
            return(
                <div className="card-body text-center">
                    <h5 className="form-control btn-inherit mx-4 btn-outline-danger text-uppercase mx-5 my-3"
                     data-toggle="collapse" data-target="#buy">
                        <i className="fa fa-money-bill  fa-1x mx-2"></i>Buy</h5>
                        <Link to='/agent/Dagic' >
  <div className="collapse mx-2 text-dark" id="buy">
 <i className="fa fa-user text-warning fa-2x"></i>
  
  <h4>Dealer information</h4>
<h5>
    <i className="fa fa-user mx-2 text-warning">
    </i>
    Name : Dagic
    </h5>
    <h5>
<i class="fa fa-address-book mx-2 text-danger" aria-hidden="true"></i>
Contact : +251910565994
</h5>
<h5>
<i class="fab fa-telegram mx-2 text-info" aria-hidden="true"></i>
Telegram : <a href="http://telegram.me"> http://telegram.me</a> 
</h5>
<h5>
<i class="fab fa-facebook mx-2 text-primary" aria-hidden="true"></i>
Facebook : <a href="http://www.facebook.com"> http://www.facebook.com/shihomes</a> 
</h5>
  </div>  
</Link>                 
                    </div>
            )
        }
        const Describe=()=>{
            return(
                <div className="card-body text-center">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum quos odio porro harum ab voluptates magni voluptate dicta consequuntur, quam earum doloribus atque sit! Distinctio nam dolores aperiam praesentium. 
                         </div>
            )
        }
        const Description=()=>{
            return(
             <div className="card my-3">
                 <div className="card-header">
                 <h5 className="float-right btn btn-outline-white" onClick={this.like}>
  <i className={'fa fa-heart fa-2x '+this.state.like+' bore'} >
  </i>
      </h5>
                     <h5 className='mx-2'>Bedroom :3</h5>
                     <h5 className='mx-2'>Bathroom:1</h5>
                     <h5 className='mx-2'>Area:1</h5>
                     <h5 className='mx-2'>Built year :{Date.now()}</h5>
                     <h5 className='mx-2'>Area:1</h5>
                     <h5 className="float-left">
                         <i class="fa fa-eye text-danger mx-2" aria-hidden="true"></i>
                         views: 1200
                     </h5>
           <h5 className="float-right text-danger">price: $6575475475</h5>
                 </div>
             </div>
            )
        }
        const Modal=()=>{
              return(
    <div className="modal-openn fader modaln">
        <img src="images/img_4.jpg" alt=""/>
    </div> 
        
            )
}
        const Gallery=()=>{
            return(
                <div className="dallery" id="dallery">
      <div className="picss animationn dall 2 my-3"  onClick={this.showimage}>
      <img className="img-fluid my-2"  src="images/img_2.jpg" alt=""/>
      </div>         
      <div className="picss animationn dall 2 my-3" onClick={this.showimage}>
      <img className="img-fluid my-2"  src="images/img_1.jpg" alt=""/>
      </div>
      <div className="picss animationn dall 2 my-3" onClick={this.showimage}>
      <img className="img-fluid my-2"  src="images/img_3.jpg" alt=""/>
      </div>
      <div className="picss animationn dall 2 my-3" onClick={this.showimage}>
      <img className="img-fluid my-2"  src="images/img_4.jpg" alt=""/>
      </div>
      <div className="picss animationn dall 2 my-3" onClick={this.showimage}>
      <img className="img-fluid my-2"  src="images/img_5.jpg" alt=""/>
      </div>
      <div className="picss animationn dall 2 my-3" onClick={this.showimage}>
      <img className="img-fluid my-2"  src="images/img_6.jpg" alt=""/>
      </div>
            </div>
            )
        }
        const Carousel=()=>{
            return(
                  <div className="mb-5">
                 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="images/img_1.jpg" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="images/img_2.jpg" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="images/img_3.jpg" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon bg-info" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon bg-info" aria-hidden="true"></span>
                   <span className="sr-only">Next</span>
               
                </a>
              </div> 
              </div>
            )
        }
        const Related=()=>{
            return(
              <div className="col-lg-3 col-md-6 my-3">
                  <div className="card">
                      <div className="card-header text-center">
                          <img src="images/img_8.jpg" alt="" className="card-img-top"/>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatum.</p>     
                    </div>
                <div className="card-footer">
                    <p className="float-left mr-3">
                        Bedrooms : 5 
                    </p>
                    <h5 className="float-right btn btn-outline-white" onClick={this.like}>
  <i className={'fa fa-heart fa-1x '+this.state.like+' bore'} >
  </i>
      </h5>
    <p className="float-left mr-3">
        Area : 32 sq.mt
    </p>
              </div>
                  </div>
              </div>
            )
        }
        return (
            <div>
            <Navbar/>
            <div className="container my-5 min">
                <div className="row">
                    <div className="col-lg-7">
               {<Carousel/>}
               {<Describe/>}
            <Gallery/>
                    </div>
                    <div className="col-lg-5">
            <Description/>
            <Contact_info/>
            <Location/>
            <div className="card my-3">
            <div className="card-body">
                <h5>Any questions or drop message to the Dealer</h5>
     <input type="text" className="form-control"/>
     <button className="form-control btn-inherit mx-4 btn-outline-danger text-uppercase mx-5 my-3">
         Send
     </button>
            </div>
             </div>
                    </div>
                    <div className="col-lg-12 my-3">
                        <h4 className='text-center mt-3'>Related items</h4>
                    </div>
                    <Related/>
                   <Related/>
                   <Related/>
                   <Related/>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
