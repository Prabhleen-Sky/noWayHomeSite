import React, { Component } from 'react'
import './Review.css'

class Review extends Component {
    render() {
        return (
            <div className='review'>
                <div className="card"
                    style={{
                        color: `${ this.props.theme==='light' ? "#000" : "#fff"}`,
                        backgroundColor: `${ this.props.theme==='light' ? "white" : "#181e22" }`
                    }}
                >
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p> {this.props.review} </p>
                            <div className='star-container'>
                                <i className='fa-solid fa-star'></i>
                                <span className='review-rating'>{this.props.rating}</span>
                            </div>
                            <footer className="blockquote-footer"><cite title="Source Title">{this.props.src}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Review