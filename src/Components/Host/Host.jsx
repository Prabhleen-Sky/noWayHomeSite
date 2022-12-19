import React from 'react'
import './Host.css'
import backgroundVideo from '../../assets/video/vdo.mp4'
import { Link } from 'react-router-dom'  


const Host = () => {
  return (
            <div className='host'>
                <div className="host-nav d-flex justify-content-between m-2">
                    <div className="host-left">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src={require("../../assets/logo.png")} alt="hostlogo"  
                        style={{
                            width: '60px',
                            position: "absolute",
                            marginTop: "0%",
                            transition: "all ease-in-out .1s"
                            }}/>
                    </Link>
                    </div>
                    <div className="host-right d-flex justify-content-around">
                    <div className="host-right-ele m-3">
                        <i className="fa-solid fa-globe p-1"></i>
                        <span>English(IN)</span>
                    </div>
                    <div className="host-right-ele m-3">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        <span>INR</span>
                    </div>
                    <div className="host-right-ele m-3"><span>Become a Host</span></div>
                    </div>
                </div>

            <div className="host-header mt-4">
                <p className='m-4 p-4'>Host an experience on NoWayHome</p>
                <h1 className='host-animated-text'>
                    Earn money leading people on activities you love
                </h1> 
                <div className='btn btn-dark' style={{margin:'5%', marginTop:'2%'}}>
                    Let's go
                </div>
            </div>

            <div className="host-video">
                <video muted autoPlay={"autoplay"}
                    loop>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>

            <div className='host-content p-5 mt-0'>
                    <h3>What's an experience?</h3>
                    <p>It’s an activity that goes beyond the typical tour or class, designed and led by locals all over the world. Show off your city, craft, cause, or culture by hosting an experience.
                </p>

                <div className="host-content-child">
                    <div className="content1 d-flex justify-content-center m-4">
                        <div className="contentLeft p-4" style={{width:'30%'}}>
                            <img src={require("../../assets/host1.png")}  style={{width:'100%'}} />
                        </div>
                        <div className="contentRight p-4" style={{width:'20%', marginTop:'13%'}}>
                            <h2>Get voices for your cause</h2>
                            <p style={{marginLeft:'2%'}}>Lead a hike with rescue dogs, or teach ethical fashion. Raise awareness of your cause in a whole new way.</p>
                        </div>
                    </div>
                    <div className="content2 d-flex justify-content-center m-4">
                        <div className="contentLeft p-4" style={{width:'20%', marginTop:'13%'}}>
                                <h2 style={{marginRight:'10%'}}>Create an activity, your way</h2>
                                <p>Food tour by bike, light photography at night, tapas on a boat, or yoga (with goats). Create and curate a unique activity people want to try.</p>
                            </div>
                            <div className="contentRight p-4" style={{width:'30%'}}>
                            <img src={require("../../assets/host2.png")}  style={{width:'100%'}} />
                            </div>
                    </div>
                    <div className="content3 d-flex justify-content-center m-4">
                        <div className="contentLeft p-4" style={{width:'30%'}}>
                            <img src={require("../../assets/host3.png")}  style={{width:'100%'}} />
                        </div>
                        <div className="contentRight p-4" style={{width:'20%', marginTop:'13%'}}>
                            <h2>Get voices for your cause</h2>
                            <p style={{marginLeft:'2%'}}>Lead a hike with rescue dogs, or teach ethical fashion. Raise awareness of your cause in a whole new way.</p>
                        </div>
                    </div>
                    
                </div>

                </div>

            </div>
  )
}

export default Host;