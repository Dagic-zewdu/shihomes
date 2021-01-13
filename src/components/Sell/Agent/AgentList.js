import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class AgentList extends Component {
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
    }
    }
    render() {
        const All=()=>{
            return(
                    <div className="card text-center">
                <Link to={'/agent/Dagic'}>    
        <div className="card-body text-dark profile-backer">
    <img src="images/logo.jpg" alt="" className="rounded-circle"/>
                            <h6>Dagic zewdu</h6>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit.</p>                          
  </div>
  </Link> 
  <button className="float-right btn btn-outline-white" onClick={this.like}>
  <i className={'fa fa-heart '+this.state.like+' bore'} >
  </i>
      </button>
  <div className="card-footer align-items-justify">
    
  <i class="fab fa-facebook fa-1x  mx-2 text-secondary"></i>
      <i class="fab fa-telegram fa-1x  mx-2 text-info"></i>
      <i class="fa fa-phone fa-1x mx-2 text-danger"></i>
  </div>
  
                        </div>
            )
        }
        return (
<All/>
            )
    }
}
