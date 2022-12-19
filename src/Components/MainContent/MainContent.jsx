import React, { Component } from 'react'
import './MainContent.css'
import Card from '../Card/Card';
import Header_2 from '../Header_2/Header_2';
import hotel_api from '../../hotel_api'

class MainContent extends Component {

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>

        <Header_2
          theme={this.props.theme}
        />

        <div className='main-content'>
          
          {
            hotel_api.map(card => {
              return <Card
                key = {card.id}
                imageURL = {card.image}
                name = {card.name}
                location = {card.location}
                rating = {card.rating}
                distance = {card.distance}
                price = {card.price}
                theme = {this.props.theme}
              />
            })
          }
        </div>

      </div>
    )
  }
}

export default MainContent;