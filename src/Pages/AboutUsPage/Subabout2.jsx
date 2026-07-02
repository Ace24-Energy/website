import React from 'react';
import "./Subabout2.css";
import { Aboutpageimg1, Aboutpageimg3, ExecutedImage2, ExecutedImage5, ExecutedImage6 } from '../../assets';


const Subabout2 = () => {
  return (
    <section className='sub-about-2'>
      <div className="main-about-sub-wrapper-2">
        <div className="main-about-sub-slider-wrapper-2">
        <img id='slide-1' src={Aboutpageimg3} alt="Aboutpageimg3" />
        <img id='slide-2' src={ExecutedImage2} alt="Aboutpageimg1" />
        <img id='slide-4' src={Aboutpageimg3} alt="Aboutpageimg3" />
        <img id='slide-3' src={ExecutedImage5} alt="Aboutpageimg3" />
        </div>
      </div>
    </section>
  )
}

export default Subabout2