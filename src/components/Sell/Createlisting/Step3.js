import React, { Component } from 'react'
 class Step3 extends Component {
     state={
        steps: 'step1'
     }
     paylater=(e)=>{
         e.preventDefault();
         const step='step3'
         this.props.Loader(step)
     }
     paynow=(e)=>{
         e.preventDefault()
         this.setState({
             steps: 'step-2'
         })
     }
    render() {
        console.log(this.props)
        const Payment=()=>{
            if(this.state.steps=='step1'){
                return(
                    <div className='card'>
                        <button className="btn btn-outline-primary text-uppercase mx-5 my-3"
                         onClick={this.paynow}> 
                            <i class="fas fa-money-bill-alt"></i>
                        pay now 
                         </button>
<button className="btn btn-outline-primary text-uppercase my-3" data-toggle="collapse" data-target="#paylater">
    <i className="fa fa-money-bill fa-2x"></i> pay later
    </button>
  <div className="collapse mx-2" id="paylater">
<div className="input-container">
    <i className="fa fa-image fa-2x text-primary"></i>
    <p className="text-danger">
        The image that you uploaded are saved in to your profile page. Goto 
        your profile page and confirm your payment
    </p>
  <button className="btn-outline-primary text-uppercase mx-5 my-3"
   onClick={this.paylater}>Ok</button>
 </div>
                    </div>
                </div>
                )
            }
            
            else if(this.state.steps=='step-2'){
                return(
                    <div className='text-white mx-5'>
  <div className="card my-3 marg text-center bg-warning">
<p className="text-white display-2 my-2">
A
</p>
Pay With Amole
  </div>
  <div className="card my-3 marg text-center bg-primary">
       <p className="text-dark display-2 my-2">
              CBE BIRR
</p>
Pay With CBE BIRR
  </div>
  <div className="card my-3 marg text-center ">
       <p className="text-danger display-2 my-2">
              CP0
</p>
<p className="text-dark">
Pay With Bank CPO
</p>
  </div>
  
  <div className="card my-3 marg bg-success text-center ">
       <p className="text-white display-2 my-2">
              ethio-tel
</p>
<p className="text-white">
Pay with ethio-tel card number 
</p>
  </div>
</div>

                )
            }
        }
        return (
          <div>
    {<Payment/>}
          </div>
        )
    }
}
export default Step3