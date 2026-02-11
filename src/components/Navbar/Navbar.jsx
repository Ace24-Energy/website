import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router";
import {Logo, Arrow, Menu, Close} from "../../assets/";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
    <nav>
      <a href="/"><img src={Logo} alt="Brand-Logo" className='brand-logo'/></a>
      <ul className='nav-list'>
        <li><a href="#main-container-3"> Solutions </a></li>
        <li><a href="#testimonials"> Testimonials </a></li>
        <li><a href="#Faq-section"> FAQ </a></li>
        <li><Link to="/AboutUs"> About Us </Link></li>
        <li><Link to="/Ourteam"> Our Team </Link></li>
      </ul>
      <a href="#target-contact"><button className='nav-button'><p>Contact Us</p> <img src={Arrow} alt="Arrow-Right" /></button></a>
      <div onClick={() => setIsActive(true)} className='menu-icon'><img src={Menu} alt="Menu-Icon" /></div>
    </nav>

    <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
      <div onClick={() => setIsActive(false)} className="close-icon">
        <img src={Close} alt="Close-icon" />
      </div>
       <ul className='menu-items'>
        <li><a href="#target-mobile-solutions" onClick={() => setIsActive(false)}> Solutions </a></li>
        <li><a href="#target-mobile-reviews" onClick={() => setIsActive(false)}> Testimonials </a></li>
        <li><a href="#target-mobile-faqs" onClick={() => setIsActive(false)}> FAQ </a></li>
        <li><a href="#contactus-section" onClick={() => setIsActive(false)}> Contact Us </a></li>
        <li><a href="/AboutUs" onClick={() => setIsActive(false)}> About Us </a></li>
        <li><a href="/Ourteam" onClick={() => setIsActive(false)}>  Our Team </a></li>
      </ul>
    </div>
  </>
  )
}

export default Navbar