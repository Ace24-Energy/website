import React from 'react'
import "./Subservices3.css";
import { ListCheck } from '../../assets';


const Subservices3 = () => {
  return (
    <section className="sub-service-3 wrapper">
        <div className="sub-service-3-content-1">
            <p className='sub-service-3-content-1-title'>WHY ACE</p>
            <h2 className='sub-service-3-content-1-header'>We don't just provide services — we provide <span>peace of mind</span>.</h2>
            <p className='sub-service-3-content-1-text'>
               Every solution we deliver is engineered to reduce cost, raise
               efficiency and keep the lights on — for today and tomorrow.
            </p>
        </div>
        <div className="sub-service-3-content-2">
            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Reduce energy costs </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Increase efficiency </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Uniterrupted power supply </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Sustainable energy for businesses & homes </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Compliant with UN SDG7 </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Affordable & flexible solutions </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Professional, customer-focused service </p>
            </div>

            <div className="sub-service-3-content-2-item">
                <img src={ListCheck} alt="Check-icon" />
                <p>Building a greener future </p>
            </div>
        </div>
    </section>
  )
}

export default Subservices3