import React from 'react';
import "./Subabout2.css";
import { Aboutpageimg1, Aboutpageimg3, ExecutedImage4, ExecutedImage5, ExecutedImage6, Worksite, ExecutedImage7, ExecutedImage8 } from '../../assets';


const Subabout2 = () => {
  return (
    <section className='sub-about-2'>
      <div className="main-about-sub-wrapper-2">
        <div className="main-about-sub-slider-wrapper-2">
        <img id='slide-1' src={Aboutpageimg1} alt="Aboutpageimg1" />
        <img id='slide-2' src={Aboutpageimg3} alt="Aboutpageimg3" />
        <img id='slide-3' src={ExecutedImage5} alt="Aboutpageimg3" />
        <img id='slide-4' src={ExecutedImage7} alt="Aboutpageimg3" />
        <img id='slide-5' src={ExecutedImage4} alt="Aboutpageimg3" />
        <img id='slide-6' src={ExecutedImage8} alt="Aboutpageimg3" />
        </div>
      </div>
    </section>
  )
}

export default Subabout2