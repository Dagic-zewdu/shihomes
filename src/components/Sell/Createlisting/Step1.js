import React, { Component } from 'react'
 class Step1 extends Component {
   state={
    selltype:"sell",
    house:"Houses",
    price:"",
    currency:"ETB",
    area:"",
    unit:"m.sq",
    Bed :0,
    Bath:0,
    Byear:null,
    description:"",
    country:"Ethiopia",
    city:"",
    around:"",
    error:""
   }
   change=(e)=>{
     this.setState({
       error:"",
       [e.target.id] : [e.target.value]
     })
   }
   handleclick=(e)=>{
     e.preventDefault();
     if(this.state.price==""){
       this.setState({
         error: 'Missing price value'
       })
     }
     else if(this.state.area==""){
       this.setState({
         error:'Missing area value'
       })
     }
     else if(this.state.description==""){
       this.setState({
         error: 'Missing Descritption'
       })
     }
     else if(this.state.city==""){
       this.setState({
error:'Missing city'
       })
     }
     else if(this.state.around==""){
       this.setState({
         error: 'Missing city around place'
       })
     }
     else if(this.state.Byear==null||this.state.Byear==""){
      this.setState({
        error: 'Missing house built year'
      })
    }
     else{
       let page='step1'
       const load=this.props.Loader
       if(load!=undefined)
       {this.props.Loader(page)}
      const addpost=this.props.Addpost
      if(addpost!=undefined){
        this.props.Addpost(page)
      }
     }
   }
   
    render() {
        return (
            <div className="card text-center">
                        
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
  <button className="btn-primary form-control" onClick={this.handleclick}>Next</button>

                                 </div>  
        )
    }
}
export default Step1
