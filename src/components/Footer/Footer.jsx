import React from 'react';
import "./Footer.css";
import {Logo2} from "../../assets/";


const Footer = () => {
  return (
    <footer>
      <div className="wrapper" id="footer-container">
        <div className="footer-logo">
          <img src={Logo2} alt="Brand-Logo" />
        </div>
        <div className="footer-text">
          <ul>
            <li><p>Pages</p></li>
            <li><a href="#">Home</a></li>
            <li><a href="#main-container-1">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
          <ul>
            <li><p>Admin</p></li>
            <li><a href="#target-contact">Support</a></li>
            <li><a href="#target-contact">Contact Us</a></li>
          </ul>
          <ul>
            <li><p>Social</p></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2026 ACE24 Energy Limited. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer