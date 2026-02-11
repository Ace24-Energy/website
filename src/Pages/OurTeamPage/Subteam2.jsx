import React from 'react'
import "./Subteam2.css";
import { Crown, Spanner, Headphone } from '../../assets';


const Subteam2 = () => {
  return (
    <section className="sub-team-2">
        <div className="sub-team-2-content-wrapper-text">
            <div className="sub-team-2-contents">
                <div className="sub-team-2-contents-icon">
                    <img src={Crown} alt="Crown-icon" />
                </div>
                <div className="sub-team-2-contents-title">
                    <p>Our Leadership</p>
                </div>
                <div className="sub-team-2-contents-text">
                    <p>
                        Our Leadership Our founders and directors bring years of expertise in energy, technology, 
                        and sustainable development. With a clear vision for Nigeria's energy independence, they 
                        lead ACE24 ENERGY with integrity, innovation, and excellence.
                    </p>
                </div>
            </div>

            <div className="sub-team-2-contents">
                <div className="sub-team-2-contents-icon">
                    <img src={Spanner} alt="Spanner-icon" />
                </div>
                <div className="sub-team-2-contents-title">
                    <p>Our Engineers & Technicians</p>
                </div>
                <div className="sub-team-2-contents-text">
                    <p>
                        The heartbeat of our work. From designing affordable solar solutions systems in Nigeria
                         to installing advanced smart energy monitoring systems, our certified engineers ensure 
                         every project meets global standards while being tailored to Nigerian realities.
                    </p>
                </div>
            </div>

            <div className="sub-team-2-contents">
                <div className="sub-team-2-contents-icon">
                    <img src={Headphone} alt="Headphone-icon" />
                </div>
                <div className="sub-team-2-contents-title">
                    <p>Our Customer Care Experts</p>
                </div>
                <div className="sub-team-2-contents-text">
                    <p>
                        We don't just install and walk away. Our customer service team is always ready to support, 
                        guide, and ensure your system delivers maximum value. We're with you before, during, and 
                        after installation.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subteam2