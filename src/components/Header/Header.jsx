import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import {Container, Googleplay} from "../../assets/";
const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar />
        <div className="cta">
          <div className="sub-wrapper"> 
            <p className='intro-text'>Reliable, Affordable <p><span>Clean Energy</span> for Homes</p> & Businesses.</p>
            <p className='sub-intro-text'>Ace 24 Energy Limited is a clean energy solutions company 
              delivering solar solutions, energy financing, EV mobility 
              and digital energy management across Nigeria. We make access 
              to realiable power simple, flexible, and sustainable.
            </p>
            <div className="app-buttons">
              <button className='google-play-button'>
                <img src={Googleplay} alt="google-play" /> 
                <div className="button-text">
                  <p className='first-text'>GET IT ON</p> 
                  <p className='second-text'>Google Play</p>
                </div>  
              </button>
              <button className='whatsapp-button'><p>DM us on Whatsapp</p></button>
            </div>
          </div>
          <img className= "brand-image-1" src={Container} alt="Brand-image-1" />
        </div>
      </div>
    </header>
  )
}

export default Header