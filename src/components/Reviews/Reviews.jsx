import React from 'react'
import "./Reviews.css";
import { Arrowleft, Arrowright, Avatar } from '../../assets';


const Reviews = () => {
  return (
    <section className='reviews-section' id='testimonials'>
      <div className="reviews-intro">
        <p className='reviews-intro-title'>What our <span>clients say</span> </p>
        <p className='reviews-intro-subtitle'> What our clients say Simple defaults, direct integrations, and advanced customization means Ramp will scale with you.</p>
      </div>

      <div className="reviews-content">
        <div className="left-arrow">
          <img src={Arrowleft} alt="left-arrow-icon" />
        </div>
        <div className="client-review-box">
          <div className="client-avatar"><img src={Avatar} alt="client-avatar" /></div>
          <div className="client-review">
            <p className='client-review-text'>Ace 24 Energy made the switch to solar completely stress-free for us. From the first conversation to installation, everything was fast, 
              professional, and transparent.
            </p>
            <div>
              <p className='client-name'>Alex Bature</p>
              <p className='client-status'>Business Owner, Lagos</p>
            </div>
          </div>
        </div>
        <div className="right-arrow">
          <img src={Arrowright} alt="right-arrow-icon" />
        </div>
      </div>
    </section>
  )
}

export default Reviews