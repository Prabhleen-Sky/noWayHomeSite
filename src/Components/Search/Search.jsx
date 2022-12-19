import React, { Component } from 'react'
import './Search.css';
import './SearchRegion';
import SearchRegion from './SearchRegion';
import CalendarSearch from './CalendarSearch';
import Who from './Who'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWhere : true,
      showCalender : false,
      showGuest : false,
    }
   }
   
   handleWhereClick = () => {
    this.setState({showWho:true});
    this.setState({showGuest:false});
    this.setState({showCalender:false});
  }

   handleCheckClick = () => {
    this.setState({showWho:false});
    this.setState({showGuest:false});
    this.setState({showCalender:true});
  }


  handleWhoClick = () => {
    this.setState({showWho:false});
    this.setState({showGuest:true});
    this.setState({showCalender:false});
  }



  render(){

    const bottomBorder = {borderBottom:'2px solid black', paddingBottom:'1%'}
    const checkBg = { backgroundColor: 'white',borderRadius: '45px',width: '64%',height: '5.25em',margin: '-15px', marginLeft: '-62px',  textAlign: 'center',paddingTop: '4.5%',cursor:'pointer'}
    const whoBg = {backgroundColor: 'white',borderRadius: '45px',height: '5.4em',width: '63%',margin: '-16px',marginRight: '-72px',
    textAlign: 'center',paddingTop: '1.5%',paddingLeft: '1.5%'}
    const whereBg = {backgroundColor: 'white',borderRadius: '45px',width: '26%',height: '5.3em',margin: '-16px',marginLeft: '-56px',textAlign: 'center',paddingTop: '1.5%'}

    const isWhere = this.state.showWhere;
    const isChecked = this.state.showCalender;
    const isGuest = this.state.showGuest;


    let data = <SearchRegion/>;
    if(!isChecked && !isGuest && isWhere){
      data = <SearchRegion/>;
    }else if((isGuest && !isChecked) || (isGuest && !isWhere)){
      data = <Who/>;
      document.querySelector('.bgWhite').style = 'background:transparent';
      document.querySelector('.right').style='border-bottom:2px solid black';
      document.querySelector('.checkIn').style='border:none';
      document.querySelector('.checkOut').style='border:none';

    }else{
      data = <CalendarSearch/>;
      document.querySelector('.checkIn').style='border-bottom:2px solid black';
      document.querySelector('.checkOut').style='border-bottom:2px solid black';
      document.querySelector('.bgWhite').style = 'background:transparent';
      document.querySelector('.right').style='border:none';
    }

    
    return (
     <div className='searchSection mt-0'>
         <div className="logo">
           <img src={require("../../assets/logo.png")} alt='logoimage'
            style={{
              width: '60px',
              position: "absolute",
              marginTop: "1.9%",
              marginLeft: "4%",
              transition: "all ease-in-out .1s"
            }}
          />
         </div>

        <div className="searchSectionHead d-flex justify-content-around w-75 mx-auto mt-4">
           <p className='font' style={bottomBorder}>Stays</p>
           <p className='font'>Experiences</p>
           <p className='font'>Online Experiences</p>
        </div>

        <div className="searchSectionContent d-flex justify-content-around mx-auto w-75 mt-4 p-2 pt-3">
          <div className="left bgWhite" style={{cursor:'pointer'}} onClick={this.handleWhereClick}>
             <span>Where</span><br></br>
             <input type="text" placeholder='Search destinations' style={{border:'none',outline:'none',background:'transparent',textAlign:'center'}}/>
          </div>

          <div className="center d-flex justify-content-between pl-4 w-25">
            <div className='checkIn check' onClick={this.handleCheckClick} style={{cursor:'pointer'}}>
                <p>Check in</p>
                <p className='fontLight'>Add dates</p>
            </div>
            <div className='checkOut check' style={{cursor:'pointer'}} onClick={this.handleCheckClick}>
                <p>Check out</p>
                <p  className='fontLight'>Add dates</p>
            </div>
          </div>

          <div className="right d-flex justify-content-between w-25" style={{cursor:'pointer'}} onClick={this.handleWhoClick}>
            <div className='who'>
              <p>Who</p>
              <p  className='fontLight'>Add guests</p>
            </div>
            <div className='btn btn-danger p-2 h-75 mt-1 mx-auto' onClick={this.props.clicked}>
              <i class="fa fa-search searchIcon"></i>
              <span className='p-2'>Search</span>
            </div>
          </div>

        </div>

        {data}
     </div>
    )
  }
}

export default Search;