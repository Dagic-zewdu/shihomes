import React, { Component } from 'react'
import GoogleMap from './../../common/GoogleMap'
export default class SetLocation extends Component {
    set=(e)=>{
        e.preventDefault();
        let step='step2'
        this.props.Loader(step)
    }
    render() {
        return (
            <div>
                <GoogleMap/>
                <button className="btn btn-outline-info" onClick={this.set}>
                    Set</button>
            </div>
        )
    }
}
