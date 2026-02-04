import React from 'react';
import "./AboutUs1.css";
import { AboutUs1Image, Container2 } from "../../assets/";

const AboutUs1 = () => {
  return (
    <>
      <section className='wrapper' id='main-container-1'>
        <div className='intro-1-wrapper'><p className='intro-1'> Who we <span>are</span> </p></div>
        <div className="container">
          <img src={AboutUs1Image} alt="AboutUs1Image" />
          <div className="sub-container-1">
            <div className="text-container-1">
              <p className='text-1'>
                Ace 24 Energy Limited was founded with a clear purpose: 
                to solve Africa's energy challenges through accessible, 
                high-quality clean energy solutions.
              </p>
              <p className='text-1'>
                We serve individuals, small businesses, and large enterprises
                with end-to-end energy services — from system design and installation
                to financing, maintenance, and recycling.
              </p>
            </div>
            <div className="text-container-2">
              <p className='text-2'>
                Our operations are guided by Sustainable Development Goal 7
                (Affordable and Clean Energy), ensuring that clean energy is not 
                just available, but truly accessible.
              </p>
            </div>
          </div>
        </div>
        .
      </section>

      {/* MOBILE VIEW */}
      <section className='mobile-main-container-1' id='target-mobile-about-us'>
        <div className="mobile-intro-1-wrapper"><p>Who we are</p></div>
        <div className="mobile-wrapper-1">
          <div className="mobile-sub-container-1">
            <img src={Container2} alt="mobile-brand-image" />
            <p className='mobile-brand-text-1'>Ace 24 Energy Limited was founded with a clear purpose: to solve Africa’s energy challenges through accessible, high-quality clean energy solutions.</p>
            <p className='mobile-brand-text-2'>We serve individuals, small businesses, and large enterprises with end-to-end energy services — from system design and installation to financing, maintenance, and recycling.</p>
            <div className="mobile-main-1-text">
              <p>Our operations are guided by Sustainable Development Goal 7 (Affordable and Clean Energy), ensuring that clean energy is not just available, but truly accessible.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs1