import React from 'react'
import "./Subteam1.css";
import Navbar from '../../components/Navbar/Navbar';
import { Ourteamimg1, Ourteamicon1 } from '../../assets';

const Subteam1 = () => {
  return (
    <section className="sub-team-1">
        <div className="wrapper">
            <Navbar />
            <div className="sub-team-1-content-wrapper">
                <div className="sub-team-1-content-wrapper-text">
                    <div className="sub-team-1-content-wrapper-text-intro-tag"><img src={Ourteamicon1} alt="Ourteamicon1" /><p>Our Team</p></div>
                    <div className="sub-team-1-content-wrapper-text-intro"><p>Meet the <span>ACE24 ENERGY </span> Team</p></div>
                    <div className="sub-team-1-content-wrapper-text-intro-text">
                        <div className="sub-team-1-content-wrapper-text-intro-text-1">
                            <p>
                                At ACE24 ENERGY, we believe great people drive great solutions. Our strength 
                                lies not only in the solar panels we install but in the dedicated team working 
                                tirelessly to bring reliable energy solutions in Nigeria to life.
                            </p>
                        </div>
                        <div className="sub-team-1-content-wrapper-text-intro-text-2">
                            <p>
                                We are a group of innovators, engineers, project managers, and customer service 
                                experts passionate about one goal: powering your world with clean, affordable, 
                                and sustainable energy.
                            </p>
                        </div>  
                    </div>
                </div>
                <div className="sub-team-1-content-wrapper-image">
                    <img src={Ourteamimg1} alt="Ourteamimg1" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subteam1