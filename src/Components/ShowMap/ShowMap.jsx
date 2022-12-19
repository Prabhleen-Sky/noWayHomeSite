import React, { Component } from 'react'
import './ShowMap.css'

class ShowMap extends Component {
  render() {
    return (
    <div className='show-map'>
        <span>Show Map</span>
        <i className="fa-solid fa-map-location-dot"></i>
    </div>
    )
  }
}

export default ShowMap