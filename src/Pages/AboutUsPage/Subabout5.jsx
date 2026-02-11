import React from 'react'
import "./Subabout5.css";
import { Abouticon1, Abouticon2, Abouticon3, Abouticon4 } from '../../assets';


const Subabout5 = () => {
  return (
    <section className="sub-about-5">
        <div className="sub-about-5-wrapper">
            <div className="sub-about-5-title-box">
                <p className="sub-about-5-title-box-text-1">Why ACE24 ENERGY?</p>
                <p className="sub-about-5-title-box-text-2">
                    In today's Nigeria, the Service-Based Tariff system (Band A–E) promises more hours of supply, but reality
                    often falls short. Rising tariffs and inconsistent grid supply still leave families and businesses in the dark.
                </p>
            </div>
            <div className="sub-about-5-text-1">
                <p>
                    At ACE24 ENERGY, we flip this challenge into an opportunity by providing <span>sustainable energy for businesses and homes</span>  that eliminates
                    dependence on unpredictable bands, unstable grids, and costly generators with attendant air pollution.
                </p>
            </div>
            <div className="sub-about-5-text-2">
                <p>
                    We exist to give you control over your power and your future by helping you:
                </p>
            </div>
            <div className="sub-about-5-text-3-box">
                <div className="sub-about-5-text-3-box-content">
                    <div className="sub-about-5-text-3-box-content-icon">
                        <img src={Abouticon1} alt="Abouticon" />
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-1">
                        <p>Save money in the long run</p>
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-2">
                        <p>
                           Save money in the long run
                            Reduce your energy costs with
                            sustainable solar solutions that pay for
                            themselves.
                        </p>
                    </div>
                </div>

                <div className="sub-about-5-text-3-box-content">
                    <div className="sub-about-5-text-3-box-content-icon">
                        <img src={Abouticon2} alt="Abouticon" />
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-1">
                        <p>Gain freedom from unavailable power</p>
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-2">
                        <p>
                           Gain freedom from unreliable power
                            No more dependence on unpredictable
                            bands, unstable grids, or costly
                            generators.
                        </p>
                    </div>
                </div>

                <div className="sub-about-5-text-3-box-content">
                    <div className="sub-about-5-text-3-box-content-icon">
                        <img src={Abouticon3} alt="Abouticon" />
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-1">
                        <p>protect your business</p>
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-2">
                        <p>
                           Protect your business
                            Eliminate interruptions and ensure your
                            operations run smoothly 24/7.
                        </p>
                    </div>
                </div>

                <div className="sub-about-5-text-3-box-content">
                    <div className="sub-about-5-text-3-box-content-icon">
                        <img src={Abouticon4} alt="Abouticon" />
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-1">
                        <p>Contribute to a cleaner Nigeria</p>
                    </div>
                    <div className="sub-about-5-text-3-box-content-text-2">
                        <p>
                           Join the movement towards a greener,
                           more sustainable future for all.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sub-about-5-text-4">
                <p>At ACE24 ENERGY, we're not just powering buildings — <span>we're powering lives and futures.</span> </p>
            </div>
        </div>
    </section>
  )
}

export default Subabout5