import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {

  state = {
    navOpen: this.props.isNavOpen
  }


  toggleNavbar = () => {
    if (this.state.navOpen === false) {
      this.setState({ navOpen: true })
      document.querySelector(".menu-bar-1").style.transform = "rotate(-30deg)"
      document.querySelector(".menu-bar-2").style.transform = "rotate(30deg)"
      document.querySelector(".my-navbar").style.left = "50px"
    }
    else if (this.state.navOpen === true) {
      this.setState({ navOpen: false })
      document.querySelector(".menu-bar-1").style.transform = "rotate(30deg)"
      document.querySelector(".menu-bar-2").style.transform = "rotate(-30deg)"
      document.querySelector(".my-navbar").style.left = "-200px"
    }
  }

  


  render() {
    return (
      <div className="parent">
        <div className='my-navbar'
          style={{backgroundColor: `${ this.props.theme==='light' ? "#202a2f" : "#28414d"}`}}
        >
          <ul>
            <li className='nav-items'> <i className="fa-solid fa-house"></i> <span>Home</span> </li>
            <li className='nav-items'> <i className="fa-solid fa-star"></i> Reviews </li>
            <li className='nav-items'> <i className="fa-solid fa-circle-info"></i> About </li>
            <li className='nav-items'> <i className="fa-solid fa-message"></i> Contact </li>
            <li className='nav-items'> <i className="fa-solid fa-handshake-angle"></i> <span>Help</span> </li>
          </ul>
        </div>

        <div className="menu" onClick={this.toggleNavbar}>
          <div className="menu-bar-1"
            style={{backgroundColor: `${ this.props.theme==='light' ? "#202a2f" : "#acccdd"}`}}
          ></div>
          <div className="menu-bar-2"
            style={{backgroundColor: `${ this.props.theme==='light' ? "#202a2f" : "#acccdd"}`}}
          ></div>
        </div>
      </div>
    )
  }
}

export default Navbar;