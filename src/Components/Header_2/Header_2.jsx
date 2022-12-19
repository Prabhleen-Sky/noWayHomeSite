import React, { useState } from 'react'
import './Header_2.css'

const Header_2 = (props) => {

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const openFilter = () => {
    setIsFilterOpen(true)
  }
  const closeFilter = () => {
    setIsFilterOpen(false)
  }


  const lightTheme = {
    color: "#525252",
    backgroundColor: "white"
  }
  const darkTheme = {
    color: "white",
    backgroundColor: "#243138"
  }

  return (
    <>
      <div id='header-two-parent'>
      <div className='header-two-container'
        style={ props.theme==='light' ? lightTheme : darkTheme }
      >
        <div className='header-two'>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-tree"></i>
            <p>National Parks</p>
          </div>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-house-chimney"></i>
            <p>Small Homes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-golf-ball-tee"></i>
            <p>Golfing</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain"></i>
            <p>Caves</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-snowflake"></i>
            <p>Arctic</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-fire"></i>
            <p>Camping</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain-city"></i>
            <p>Country side</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-brands fa-fort-awesome"></i>
            <p>Castles</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-water-ladder"></i>
            <p>Amazing Pools</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-ship"></i>
            <p>Boats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-anchor"></i>
            <p>Houseboats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-paintbrush"></i>
            <p>Creative Space</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tower-observation"></i>
            <p>Towers</p>
          </div>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-tree"></i>
            <p>National Parks</p>
          </div>
          <div className='header-item' style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-house-chimney"></i>
            <p>Small Homes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-golf-ball-tee"></i>
            <p>Golfing</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain"></i>
            <p>Caves</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-snowflake"></i>
            <p>Arctic</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-fire"></i>
            <p>Camping</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mountain-city"></i>
            <p>Country side</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-brands fa-fort-awesome"></i>
            <p>Castles</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-water-ladder"></i>
            <p>Amazing Pools</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-ship"></i>
            <p>Boats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-anchor"></i>
            <p>Houseboats</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-paintbrush"></i>
            <p>Creative Space</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tower-observation"></i>
            <p>Towers</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-landmark-dome"></i>
            <p>Domes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-water"></i>
            <p>Lake</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-umbrella-beach"></i>
            <p>Beaches</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-van-shuttle"></i>
            <p>Campervans</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-sun"></i>
            <p>Amazing views</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mug-saucer"></i>
            <p>Bed & Breakfasts</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-landmark"></i>
            <p>Historical Homes</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tents"></i>
            <p>Camping</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-landmark-dome"></i>
            <p>Domes</p>
          </div>
          <div className="header-item" style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-water"></i>
            <p>Lake</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-umbrella-beach"></i>
            <p>Beaches</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-van-shuttle"></i>
            <p>Campervans</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-sun"></i>
            <p>Amazing views</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
            <i className="fa-solid fa-mug-saucer"></i>
            <p>Bed & Breakfasts</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-landmark"></i>
            <p>Historical Homes</p>
          </div>
          <div className="header-item"style={ props.theme==='light' ? lightTheme : darkTheme }>
           <i className="fa-solid fa-tents"></i>
            <p>Camping</p>
          </div>
        </div>

        <div className="sort-filter"
          style={{
            color: `${props.theme==='light' ? "black" : "white" }`,
            backgroundColor: `${props.theme==='light' ? 'rgb(229, 229, 229)' : '#1d262b' }`
          }}
        >
          <div className="sort" >
            <i className="fa-solid fa-sort"></i>
            <p>Sort</p>
          </div>
          <div className="filter" onClick={openFilter}>
            <i className="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>
      </div>


      {/* <Filter /> */}
      <div className='filter-box'
        style={{
          opacity: `${isFilterOpen===true ? "1" : "0" }`,
          top: `${isFilterOpen===true ? "12%" : "34%" }`,
          visibility: `${isFilterOpen===true ? "visible" : "hidden" }`
        }}
      >
        <div className="closeFilter">
          <i className='fa-solid fa-xmark' onClick={closeFilter}></i>
          <p>Filters</p>
        </div>

        <h4>Price Range</h4>
        <div className="price-filter">
          <input type="number" id="" placeholder='min price' />
          <span style={{marginTop: "15px"}}>-</span>
          <input type="number" id="" placeholder='max price' />
        </div>

        <hr style={{ width: "90%", margin: "30px auto" }} />

        <h4>Type of place</h4>
        <div className="type-filter">
          <div className="type-filter-item">
            <input type="checkbox" id="entire-place" /> <label htmlFor="entire-place"> Entire Place </label>
          </div>
          <div className="type-filter-item">
            <input type="checkbox" id="private-room" /> <label htmlFor="private-room"> Private Room </label>
          </div>
          <div className="type-filter-item">
            <input type="checkbox" id="shared-room" /> <label htmlFor="shared-room"> Shared Room </label>
          </div>
        </div>

        <hr style={{ width: "90%", margin: "30px auto" }} />

        <h4>Rooms and Beds</h4>
        <div className="rooms-filter">
          <div className="bedrooms-filter">
            <p>Bedrooms</p>
            <div className="bedroom-type">
              <p>Any</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8+</p>
            </div>
          </div>
          <div className="beds-filter">
            <p>Bedrooms</p>
            <div className="bed-type">
              <p>Any</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8+</p>
            </div>
          </div>
          <div className="bathrooms-filter">
            <p>Bedrooms</p>
            <div className="bathroom-type">
              <p>Any</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8+</p>
            </div>
          </div>
        </div>

        <hr style={{ width: "90%", margin: "30px auto" }} />

        <h4>Property Type</h4>
        <div className="property-type">
          <div className="property-house">
            <i className="fa-solid fa-house"></i>
            <p>House</p>
          </div>
          <div className="property-flat">
            <i className="fa-solid fa-building"></i>
            <p>Flat</p>
          </div>
          <div className="property-guest-house">
            <i className="fa-solid fa-house-chimney-user"></i>
            <p>Guest House</p>
          </div>
          <div className="property-hotel">
            <i className="fa-solid fa-hotel"></i>
            <p>Hotel</p>
          </div>
        </div>

        <hr style={{ width: "90%", margin: "30px auto" }} />

        <h4>Amenities</h4>
        <div className="type-filter" style={{marginBottom: "20px"}}>
          <div className="type-filter-item">
            <input type="checkbox" id="entire-place" /> <label htmlFor="entire-place"> Wifi </label>
          </div>
          <div className="type-filter-item">
            <input type="checkbox" id="private-room" /> <label htmlFor="private-room"> Kitchen </label>
          </div>
          <div className="type-filter-item">
            <input type="checkbox" id="shared-room" /> <label htmlFor="shared-room"> Heating </label>
          </div>
          <div className="type-filter-item">
            <input type="checkbox" id="shared-room" /> <label htmlFor="shared-room"> Air Conditioning </label>
          </div>
          <div className="type-filter-item">
            <input type="checkbox" id="shared-room" /> <label htmlFor="shared-room"> Dryer </label>
          </div>
        </div>

        <div className="filter-footer">
          <p>Clear all</p>
          <button>Apply</button>
        </div>

      </div>
      </>
    )
}

export default Header_2;