import React from 'react'
import banner from '../../images/owldalf.png'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <img src={banner} alt="bg" className='home-banner'/>
        <div className='home-content'>
            <p className='title'>"You shall not pass" without authentication</p>
            <span className='subtitle'>Unless you defeat Owldalf by</span>
        </div>
        <div className='btns-container'>
            <button className='btn-signup'>Signing Up for Free</button>
            <button className='btn-signin'>Signing In</button>
        </div>
    </div>
  )
}

export default HomePage
