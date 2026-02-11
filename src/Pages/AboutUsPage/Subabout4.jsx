import React from 'react'
import "./Subabout4.css";
import { Mission, Vision } from '../../assets';



const Subabout4 = () => {
  return (
    <div className="sub-about-4">
        <div className="sub-about-4-content">
            <div className="sub-about-4-content-box">
                <div className="sub-about-4-content-box-icon">
                    <img src={Mission} alt="Mission-icon" />
                </div>
                <div className="sub-about-4-content-box-title">
                    <p>Our Mission</p>
                </div>
                <div className="sub-about-4-content-box-text">
                    <p>
                    To revolutionize energy solutions and services in Nigeria by 
                    offering seamless, innovative, cost-effective, and reliable access 
                    to sustainable energy products that improve lives and empower 
                    businesses.
                    </p>
                </div>
            </div>
            <div className="sub-about-4-content-box">
                <div className="sub-about-4-content-box-icon">
                    <img src={Vision} alt="Vision-icon" />
                </div>
                <div className="sub-about-4-content-box-title">
                    <p>Our Vision</p>
                </div>
                <div className="sub-about-4-content-box-text">
                    <p>
                    To be the foremost provider of clean, efficient and innovative 
                    energy solutions across Africa and beyond.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subabout4