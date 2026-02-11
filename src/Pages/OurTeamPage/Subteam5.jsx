import React from 'react'
import "./Subteam5.css";
import { Arrow } from '../../assets';

const Subteam5 = () => {
  return (
    <section className="sub-about-5">
      <div className="sub-about-5-content">
        <div className="sub-about-5-content-intro">
          <p>Powering Dreams, Together</p>
        </div>
        <div className="sub-about-5-content-text-1-box">
          <div className="sub-about-5-content-text-1">
            <p>
              When you choose ACE24 ENERGY, you don't just get solar panels — you get a team committed to
              your success. We bring expertise, care, and passion to every project, no matter the size.
            </p>
          </div>
          <div className="sub-about-5-content-text-1">
            <p>
              Our team is always just a tap away — ready to guide, support, and serve you. Download the ACE24
              Mobile App today to connect with us directly and enjoy clean energy solutions at your fingertips.
            </p>
          </div>
        </div>
        <div className="sub-about-5-content-text-2">
          <p>Meet the team that powers your tomorrow.</p>
        </div>
        <button><p>Get In Touch</p><img src={Arrow} alt="Arrow" /></button>
      </div>
    </section>
  )
}

export default Subteam5