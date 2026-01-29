import React from 'react';
import { useRef } from 'react';
import "./Reviews.css";
import { Arrowleft, Arrowright, Avatar } from '../../assets';


const Reviews = () => {

// REVIEW SLIDER FUNCTIONS
const boxContainerRef = useRef (null);

const next = () => {
  const container = boxContainerRef.current;
  container.scrollLeft += container.offsetWidth;
};

const prev = () => {
  const container = boxContainerRef.current;
  container.scrollLeft -= container.offsetWidth;
};


  return (
    <section className='reviews-section' id='testimonials'>
      <div className="reviews-intro">
        <p className='reviews-intro-title'>What our <span>clients say</span> </p>
        <p className='reviews-intro-subtitle'> What our clients say Simple defaults, direct integrations, and advanced customization means Ramp will scale with you.</p>
      </div>

      <div className="reviews-content">
        <div className="left-arrow" onClick={prev}>
          <img src={Arrowleft} alt="left-arrow-icon" />
        </div>

      <div className="review-box-container" ref={boxContainerRef}>
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
        </div>
        <div className="right-arrow" onClick={next}>
          <img src={Arrowright} alt="right-arrow-icon" />
        </div>
      </div>
    </section>
  )
}

export default Reviews