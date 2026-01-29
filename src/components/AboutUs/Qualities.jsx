import React from 'react'
import "./Qualities.css";
import { Overlay1, Overlay2, Overlay3 } from '../../assets';


const Qualities = () => {
  return (
    <section className='wrapper' id='main-container-5'>
        <div className="quality-intro">
          <p className='quality-intro-text-1'>Our Traction and Metrics</p>
          <p className='quality-intro-text-2'>building momentum in Nigeria's clean energy revolution</p>
        </div>

        <div className="quality-contents">
          <div className="quality-content-box">
            <img src={Overlay1} alt="Quality-icon" />
            <p className="quality-amount">₦100m</p>
            <p className="quality-text-1" id='ajust-quality-text'>Revenue <br /> Generated</p>
            <p className="quality-text-2">Since inception</p>
          </div>
          <div className="quality-content-box">
            <img src={Overlay2} alt="Quality-icon" />
            <p className="quality-amount">63</p>
            <p className="quality-text-1">Installations</p>
            <p className="quality-text-2">Completed successfully</p>
          </div>
          <div className="quality-content-box">
            <img src={Overlay1} alt="Quality-icon" />
            <p className="quality-amount">₦36m</p>
            <p className="quality-text-1" id='ajust-quality-text'>Preojected <br /> Revenue</p>
            <p className="quality-text-2">In 3 years</p>
          </div>
        </div>
    </section>
  )
}

export default Qualities