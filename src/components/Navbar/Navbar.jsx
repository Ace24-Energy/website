import React, { useState } from 'react';
import "./Navbar.css";
import {Logo, Arrow, Menu, Close} from "../../assets/";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
    <nav>
      <a href="#"><img src={Logo} alt="Brand-Logo" className='brand-logo'/></a>
      <ul className='nav-list'>
        <li><a href="#main-container-1"> About Us </a></li>
        <li><a href="#main-container-3"> Solutions </a></li>
        <li><a href="#testimonials"> Testimonials </a></li>
        <li><a href="#Faq-section"> FAQ </a></li>
      </ul>
      <a href="#target-contact"><button className='nav-button'><p>Contact Us</p> <img src={Arrow} alt="Arrow-Right" /></button></a>
      <div onClick={() => setIsActive(true)} className='menu-icon'><img src={Menu} alt="Menu-Icon" /></div>
    </nav>

    <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
      <div onClick={() => setIsActive(false)} className="close-icon">
        <img src={Close} alt="Close-icon" />
      </div>
       <ul className='menu-items'>
        <li><a href="#main-container-1" onClick={() => setIsActive(false)}> About Us </a></li>
        <li><a href="#main-container-3" onClick={() => setIsActive(false)}> Solutions </a></li>
        <li><a href="#testimonials" onClick={() => setIsActive(false)}> Testimonials </a></li>
        <li><a href="#Faq-section" onClick={() => setIsActive(false)}> FAQ </a></li>
        <li><a href="#target-contact" onClick={() => setIsActive(false)}> Contact Us </a></li>
      </ul>
    </div>
  </>
  )
}

export default Navbar