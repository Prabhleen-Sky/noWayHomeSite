import React, { useState } from 'react'
import './Who.css'

const Who = () => {
  const [countAd, setCount] = useState(0);
  const inCount = () => {
    setCount(countAd + 1);
  };
   
  const decCount = () => {
    if(countAd > 0)
      setCount(countAd-1);
  }

  const [countChild, setCountChild] = useState(0);
  const inCountChild = () => {
    setCountChild(countChild + 1);
  };
   
  const decCountChild = () => {
    if(countChild > 0)
      setCountChild(countChild-1);
  }

  const [countInfant, setCountInfant] = useState(0);
  const inCountInfant = () => {
    setCountInfant(countInfant + 1);
  };
   
  const decCountInfant = () => {
    if(countInfant > 0)
      setCountInfant(countInfant-1);
  }

  const [countPets, setCountPets] = useState(0);
  const inCountPets = () => {
    setCountPets(countPets + 1);
  };
   
  const decCountPets = () => {
    if(countPets > 0)
      setCountPets(countPets-1);
  }

  return (
    <div className='guestSection'>
       <div className="guestEle">
          <div className="left">
            <p style={{marginBottom:'0'}}>Adults</p>
            <span>Ages 13 or above</span>
          </div>
          <div className="right">
            <span><i class="fa-solid fa-circle-minus p-2" onClick={decCount}></i></span>
            <span>{countAd}</span>
            <span><i class="fa-solid fa-circle-plus p-2" onClick={inCount}></i></span>
          </div>
       </div>
       
       <div className="guestEle">
          <div className="left">
            <p style={{marginBottom:'0'}}>Children</p>
            <span>Ages 2-12</span>
          </div>
          <div className="right">
            <span><i class="fa-solid fa-circle-minus p-2" onClick={decCountChild}></i></span>
            <span>{countChild}</span>
            <span><i class="fa-solid fa-circle-plus p-2" onClick={inCountChild}></i></span>
          </div>
       </div>

       <div className="guestEle">
          <div className="left">
            <p style={{marginBottom:'0'}}>Infants</p>
            <span>Under 2</span>
          </div>
          <div className="right">
            <span><i class="fa-solid fa-circle-minus p-2" onClick={decCountInfant}></i></span>
            <span>{countInfant}</span>
            <span><i class="fa-solid fa-circle-plus p-2" onClick={inCountInfant}></i></span>
          </div>
       </div>

       <div className="guestEle">
          <div className="left">
            <p style={{marginBottom:'0'}}>Pets</p>
          </div>
          <div className="right">
            <span><i class="fa-solid fa-circle-minus p-2" onClick={decCountPets}></i></span>
            <span>{countPets}</span>
            <span><i class="fa-solid fa-circle-plus p-2" onClick={inCountPets}></i></span>
          </div>
       </div>

    </div>
  )
}

export default Who