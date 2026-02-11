import React from 'react'
import "./Subabout6.css";
import { Arrow } from '../../assets';


const Subabout6 = () => {
  return (
    <section className="sub-about-6">
        <div className="sub-about-6-wrapper">
            <div className="sub-about-6-title-box">
                <div className="sub-about-6-title-box-text-1"><p>Our Commitment</p></div>
                <div className="sub-about-6-title-box-text-2"><p>Every project we deliver is a step toward a cleaner Nigeria and a stronger Africa.</p></div>
            </div>
            <div className="sub-about-text-6">
                <p>
                    By choosing ACE24 ENERGY, you're not just investing in solar panels — you're investing in a
                    <span>sustainable future for generations to come.
                    Get Started Today</span> 
                </p>
            </div>
            <button> <p> Get Started Today</p> <img src={Arrow} alt="Arrow-icon" /></button>
        </div>
    </section>
  )
}

export default Subabout6