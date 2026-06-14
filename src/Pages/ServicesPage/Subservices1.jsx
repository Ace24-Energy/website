import React from 'react'
import "./Subservices1.css";
import Navbar from '../../components/Navbar/Navbar';
import { Serviceicon1, Serviceicon2, Serviceicon3 } from '../../assets';

const Subservices1 = () => {
  return (
    <section className="sub-service-1">
        <div className="sub-service-1-content">
            <div className="sub-service-1-navbar-wrapper wrapper">
                <Navbar/>
            </div>
            <div className="sub-service-1-content-wrapper">
                <div className="sub-service-1-content-1">
                    <div className="sub-service-1-content-1-title">
                        <p>OUR SERVICES</p>
                    </div>
                    <div className="sub-service-1-content-1-text-1">
                        <p>A full range of energy solutions, in one place.</p>
                    </div>
                    <div className="sub-service-1-content-1-text-2">
                        <p>
                            At ACE24 ENERGY, we deliver energy solutions designed for Nigerian 
                            realities and global sustainability goals — built around
                            affordability, sustainability, and customer convenience.
                        </p>
                    </div>
                </div>
                <div className="sub-service-1-content-2">
                    <div className="sub-service-1-content-2-box">
                        <img src={Serviceicon1} alt="Serviceicon1" />
                        <div className="sub-service-1-content-2-sub-box">
                                <p className='sub-service-1-content-2-title'>10+</p>
                                <p className='sub-service-1-content-2-text'>Trusted Partner DisCos</p>
                        </div>
                    </div>
                    <div className="sub-service-1-content-2-box">
                        <img src={Serviceicon2} alt="Serviceicon2" />
                        <div className="sub-service-1-content-2-sub-box">
                                <p className='sub-service-1-content-2-title'>24/7</p>
                                <p className='sub-service-1-content-2-text'>Customer support</p>
                        </div>
                    </div>
                    <div className="sub-service-1-content-2-box">
                        <img src={Serviceicon3} alt="Serviceicon3" />
                        <div className="sub-service-1-content-2-sub-box">
                                <p className='sub-service-1-content-2-title'>UN SDG 7</p>
                                <p className='sub-service-1-content-2-text'>Aligned with</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subservices1