import React from 'react';
import { useRef } from 'react';
import "./Reviews.css";
import { Arrowleft, Arrowright, Avatar, Star, Avatar2 } from '../../assets';


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

// REVIEW SLIDER FUNCTIONS FOR MOBILE
const boxSlideRef = useRef (null);

const slideRight = () => {
  const content = boxSlideRef.current;
  content.scrollLeft += content.offsetWidth;
};

const slideLeft = () => {
  const content = boxSlideRef.current;
  content.scrollLeft -= content.offsetWidth;
};


  return (
    <>
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

      {/* MOBILE VIEW */}
      <section className="mobile-review-section" id='target-mobile-reviews'>
          <div className="mobile-review-intros">
            <p className='mobile-review-intro-1'>What Our Clients Say</p>
            <p className='mobile-review-intro-2'>Real stories from real customers</p>
          </div>
          <div className="mobile-wrapper-5">
            <div className="mobile-review-content">
              <div className="mobile-review-slider" ref={boxSlideRef}>
                <div className="mobile-review-sub-content">
                  <div className="mobile-review">
                    <p>Ace24 Energy made the switch to solar amazingly stress-free for us. From the first consultation to
                      installation, everything was fast, professional, and transparent.
                    </p>
                  </div>
                  <div className="mobile-review-ratings">
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                  </div>
                  <div className="mobile-review-profile">
                    <img src={Avatar2} alt="Profile-icon" />
                    <div className="mobile-review-names">
                      <p className="mobile-review-name-1">Akin Moses</p>
                      <p className="mobile-review-name-2">Business Owner, Lagos.</p>
                    </div>
                  </div>
                </div>

                <div className="mobile-review-sub-content">
                  <div className="mobile-review">
                    <p>Ace24 Energy made the switch to solar amazingly stress-free for us. From the first consultation to
                      installation, everything was fast, professional, and transparent.
                    </p>
                  </div>
                  <div className="mobile-review-ratings">
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                  </div>
                  <div className="mobile-review-profile">
                    <img src={Avatar2} alt="Profile-icon" />
                    <div className="mobile-review-names">
                      <p className="mobile-review-name-1">Akin Moses</p>
                      <p className="mobile-review-name-2">Business Owner, Lagos.</p>
                    </div>
                  </div>
                </div>

                <div className="mobile-review-sub-content">
                  <div className="mobile-review">
                    <p>Ace24 Energy made the switch to solar amazingly stress-free for us. From the first consultation to
                      installation, everything was fast, professional, and transparent.
                    </p>
                  </div>
                  <div className="mobile-review-ratings">
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                  </div>
                  <div className="mobile-review-profile">
                    <img src={Avatar2} alt="Profile-icon" />
                    <div className="mobile-review-names">
                      <p className="mobile-review-name-1">Akin Moses</p>
                      <p className="mobile-review-name-2">Business Owner, Lagos.</p>
                    </div>
                  </div>
                </div>

                <div className="mobile-review-sub-content">
                  <div className="mobile-review">
                    <p>Ace24 Energy made the switch to solar amazingly stress-free for us. From the first consultation to
                      installation, everything was fast, professional, and transparent.
                    </p>
                  </div>
                  <div className="mobile-review-ratings">
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                    <img src={Star} alt="Rating-icon" />
                  </div>
                  <div className="mobile-review-profile">
                    <img src={Avatar2} alt="Profile-icon" />
                    <div className="mobile-review-names">
                      <p className="mobile-review-name-1">Akin Moses</p>
                      <p className="mobile-review-name-2">Business Owner, Lagos.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile-review-slide-icons">
                <div className="mobile-review-icon" onClick={slideLeft}>
                  <img src={Arrowleft} alt="left-arrow-icon" />
                </div>
                <div className="mobile-review-icon" onClick={slideRight}>
                  <img src={Arrowright} alt="right-arrow-icon" />
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Reviews