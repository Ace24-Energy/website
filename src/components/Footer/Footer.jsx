import React from 'react';
import "./Footer.css";
import {NewLogo} from "../../assets/";
import { Link } from "react-router";
import { useNavigate } from "react-router";



const Footer = () => {

    // ABOUT NAVIGATION
  const navigateabout = useNavigate();
  const goToabout = () => {
    navigateabout("/AboutUs");

    setTimeout(() => {
      document
        .getElementById("target-sub-about-1")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    };

  // TESTIMONIAL NAVIGATION
  const navigatereviews = useNavigate();
  const goToreviews = () => {
    navigatereviews("/");

    setTimeout(() => {
      document
        .getElementById("testimonials")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    };

  // CONTACT US NAVIGATION
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("contactus-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    };

  return (
    <>
      <footer>
        <div className="wrapper" id="footer-container">
          <div className="footer-logo">
            <a href="/"><img src={NewLogo} alt="Brand-Logo" /></a>
          </div>
          <div className="footer-text">
            <ul>
              <li><p>Pages</p></li>
              <li><a href="/">Home</a></li>
              <li>
                <a onClick={goToabout}>
                  About Us
                </a>
              </li>
              <li><a onClick={goToreviews}>Testimonials</a></li>
            </ul>
            <ul>
              <li><p>Admin</p></li>
              <li><a onClick={goToContact}>Support</a></li>
              <li><a onClick={goToContact}>Contact Us</a></li>
            </ul>
            <ul>
              <li><p>Social</p></li>
              <li>
                <a href="https://www.instagram.com/ace24energy" target='_blank'>
                    Instagram
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/ace24energy" target='_blank'>
                    Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ace24energy" target='_blank'>
                    Linkedin
                </a>
              </li>
              <li>
                <a href="https://wa.me/+2347043030570" target='_blank'>
                    Whatsapp
                </a>
              </li>
              <li>
                <a href="https://x.com/ace24energy" target='_blank'>
                    X
                </a>
              </li>
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
              <li><a href="/">Home</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="#">Products</a></li>
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