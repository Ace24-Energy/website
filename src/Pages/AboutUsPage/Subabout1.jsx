import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Subabout1.css";
import { Energy } from '../../assets';

const Subabout1 = () => {
  return (
    <section className='sub-about-1'>
      <div className="wrapper">
        <Navbar />
        <div className="main-about-sub-wrapper">
            <div className="about-tag"><img src={Energy} alt="Energy-Icon" /><p>About ACE24 ENERGY</p></div>
            <div className="main-about-intro-1"><p>Who We <span>Are</span> </p></div>
            <div className="main-about-intro-2">
             <p>
                About Us At ACE24 ENERGY, we understand the daily frustrations that come with Nigeria's unstable power
                supply — noisy generators, soaring fuel costs, unreliable grid supply, and endless tariff hikes.
             </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Subabout1