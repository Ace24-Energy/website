import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import {Container, Googleplay, Worksite, Aboutpageimg1} from "../../assets/";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className='wrapper' id='header-align'>
        <Navbar />
        <div className="cta-wrapper">
          <div className="cta">
          <div className="sub-wrapper"> 
            <p className='intro-text'>Reliable, Affordable <p><span>Clean Energy</span> for Homes</p> & Businesses.</p>
            <p className='sub-intro-text'>Ace 24 Energy Limited is a clean energy solutions company 
              delivering solar solutions, energy financing, EV mobility 
              and digital energy management across Nigeria. We make access 
              to realiable power simple, flexible, and sustainable.
            </p>
            <div className="app-buttons">
              <Link to="/Playstore">
                <button className='google-play-button'>
                  <img src={Googleplay} alt="google-play" /> 
                  <div className="button-text">
                    <p className='first-text'>GET IT ON</p> 
                    <p className='second-text'>Google Play</p>
                  </div>  
                </button>
              </Link> 
              <a href="https://wa.me/+2347043030570" target='_blank'><button className='whatsapp-button'><p>DM us on Whatsapp</p></button></a> 
            </div>
          </div>
          <img className= "brand-image-1" src={Container} alt="Brand-image-1" />
        </div>
        </div>
        <img className= "brand-image-1-2" src={Aboutpageimg1} alt="Worksite-image" />
      </div>
    </header>
  )
}

export default Header