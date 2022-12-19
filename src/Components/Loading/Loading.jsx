import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: this.props.isLoading
        }
    }

    changeLoadingState = () => {
        if (this.state.isLoading === true) {
            this.setState({ isLoading: false })
        }
    }




    render() {

        // loading bar animation
        setTimeout(() => {
            let i = 0;
            if (i == 0) {
                i = 1;
                let elem = document.querySelector(".loader");
                let width = 1;
                let id = setInterval(frame, 16);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
        }, 2000)
        // loading quotes animation
        setTimeout(() => {
            const items = document.querySelectorAll(".loading-quotes");
            for (let i=0; i<items.length; i++) {
                items[i].style.transform = "translateY(-3px)"
                items[i].style.opacity = "0"
            }
        }, 2500);
        
        // loading dots animation
        setTimeout(() => {
            document.querySelector(".loading-dots").style.opacity = "0"
        }, 3000);
        setTimeout(() => {
            document.querySelector(".dot1").style.transform = "translateY(-3px)"
            document.querySelector(".dot1").style.opacity = "0"
        }, 3300);
        setTimeout(() => {
            document.querySelector(".dot1").style.transform = "translateY(-3px)"
            document.querySelector(".dot1").style.opacity = "0"
        }, 3600);
        setTimeout(() => {
            document.querySelector(".dot1").style.transform = "translateY(-3px)"
            document.querySelector(".dot1").style.opacity = "0"
        }, 3900);
        // "loading" text animation
        setTimeout(() => {
            document.querySelector(".loading-h1 h1").textContent = "Ready!"
            document.querySelector(".loading-h1 h1").style.color = "white"
            document.querySelector(".loading-h1 h1").style.textShadow = "0 0 5px #fff"
            document.querySelector(".loading-h1 h1").style.animation = "none"
            document.querySelector(".loading").style.backgroundColor = "black"
        }, 4000);
        // show continue popup
        setTimeout(() => {
            document.querySelector('#continue').style.opacity = "1"
        }, 4300);
        setTimeout(() => {
            document.querySelector('.loader-container').style.display = "none";
        }, 5000);
        // hide continue popup
        setTimeout(() => {
            document.querySelector('#continue').style.opacity = "0"
            document.querySelector('#continue').style.visibility = "hidden"
        }, 8000);
        




    return (
        <div className='loading'
            onClick={this.changeLoadingState}
            style={{
                top: `${ this.state.isLoading===true ? '0' : "-100%" }`,
            }}
        >
            <div className='loading-text'>
                <div className="loading-animation">
                    <div className="loading-h1">
                        <h1>Loading</h1>
                    </div>
                    <div className="loading-dots">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                        <div className="dot3"></div>
                    </div>
                </div>
            </div>



            <div className="loading-quotes-container">
                <p className='loading-quotes'>Travelling is a therapy</p>
                <p className='loading-quotes'>Work. Travel. Save. Repeat</p>
                <p className='loading-quotes'>Let's get lost</p>
                <p className='loading-quotes'>Oh, the places you'll go.</p>
                <p className='loading-quotes'>Where to next?</p>
                <p className='loading-quotes'>To Travel is to Live</p>
                <p className='loading-quotes'>Make memories all over the world</p>
                <p className='loading-quotes'>Go where you feel most alive</p>
            </div>


            <div id="continue">
                <p>(Click anywhere to continue)</p>
            </div>


            <div className="loader-container">
                <div className="loader"></div>
            </div>
        </div>
    )
  }
}

export default Loading