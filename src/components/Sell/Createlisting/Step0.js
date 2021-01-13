import React, { Component } from 'react'

class Step0 extends Component {
    handleclick=(e)=>{
        let step0='step0'
        this.props.Loader(step0)
    }
    render() {
        return (
            <div>
            <div className="card bg-secondary text-white my-3 text-center" onClick={this.handleclick}>
                <div className="bg-primary">
                <h2>300 ETB</h2>
                <h2>$11</h2>
                </div>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <h4 className="bg-danger">See plans</h4>
            </div>
            <div className="card bg-secondary text-white my-3 text-center" onClick={this.handleclick}>
                <div className="bg-primary">
                <h2>800 ETB</h2>
                <h2>$27</h2>
                </div>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <h4 className="bg-danger">See plans</h4>
            </div>
            </div>
        )
    }
}
export default Step0