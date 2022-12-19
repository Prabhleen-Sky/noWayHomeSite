import React, { Component } from 'react'
import './Header_1.css'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../Login/Login'

class Header_1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isUserHamOpen: false
    }
  }


  // open user hamburger menu
  openUserHam = () => {
    if (this.state.isUserHamOpen === false) {
      this.setState({ isUserHamOpen: true })
    }
    else if (this.state.isUserHamOpen === true) {
      this.setState({ isUserHamOpen: false })
    }
  }


  render() {
    return (
      <div className='header1 d-flex justify-content-around'>
         <div className="logo">
           <img src={require("../../assets/logo.png")} alt='logoimage'
            style={{
              width: '60px',
              position: "absolute",
              marginTop: "-0.4%",
              transition: "all ease-in-out .1s"
            }}
          />
         </div>
         <div className="search">
            <div className='d-flex flex-row justify-content-around searchDisplay'>
              <div className="anywhere p-3" style={{fontWeight: "500"}}>Anywhere</div>
              <div className="vr"></div>
              <div className="anyweek p-3" style={{fontWeight: "500"}}>Any week</div>
              <div className="vr"></div>
              <div className="addguest p-3" style={{color: "grey"}}>Add guests</div>
              <div className="searchicon p-2 m-1" style={{cursor:'pointer'}} onClick={this.props.clicked}>
                <i className="fa fa-search border rounded-circle bg-info p-2" style={{fontSize: "12px"}}></i></div>
            </div>
         </div>


         <div className="sign-in" onClick={this.openUserHam}>
           <i className="fa-solid fa-bars p-1"></i>
           <i className="fa-solid fa-circle-user p-1" style={{fontSize:'22px'}}></i>
         </div>
         <div className="ham-menu"
          style={{
            display: `${this.state.isUserHamOpen===false ? "none" : "block" }`
          }}
         >
          <Link to='/signup' style={{ textDecoration: 'none' }}>
             <p>Sign Up</p>
          </Link>
          <Link to='/login' style={{ textDecoration: 'none' }}>
             <p>Log In</p>
          </Link>
          <hr />
          <p>Host your home</p>
          <Link to='/host' style={{ textDecoration: 'none' }}>
              <p>Host an experience</p>
          </Link>
          <p>Help</p>
         </div>
      </div>

    )
  }
}

export default Header_1;