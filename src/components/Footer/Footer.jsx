import React from 'react';
import "./Footer.css";
import {Logo} from "../../assets/";


const Footer = () => {
  return (
    <footer>
      <div className="wrapper" id="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Brand-Logo" />
        </div>
        <div className="footer-text">
          <ul>
            <li><p>Pages</p></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
          <ul>
            <li><p>Admin</p></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact Us</a></li>
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
        <p>This website is designed by Precise code © 2026 || egboprecizze@gmail.com +234 906 595 8172</p>
      </div>
    </footer>
  )
}

export default Footer