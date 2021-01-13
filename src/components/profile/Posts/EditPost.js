import React, { Component } from 'react'
import Spinner from '../../common/Spinner'

export default class EditPost extends Component {
    state={
   description: '',
   Button_description: 'disable',
   dicon : 'fa fa-upload',
   update_text : 'update',
   btn : 'btn-outline-info'
    }
    update=(e)=>{
        e.preventDefault()
        this.setState({
            dicon : 'fas fa-spinner'
        })
        setTimeout(()=>{
            this.setState({
                dicon: 'fa fa-check text-success',
                btn : 'btn-outline-success',
                update_text :'updated'
            })
        },2000)
        
    }
    change=(e)=>{
  this.setState({
      [e.target.id] : [e.target.value],
      dicon : 'fa fa-upload',
       Button_description : 'enable',
       update_text : 'update',
       btn : 'btn-outline-info'
   })
  }
    
    render() {
    const UpdateForm=()=>{
        if(this.state.Button_description=='enable'){
            return(
               <div className="card-footer">
   <button className={this.state.btn + " btn float-right"} onClick={this.update}>
<i className={this.state.dicon}></i>
{this.state.update_text}
   </button>
                </div>
            )
        }
        else{
            return(
  <div className="card-footer">
      </div>
                )
        }
        
    }
    
        return (
        <div className="row mt-2">
<div className="col-lg-6">
<div className="card text-center">
                                 <form>
  <p>To</p>
  <div className="input-container">
    <i className="fa fa-list fa-3x icon"></i>
    <select id="selltype" className="input-field"  onChange={this.change}>
        <option value="Sell">Sell</option>
        <option value="Rent">Rent</option>
    </select>
  </div>
<p> Type</p>
  <div className="input-container">
    <i className="fa fa-home fa-3x icon"></i>
    <select id="house" className="input-field" onChange={this.change}>
           <option value="Houses">Houses</option>
          <option value="Apatment">Ampartments</option>
          <option value="Condominium">Condominium</option>
          <option value="Houses">Houses</option>
          <option value="RealStates">RealStates</option>
          <option value="Villas">Villas</option>
    </select>
  </div>
  
  <div className="input-container">
    <i className="fas fa-money-bill fa-3x icon"></i>
    <input className="input-field" type="number" min="0" placeholder="Price" id="price" onChange={this.change} />
    <select  id="currency" className="px-2" onChange={this.change}>
      <option value="Etb">ETB</option>
      <option value="dollar">Us Dollar</option>
    </select>
  </div>
  
  <div className="input-container">
    <i className="fas fa-chart-area fa-3x icon"></i>
    <input className="input-field" type="number" min="0" placeholder="Area" id="area" onChange={this.change} />
    <select  id="unit" className="px-2" onChange={this.change}>
      <option value="m.sq">m.sq</option>
      <option value="ft.sq">ft.sq</option>
    </select>
  </div>
  <div className="input-container">
    <i className="fa fa-bed fa-3x icon"></i>
    <input className="input-field" type="number" min='0' placeholder="Bed Rooms" id="Bed" onChange={this.change} />
  </div>
  <div className="input-container">
    <i className="fa fa-bath fa-3x icon"></i>
    <input className="input-field" type="number" min="0" placeholder="Bathrooms" id="Bath" onChange={this.change}/>
  </div>
  <div className="input-container">
<h6>Built year</h6>
    <input className="input-field" type="Date" placeholder="Built year" id="Byear" onChange={this.change}/>
  </div>
  <div className="input-container">
    <i className="fa fa-list fa-3x icon"></i>
  <textarea id="description" cols="30" rows="15" className="form-control" placeholder="Description" onChange={this.change}>
  </textarea>
  </div>
  <div className="input-container">
    <i className="fa fa-flag fa-3x icon"></i>
    <input className="input-field" type="text"  placeholder="Country" id="country" onChange={this.change}/>
  </div>
  <div className="input-container">
    <i className="fa fa-map-marker fa-3x icon"></i>
    <input className="input-field" type="text"  placeholder="City" id="city" onChange={this.change}/>
  </div>
  <div className="input-container">
    <i className="fa fa-map-marker fa-3x icon"></i>
    <input className="input-field" type="text"  placeholder="Around" id="around" onChange={this.change}/>
  </div>
  <p className="text-center text-danger">{this.state.error}</p>  
 {<UpdateForm/>}
 </form>
                                 </div>  

                </div>
            <div className="col-lg-4 col-md-6 my-2">
               <div className="card">
               <div className="card-header">
                       Main image
                       <button className="btn-outline-danger btns float-right">
                 <i className="fa fa-trash"></i>
                 </button>
                   </div>
                <img src="images/img_7.jpg" alt="" className="card-img-top"/>
                   </div>
           </div>
           <div className="col-lg-4 col-md-6 my-2">
               <div className="card">
               <div className="card-header">
                   <button className="btn btn-outline-info float-left ">
                       Set as Main Image
                   </button>
                       <button className="btn-outline-danger btns float-right">
                 <i className="fa fa-trash"></i>
                 </button>
                   </div>
                   <img src="images/img_1.jpg" alt="" className="card-img-top"/></div>
           </div>
           <div className="col-lg-4 col-md-6 my-2">
               <div className="card">
               <div className="card-header">
                       <button className="btn-outline-danger btns float-right">
                 <i className="fa fa-trash"></i>
                 </button>
                   </div>
                   <img src="images/img_5.jpg" alt="" className="card-img-top"/>
                   </div>
           </div>
           <div className="col-lg-4 col-md-6 my-2">
           <button className="btn-outline-danger btns float-right">
                 <i className="fa fa-trash"></i>
                 </button>           
               <div className="card">
                   <img src="images/img_8.jpg" alt="" className="card-img-top"/>
               </div>
           </div>
           <div className="col-lg-4 col-md-6 my-2">
               <div className="card">
               <div className="card-header">
                       <button className="btn-outline-danger btns float-right">
                 <i className="fa fa-trash"></i>
                 </button>
                   </div>
                   <img src="images/img_3.jpg" alt="" className="card-img-top"/>
                   </div>
           </div>
           <div className="col-lg-4 col-md-6 my-2">
               <div className="card">
               <div className="card-header">
                       <button className="btn-outline-danger btns float-right">
                 <i className="fa fa-trash"></i>
                 </button>
                   </div>
                   <img src="images/img_2.jpg" alt="" className="card-img-top"/>
               </div>
           </div>
           </div>
        )
    }
}
