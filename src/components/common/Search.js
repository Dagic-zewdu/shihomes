import React, { Component } from 'react'

 class Search extends Component {
    state={
        city:'',
        type:'',
        around: '',
        bedroom:'',
        bathroom:'',
        price_max : '',
        price_min:'',
        navbar:''
    }
    Delete=(value)=>{
      if(value==='city'){
        this.setState({
          city :'',
        })
      }
      else if(value==='around'){
        this.setState({
          around :'',
        })
      }
      else if(value==='type'){
        this.setState({
          type :'',
        })
      }
      else if(value==='bath'){
        this.setState({
          bathroom :'',
        })
      }
      else if(value==='bed'){
        this.setState({
          bedroom :'',
        })
      }
      else if(value==='min'){
        this.setState({
          price_min :'',
        })
      }
      else if(value==='max'){
        this.setState({
          price_max :'',
        })
      }
    }
    Setter=(value)=>{
console.log(value)
 var z
 
if(value.City!==undefined)this.setState({city : '',navbar: ''})
if(value.type!==undefined)this.setState({type:'',navbar: ''})
  value.City? (
  this.setState({
    city : value.City,
  })
):(
  z=8
)
value.type?(
  this.setState({
    type : value.type,
  })
):(
  z=5
  )}
    handlechange=(e)=>{
      var z
      this.setState({
        [e.target.id] :[e.target.value],
      })
    }
    navbar=()=>{
      (this.state.around||this.state.bathroom||
        this.state.bedroom||this.state.city||this.state.price_max||
        this.state.price_min||this.state.type)?
        (
        this.setState({
          navbar : 'fitter'
        })
        ):(
          this.setState({
            navbar : ''
          })
         )
    }
    render() {
        
      const Title=()=>(this.state.around||this.state.bathroom||
        this.state.bedroom||this.state.city||this.state.price_max||
        this.state.price_min||this.state.type)?
        (
          <h6 className='bg-dark'>so your searching for</h6>
        ):( <p></p> )
      const SearchButton=()=> (this.state.around||this.state.bathroom||
     this.state.bedroom||this.state.city||this.state.price_max||
     this.state.price_min||this.state.type)?
     (
     <div className="text-center">
        <button className="text-warning bg-dark btn mx-2">
            <i className="fa fa-search"></i>
 </button>
 <button className="text-warning bg-dark btn mx-2">
              <i class="fas fa-save mx-2 text-white"></i>
            Save search
 </button>
                </div>
       
     ):
     (
     <p></p>  
     )  
     const City=()=>this.state.city?(
       <h6>
         City:{this.state.city}
<button className="btn" onClick={()=>{this.Delete('city')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
       </h6>
     ):(
       <p></p>
     )
     const Around=()=>this.state.around?(
       <h6>Around : {this.state.around}
       <button className="btn" onClick={()=>{this.Delete('around')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
</h6>
     ):(
       <p></p>
     ) 
     const Bath=()=>this.state.bathroom?(
       <h6>Bathroom :{this.state.bathroom}
       <button className="btn" onClick={()=>{this.Delete('bath')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
       </h6>
     ):(
       <p></p>
     )
     const Type=()=>this.state.type?(
      <h6>Type :{this.state.type}
      <button className="btn" onClick={()=>{this.Delete('type')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
      </h6>
    ):(
      <p></p>
    )  
    const Bed=()=>this.state.bedroom?(
      <h6>Bedroom :{this.state.bedroom}
      <button className="btn" onClick={()=>{this.Delete('bed')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
      </h6>
    ):(
      <p></p>
    )
    const Max=()=>this.state.price_max?(
      <h6>Price-max :{this.state.price_max}
      <button className="btn" onClick={()=>{this.Delete('max')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
      </h6>
    ):(
      <p></p>
    )
    const Min=()=>this.state.price_min?(
      <h6> Price-min :{this.state.price_min}
      <button className="btn" onClick={()=>{this.Delete('min')}}>
  <i class="fa fa-window-close text-white" aria-hidden="true"></i>
</button>
      </h6>
    ):(
      <p></p>
    )
        return (
            <div>
            <div className={"navbar bg-dark text-white navbar-icon-top navbar-expand-lg "+this.state.navbar} onClick={this.navbar}>
  <div>
      <h4>Search your homes</h4>
      
      </div>
      
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#searchbox" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-search text-white"></i>
  </button>
  
  <div className="collapse navbar-collapse py-3" id="searchbox">
  <ul className="navbar-nav mr-auto"> 
    </ul>
    <ul className="navbar-nav  mr-auto"> 
    <li className="nav-item dropdown">
        <h5 className="nav-link dropdown-toggle text-center "  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        City
        </h5>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" onClick={()=>{this.Setter({City:'A.A'})}}>
          Addis Ababba
          </div>
          <div className="dropdown-item" onClick={()=>{this.Setter({City:'adama'})}}>
          Adama
          </div>
          <div className="dropdown-item" onClick={()=>{this.Setter({City:'Hawassa'})}}>
          Hawassa
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item"  onClick={()=>{this.Setter({City:''})}} >Any</div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <h5 className="nav-link dropdown-toggle text-center py-"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Around
        </h5>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" >
          <input type="text" className='form-control' id='around' onChange={this.handlechange}/>
          </div>
          <div className="dropdown-divider"></div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <h5 className="nav-link dropdown-toggle text-center "  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Property type
        </h5>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" onClick={()=>{this.Setter({type:'Apartment'})}}>
          Apartment
          </div>
          <div className="dropdown-item" onClick={()=>{this.Setter({type:'condominium'})}}>
          condominium
          </div>
          <div className="dropdown-item" onClick={()=>{this.Setter({type:'Realstate'})}}>
          Realstate
          </div>
          <div className="dropdown-item"  onClick={()=>{this.Setter({type:'House'})}}>
          House
          </div>
          <div className="dropdown-item" onClick={()=>{this.Setter({type:'Villa'})}}>
          Villa
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item" onClick={()=>{this.Setter({type:''})}}>
            Any
            </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <h5 className="nav-link dropdown-toggle text-center py-"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Bedroom
        </h5>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" >
          <input type="number" className='form-control' id='bedroom' min="0" onChange={this.handlechange}/>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <h5 className="nav-link dropdown-toggle text-center py-"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Bathroom
        </h5>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" >
          <input type="number" className='form-control' min="0" id='bathroom' onChange={this.handlechange}/>
          </div>
        </div>
      </li>
      
    <li className="nav-item dropdown">
        <h5 className="nav-link dropdown-toggle text-center py-"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        price
        </h5>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" >
          <input type="number" className='form-control'
          placeholder='min' id='price_min' onChange={this.handlechange} min="0" />
          </div>
          <div className="dropdown-item" >
          <input type="number" className='form-control'
          placeholder='max' id='price_max' onChange={this.handlechange} min="0"/>
          </div>
        </div>
      </li>
    <li className="nav-item px-3 py-3 text-center">
        <br/> 
    </li>
    </ul>
    <div className="float-center mx-4 my-auto">
      <Title/>
      <City/>
      <Around/>
      <Type/>
      <Bed/>
      <Max/>
      <Min/>
      <Bath/>
    </div>
    <div className="float-center">
    <SearchButton/>
    </div>
  </div>
  </div>
            </div>
        )
    }
}
export default  Search