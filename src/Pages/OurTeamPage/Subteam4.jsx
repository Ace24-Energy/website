import React from 'react'
import "./Subteam4.css";
import { Core1, Core2, Core3, Core4 } from '../../assets';


const Subteam4 = () => {
  return (
    <section className="sub-team-4">
        <div className="sub-team-4-intro">
            <div className="sub-team-4-intro-title"><p>Our Core Values</p></div>
            <div className="sub-team-4-intro-text"><p>The principles that guide everything we do at ACE24 ENERGY</p></div>
        </div>
        <div className="sub-team-4-content-box">
            <div className="sub-team-4-contents">
                <div className="sub-team-4-contents-icon">
                    <img src={Core1} alt="Core1" />
                </div>
                <div className="sub-team-4-contents-title">
                    <p>Professionalism</p>
                </div>
                <div className="sub-team-4-contents-text">
                    <p>
                        Professionalism
                        From consultation to installation, we uphold
                        the highest standards of service, respect,
                        and responsibility.
                    </p>
                </div>
            </div>
            <div className="sub-team-4-contents">
                <div className="sub-team-4-contents-icon">
                    <img src={Core2} alt="Core2" />
                </div>
                <div className="sub-team-4-contents-title">
                    <p>Integrity</p>
                </div>
                <div className="sub-team-4-contents-text">
                    <p>
                        We build trust through transparency,
                        honesty, and delivering exactly what we
                        promise.
                    </p>
                </div>
            </div>
            <div className="sub-team-4-contents">
                <div className="sub-team-4-contents-icon">
                    <img src={Core3} alt="Core3" />
                </div>
                <div className="sub-team-4-contents-title">
                    <p>Excellence</p>
                </div>
                <div className="sub-team-4-contents-text">
                    <p>
                        We don't just deliver — we exceed
                        expectations, ensuring every project is a
                        model of quality and reliability.
                    </p>
                </div>
            </div>
            <div className="sub-team-4-contents">
                <div className="sub-team-4-contents-icon">
                    <img src={Core4} alt="Core4" />
                </div>
                <div className="sub-team-4-contents-title">
                    <p>Innovation</p>
                </div>
                <div className="sub-team-4-contents-text">
                    <p>
                        We leverage new technologies and smarter
                        systems to keep our clients ahead in
                        energy efficiency.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subteam4