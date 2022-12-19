import React, { Component } from 'react'
import Footer_2 from '../Footer_2/Footer_2'
import './Footer_1.css'

class Footer_1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFooterOpen: false,
      footerIcon: "angle-up"
    }
  }


  openFooter = () => {
    if (this.state.isFooterOpen === false) {
      this.setState({
        isFooterOpen: true,
        footerIcon: "xmark"
      })
    }
    else {
      this.setState({
        isFooterOpen: false,
        footerIcon: "angle-up"
      })
    }
  }
 

  

  render() {
    return (

      <>
      <Footer_2
        isFooterOpen={this.state.isFooterOpen}
        theme={this.props.theme}
      />

      <div className="footer-one">
        <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
          <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
              <span>
                © 2022 No Way Home, Inc
              </span>
              <div id="angle-icon" onClick={this.openFooter}>
                <i className={`fa-solid fa-${this.state.footerIcon}`}></i>
              </div>
          </div>
        </footer>
      </div>
      </>

    )
  }
}

export default Footer_1;