import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardExpand: false,
      like: false
    }
  }


  // expandCard = () => {
  //   if (this.state.cardExpand === false) {
  //     this.setState({ cardExpand: true })
  //   }  else {
  //     this.setState({ cardExpand: false })
  //   }
  // }


  likeHotel = () => {
    if (this.state.like === false) {
      this.setState({ like: true })
    } else {
      this.setState({ like: false })
    }
  }





  render() {
    return(
      <>
      <div className="card"
        // onClick={this.expandCard}
        style={{
          width: "20rem",
          color: `${ this.props.theme==='light' ? "#000" : "#fff"}`,
          backgroundColor: `${ this.props.theme==='light' ? "#fff" : "#243138"}`
        }}
        >
        <img className="card-img-top" src={this.props.imageURL} alt="hotel-img" />
        <div className="card-body">
              <h6 className="card-title"> {this.props.name} </h6>
              <p className='card-text location'
                style={{
                  color: `${ this.props.theme==='light' ? "#000" : "#fff"}`
                }}
              > {this.props.location} </p>
              <span className="card-text distance"
                style={{
                  color: `${ this.props.theme==='light' ? "#000" : "#fff"}`
                }}
              > {this.props.distance} kilometers </span> <br />
              <span className="card-text"
                style={{
                  color: `${ this.props.theme==='light' ? "#000" : "#fff"}`
                }}
              > ₹{this.props.price} <span className='price'
                style={{
                  color: `${ this.props.theme==='light' ? "#000" : "#fff"}`
                }}
              > night </span> </span>
              <div className='rating' style={{marginBottom:"2px"}}>
                <i className='fa-solid fa-star'></i>
                <span> {this.props.rating} </span>
              </div>
              <div className="like" onClick={this.likeHotel}>
                <i className='fa-solid fa-heart'
                  style={{
                    color: `${ this.state.like ? "rgb(230, 11, 11)" : "rgba(18, 18, 18, 0.715)" }`
                  }}
                ></i>
              </div>
        </div>
      </div>
      </>
    )
  }
}

export default Card;