import React from 'react'
import './SearchRegion.css'

const SearchRegion = () => {
  return (
    <div className='SearchRegionS'>
        <h6>Search By Region</h6>
        <div className='mapRegion d-flex justify-content-between flex-wrap'>
            <div className='regionEle'>
                <img className='hoverZoom' src={require("../../assets/globe.jpg")} alt='USimage' />
                <p>I'm flexible</p>
            </div>
            <div className='regionEle'>
                <img src={require("../../assets/europe.webp")} alt='europeimage' />
                <p>Europe</p>
            </div>
            <div className='regionEle'>
                <img src={require("../../assets/uk.webp")} alt='UKimage' />
                <p>United kingdom</p>
            </div>
            <div className='regionEle'>
                <img src={require("../../assets/asia.webp")} alt='Sasiaimage' />
                <p>Southeast Asia</p>
            </div>
            <div className='regionEle'>
                <img src={require("../../assets/canada.webp")} alt='canadaimage' />
                <p>Canada</p>
            </div>
            <div className='regionEle'>
                <img src={require("../../assets/usa.webp")} alt='USimage' />
                <p>United States</p>
            </div>
        </div>
    </div>
  )
}

export default SearchRegion