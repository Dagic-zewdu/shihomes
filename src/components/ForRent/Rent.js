import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import Search from '../common/Search'
import GoogleMap from '../common/GoogleMap'
import LatestListing from '../common/LatestListing'
import AllRentlist from './AllRentlist'
import Footer from '../common/Footer'
import TopDeals from '../common/TopDeals'
import PlaceList from './PlaceList'
 
class Rent extends Component {
    state={
        display: "list",
        layout : '',
        listbutton: 'bg-primary d-block mx-2 input text-white',
        mapbutton: 'bg-secondary d-block mx-2 input text-white',
        realstatebtn:'bg-secondary d-block mx-2 input text-white',
        codbtn : 'bg-secondary d-block mx-2 input text-white',
        apartmentbtn:'bg-secondary d-block mx-1 input text-white',
        btnhouse: 'bg-secondary d-block mx-1 input text-white',
        btnvilla: 'bg-secondary d-block mx-1 input text-white'
    
    }
    Displaylist=(e)=>{
      e.preventDefault();
      this.setState({
          display : "list",
          listbutton : 'bg-primary d-block mx-2 input text-white',
          mapbutton : 'bg-secondary d-block mx-2 input text-white',
          realstatebtn:'bg-secondary d-block mx-2 input text-white',
          codbtn : 'bg-secondary d-block mx-2 input text-white',
          apartmentbtn:'bg-secondary d-block mx-1 input text-white',
          btnhouse: 'bg-secondary d-block mx-1 input text-white',
          btnvilla: 'bg-secondary d-block mx-1 input text-white'
      })
    }
    Listview=(e)=>{
        e.preventDefault();
        this.setState({
            layout : ''
        })
    }
    Displaymap=(e)=>{
        e.preventDefault();
        this.setState({
          layout : "map"
        })
    }
    DisplayRealState=(e)=>{
        e.preventDefault();
        this.setState({
            display : 'realstate',
            listbutton : 'bg-secondary d-block mx-2 input text-white',
            mapbutton : 'bg-secondary d-block mx-2 input text-white',
            realstatebtn:'bg-primary d-block mx-2 input text-white',
codbtn : 'bg-secondary d-block mx-2 input text-white',
apartmentbtn:'bg-secondary d-block mx-1 input text-white',
btnhouse: 'bg-secondary d-block mx-1 input text-white',
btnvilla: 'bg-secondary d-block mx-1 input text-white'       
})
    }
    Displaycod=(e)=>{
        e.preventDefault();
        this.setState({
            display : 'cod',
            listbutton : 'bg-secondary d-block mx-2 input text-white',
            mapbutton : 'bg-secondary d-block mx-2 input text-white',
            realstatebtn:'bg-secondary d-block mx-2 input text-white',
            codbtn : 'bg-primary d-block mx-2 input text-white',
            apartmentbtn:'bg-secondary d-block mx-1 input text-white',
            btnhouse: 'bg-secondary d-block mx-1 input text-white',
            btnvilla: 'bg-secondary d-block mx-1 input text-white'       
})
    }
    DisplayApartment=(e)=>{
        e.preventDefault();
        this.setState({
            display : 'apr',
            listbutton : 'bg-secondary d-block mx-2 input text-white',
            mapbutton : 'bg-secondary d-block mx-2 input text-white',
            realstatebtn:'bg-secondary d-block mx-2 input text-white',
            codbtn : 'bg-secondary d-block mx-2 input text-white',
            apartmentbtn:'bg-primary d-block mx-1 input text-white'  ,
            btnhouse: 'bg-secondary d-block mx-1 input text-white',
            btnvilla: 'bg-secondary d-block mx-1 input text-white'     
})
    }
    DisplayVilla=(e)=>{
        e.preventDefault()
        this.setState({
            display : 'villa',
            listbutton : 'bg-secondary d-block mx-2 input text-white',
            mapbutton : 'bg-secondary d-block mx-2 input text-white',
            realstatebtn:'bg-secondary d-block mx-2 input text-white',
            codbtn : 'bg-secondary d-block mx-2 input text-white',
            apartmentbtn:'bg-secondary d-block mx-1 input text-white'  ,
            btnhouse: 'bg-secondary d-block mx-1 input text-white',
            btnvilla: 'bg-primary d-block mx-1 input text-white' 
        })
    }
    DisplayHouse=(e)=>{
        e.preventDefault()
        this.setState({
            display : 'house',
            listbutton : 'bg-secondary d-block mx-2 input text-white',
            mapbutton : 'bg-secondary d-block mx-2 input text-white',
            realstatebtn:'bg-secondary d-block mx-2 input text-white',
            codbtn : 'bg-secondary d-block mx-2 input text-white',
            apartmentbtn:'bg-secondary d-block mx-1 input text-white'  ,
            btnhouse: 'bg-primary d-block mx-1 input text-white',
            btnvilla: 'bg-secondary d-block mx-1 input text-white' 
        })
    }
    render() {
    const Buttons=()=>{
            return(
                 <div className="col-lg-2 col-sm-12 my-auto  text-center">
                     <div className="flexer">
    <h6 className={this.state.listbutton} onClick={this.Displaylist}><i className="fa fa-list"></i>ALL List</h6> 
  <h6 className={this.state.btnvilla} onClick={this.DisplayVilla}><i className="fa fa-home"></i>Villa(150)</h6> 
  <h6 className={this.state.codbtn} onClick={this.Displaycod}><i className="fa fa-home"></i>Codiminium(200)</h6>
  <h6 className={this.state.btnhouse} onClick={this.DisplayHouse}><i className="fa fa-home"></i>Houses(700)</h6>             
                      
  <h6 className={this.state.apartmentbtn} onClick={this.DisplayApartment}><i className="fa fa-home"></i>Apartments(400)</h6>                    
                </div>
                </div>
            )
        }
        const Show=()=>{
            if(this.state.layout=="map"){
            return(
     <div className="row">
    {<Buttons/>}
                        <div className="col-lg-8">
                            <div className="row">
<div className="col-lg-12">
  <button className="btn-secondary float-right" onClick={this.Listview}>
      <i class="fa fa-list" aria-hidden="true"></i>
      List
      </button>
</div>
<div className="col-lg-12">
<GoogleMap/>
</div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-4 text-center">
                           <PlaceList/>
                        </div>
     </div>
            )
            }
            else if(this.state.display=='apr'){
                return(
                <div className="row">
                        <Buttons/>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                <h6 className={this.state.mapbutton + ' float-right'} 
                onClick={this.Displaymap}>
                <i className="fa fa-map-marker"></i>
               Display on Map
               </h6>
                                </div>
                                <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
                            </div>
                        </div>
                </div>
                )
            }
            else if(this.state.display=='house'){
                return(
                   <div className="row">
                        <Buttons/>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                <h6 className={this.state.mapbutton + ' float-right'} 
                onClick={this.Displaymap}>
                <i className="fa fa-map-marker"></i>
               Display on Map
               </h6>
                                </div>
                                <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
                            </div>
                        </div>
                </div> 
                )
            }
            else if(this.state.display=='villa'){
                return(
                  <div className="row">
                        <Buttons/>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                <h6 className={this.state.mapbutton + ' float-right'} 
                onClick={this.Displaymap}>
                <i className="fa fa-map-marker"></i>
               Display on Map
               </h6>
                                </div>
                                <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
                            </div>
                        </div>
                </div> 
                )
            }
            else if(this.state.display=='cod'){
                return(
                    <div className="row">
                        <Buttons/>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                <h6 className={this.state.mapbutton + ' float-right'} 
                onClick={this.Displaymap}>
                <i className="fa fa-map-marker"></i>
               Display on Map
               </h6>
                                </div>
                                <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
                            </div>
                        </div>
                </div>
                )
            }
            else if(this.state.display=='realstate'){
                return(
                  <div className="row">
                  {<Buttons/>}
                  <div className="col-lg-9 col-md-12 mt-3 col-sm-12">
               <div className="row">
                   
               <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Noah real states</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
                       <div className="col-lg-4 my-3 col-md-6">
                           <div className="card text-center">
                               <i className="fa fa-home fa-5x"></i>
                               <h4>Tsehay Real state</h4>
                               </div>
                       </div>
               </div>
  </div>
                    </div>  
                )
            }
            else{
                return(
                   <div className="row">
                        <Buttons/>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                <h6 className={this.state.mapbutton + ' float-right'} 
                onClick={this.Displaymap}>
                <i className="fa fa-map-marker"></i>
               Display on Map
               </h6>
                                </div>
                                <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
               <AllRentlist/>
                            </div>
                        </div>
                </div>
                          
                )
            }
        }
        const Topdeal=()=>{
            
            return (
             <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4 className="py-3">Top Deals</h4>
                    </div>
                    {<TopDeals/>}
                </div>
                ) 
        }
        return (
            <div>
                <Navbar/>
                <Search/>
                <div className="container-fluid my-3">
                    
                    {<Show/>}
                    </div>
            <div className="container">
                {<Topdeal/>}
            </div>
                <div className="pt-4">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Rent