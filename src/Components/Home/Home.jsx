import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Header_1 from '../Header_1/Header_1'
import ShowMap from '../ShowMap/ShowMap';
import Footer_1 from '../Footer_1/Footer_1';
import Search from '../Search/Search';
import MainContent from '../MainContent/MainContent';
import Loading from '../Loading/Loading';
import ReviewContainer from '../ReviewContainer/ReviewContainer';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showHeader : true,
      isNavOpen: false,
      isLoading: true
    }
   }




  //  header 1
  handleHeaderClick = () => {
    this.setState({showHeader: false});
  }
  handleSearchClick = () => {
    this.setState({showHeader: true});
  }


  // go to top btn
  goToTop = () => {
    window.scrollTo(0, 0);
  }



  render() {

    const isHeader = this.state.showHeader;
    let data;
    if(isHeader){
      data = <Header_1
        theme={this.state.theme} clicked={this.handleHeaderClick}
        style={{
          color: `${this.props.theme==='light' ? "black" : "white"}`,
          backgroundColor: `${this.props.theme==='light' ? "red" : "black"}`
        }}
      />
    } else {
      data = <Search
        theme={this.state.theme} clicked={this.handleSearchClick}
        style={{
          color: `${this.props.theme==='light' ? "black" : "black"}`,
          backgroundColor: `${this.props.theme==='light' ? "#acccdd" : "black"}`
        }}
      />
    }


  return (

        <div className="website"
          style={{
            backgroundColor: `${this.props.theme==='light' ? "#d5e6f0" : "#17242B"}`
          }}
        >

          <Loading
            isLoading={this.state.isLoading}
            theme={this.props.theme}
          />

          <Navbar theme={this.props.theme} isNavOpen={this.state.isNavOpen} />

          {/* header 1 */}
          <div className="header-1">
            {data}
          </div>


          <div className="main-content-container">
            <MainContent theme={this.props.theme} />
          </div>


          <div className="reviews-container">
            <ReviewContainer theme={this.props.theme} />
          </div>
          
          
          <Footer_1 theme={this.props.theme} />


          <ShowMap />


          <div className="go-to-top"
            onClick={this.goToTop}
            style={{
              backgroundColor: `${this.props.theme==='light' ? "black" : "white"}`,
              color: `${this.props.theme==='light' ? "white" : "black"}`
            }}
          >
            <i className="fa-solid fa-angle-up"></i>
          </div>
          
        </div>
  );
  }
}

export default Home;
