import React from 'react'
import "./Subteam3.css";
import { Checklist } from '../../assets';

const Subteam3 = () => {
  return (
    <section className="sub-team-3">
        <div className="sub-team-3-content-wrapper">
            <div className="sub-team-3-content-1">
                <div className="sub-team-3-content-1-intro">
                    <p>Our Impact-Driven <span>Approach</span> </p>
                </div>
                <div className="sub-team-3-content-1-text">
                    <p>
                        Our people are more than staff they are energy ambassadors. 
                        Each project we deliver contributes to reducing Nigeria's 
                        reliance on unstable grids and costly generators, driving us 
                        closer to a sustainable energy future for businesses and families alike.
                    </p>
                </div>    
            </div>
            <div className="sub-team-3-content-2">
                <div className="sub-team-3-content-2-intro"><p>What Makes Our Team Different?</p></div>
                <div className="sub-team-3-content-2-text-box">
                    <div className="sub-team-3-content-2-text"><img src={Checklist} alt="Checklist" /><p>Passionate about clean energy</p></div>
                    <div className="sub-team-3-content-2-text"><img src={Checklist} alt="Checklist" /><p>Trained in global solar technologies</p></div>
                    <div className="sub-team-3-content-2-text"><img src={Checklist} alt="Checklist" /><p>Committed to professionalism & safety</p></div>
                    <div className="sub-team-3-content-2-text"><img src={Checklist} alt="Checklist" /><p>Focused on customer-first solutions</p></div>
                    <div className="sub-team-3-content-2-text"><img src={Checklist} alt="Checklist" /><p>United by the mission of a greener, more sustainable Nigeria</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subteam3