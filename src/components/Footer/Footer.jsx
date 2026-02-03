import React from 'react';
import "./Footer.css";
import {Logo2} from "../../assets/";


const Footer = () => {
  return (
    <>
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


      {/* MOBILE VIEW */}
      <section className='mobile-footer-container'>
        <div className="mobile-footer-list-content">
          <ul>
              <li><p>Pages</p></li>
              <li><a href="#">Home</a></li>
              <li><a href="#target-metrics">Services</a></li>
              <li><a href="#target-mobile-executed">Products</a></li>
              <li><a href="#target-mobile-faqs">FAQs</a></li>
            </ul>
            <ul>
              <li><p>Admin</p></li>
              <li><a href="#">Solar Systems</a></li>
              <li><a href="#">Inverters</a></li>
              <li><a href="#">Batteries</a></li>
              <li><a href="#">Financing</a></li>
            </ul>
            <ul>
              <li><p>Solutios</p></li>
              <li><a href="#">Solar Systems</a></li>
              <li><a href="#">Inverters</a></li>
              <li><a href="#">Batteries</a></li>
              <li><a href="#">Financing</a></li>
            </ul>
        </div>
        <hr />
        <div className="copyright-box">
          <p>© 2026 ACE24 Energy Limited. All rights reserved</p>
        </div>
      </section>
    </>
  )
}

export default Footer