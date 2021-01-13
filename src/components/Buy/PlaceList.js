import React, { Component } from 'react'
import './css/Buy.css'
 class PlaceList extends Component {
    render() {
        return (
             <div className="realeatate-house bg-secondary">
                        <h3 className ="text-white">Houses for sale by city</h3> 
                        <div className="list-type1">
                            <ol>
                            <li><a href="#">Adiss ababa houses for sale</a></li>
                            <li><a href="#">Adama houses for sale</a></li>
                            <li><a href="#">Hawasa houses for sale</a></li>
                            <li><a href="#">Mekele houses for sale</a></li>
                            <li><a href="#">Jimma dar houses for sale</a></li>
                            <li><a href="#">DireDewa houses for sale</a></li>
                            <li><a href="#">Harrar houses for sale</a></li>
                            </ol>
                            </div> 
                    </div>
        )
    }
}
export default PlaceList