import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router";
import {Logo, Arrow, Menu, Close} from "../../assets/";
import { useNavigate } from "react-router";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  // CONTACT US BUTTON NAVIGATION
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("contactus-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    };

// TESTIMONIAL NAVIGATION
const navigatetestimonial = useNavigate();
const goTotestimonial = () => {
  navigatetestimonial("/");

  setTimeout(() => {
    document
      .getElementById("testimonials")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
  };

  // MOBILE TESTIMONIAL NAVIGATION
const navigatemobiletestimonial = useNavigate();
const goTomobiletestimonial = () => {
  navigatemobiletestimonial("/");

  setTimeout(() => {
    document
      .getElementById("target-mobile-reviews")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
  };

  // FAQ NAVIGATION
  const navigatefaq = useNavigate();
  const goToFaq = () => {
    navigatefaq("/");

    setTimeout(() => {
      document
        .getElementById("Faq-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    };
  
  return (
    <>
    <nav>
      <a href="/"><img src={Logo} alt="Brand-Logo" className='brand-logo'/></a>
      <ul className='nav-list'>
        <li><Link to="/AboutUs"> About Us </Link></li>        
        <li><Link to="/Ourteam"> Our Team </Link></li>
        <li><Link to="/Services"> Solutions </Link></li>
        <li>
          <a onClick={goTotestimonial}>
            Testimonials
          </a>
        </li>
        <li>
          <a onClick={goToFaq}>
            FAQ
          </a>
        </li>
      </ul>
      <button className="nav-button" onClick={goToContact}>
        <p>Contact Us</p>
        <img src={Arrow} alt="Arrow Right" />
      </button>
      <div onClick={() => setIsActive(true)} className='menu-icon'><img src={Menu} alt="Menu-Icon" /></div>
    </nav>


    {/* MOBILE VERSION */}
    <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
      <div onClick={() => setIsActive(false)} className="close-icon">
        <img src={Close} alt="Close-icon" />
      </div>
       <ul className='menu-items'>
        <li><a href="/" onClick={() => setIsActive(false)}> Home </a></li>
        <li><Link to="/AboutUs"> About Us </Link></li>        
        <li><Link to="/Ourteam"> Our Team </Link></li>
        <li><Link to="/Services"> Solutions </Link></li>
        <li><a onClick={goTomobiletestimonial}> Testimonials </a></li>
        <li><a onClick={goToContact}> Contact Us </a></li>
      </ul>
    </div>
  </>
  )
}

export default Navbar