import React from 'react'
import "./Subabout3.css";
import { Blureffect1, Blureffect2, Checklist } from '../../assets';


const Subabout3 = () => {
  return (
    <section className='sub-about-3'>
        <div className="main-about-sub-wrapper-3">
            <div className="sub-about-3-content-1">
                <div className="sub-about-3-content-1-title"><p>That's why we are <span>here.</span></p></div>
                <div className="sub-about-3-content-1-subtitle">
                    <p>
                      We exist to give Nigerians and businesses across Africa reliable, affordable, and clean energy solutions that bring peace of mind,
                      reduce costs, and power everyday life without compromise. 
                    </p>
                </div>
                <div className="sub-about-3-content-1-text-1">
                    <p>
                      We are not just another renewable company. We are a team of passionate innovators, 
                      engineers, and problem-solvers providing:
                    </p>
                </div>
                <div className="sub-about-3-content-1-text-2">
                    <div className="sub-about-3-content-1-text-2-content">
                        <img src={Checklist} alt="Checklist" />
                        <p>Holistic energy consultation</p>
                    </div>
                    <div className="sub-about-3-content-1-text-2-content">
                        <img src={Checklist} alt="Checklist" />
                        <p>Affordable solar solutions in Nigeria</p>
                    </div>
                    <div className="sub-about-3-content-1-text-2-content">
                        <img src={Checklist} alt="Checklist" />
                        <p>Smart energy monitoring systems</p>
                    </div>
                    <div className="sub-about-3-content-1-text-2-content">
                        <img src={Checklist} alt="Checklist" />
                        <p>Energy financing solutions</p>
                    </div>
                </div>
                <div className="sub-about-3-content-1-text-3">
                    <p>
                        ACE24 ENERGY is committed to making renewable power simple 
                        and accessible for every household, business, and community.
                    </p>
                </div>
            </div>
            <div className="sub-about-3-content-2">
                <img className="blur-1" src={Blureffect1} alt="Blureffect1" />
                <div className='sub-about-3-content-2-box-container'>
                    <div className="sub-about-3-content-2-box-1">
                        <div className="sub-about-3-content-2-box-1-container">
                            <div className="number-tag"> <p>24</p> </div>
                            <div className="text-tag"><p className="text-tag-1">Hours</p><p className="text-tag-2">Reliable Power</p></div>
                        </div>
                      <hr />
                    </div>
                    
                     <div className="sub-about-3-content-2-box-2">
                        <div className="percent-tag">
                            <p className="percent-tag-text-1">
                                500+
                            </p>
                            <p className="percent-tag-text-2">
                                Projects Completed
                            </p>
                        </div>
                        <div className="percent-tag">
                            <p className="percent-tag-text-1">
                                98%
                            </p>
                            <p className="percent-tag-text-2">
                                Client Satisfaction
                            </p>
                        </div>
                    </div>
                    
                     <div className="sub-about-3-content-2-box-3">
                       <hr/> 
                        <div className="empower-tag">
                            <p>"Powering lives and futures across Africa"</p>
                        </div>
                    </div>
                </div>
                <img className="blur-2" src={Blureffect2} alt="Blureffect2" />
            </div>
        </div>
    </section>
  )
}

export default Subabout3