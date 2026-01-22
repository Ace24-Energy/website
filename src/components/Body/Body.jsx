import React from 'react';
import "./Body.css";
import { AboutUs1, AboutUs2, Solutions, Executed, Qualities, Reviews, Faqs, ContactUs } from "../index";


const Body = () => {
  return (
    <section className='main-section'>
     <AboutUs1 />
     <AboutUs2 />
     <Solutions />
     <Executed />
     <Qualities />
     <Reviews />
     <Faqs />
     <ContactUs />   
    </section>
  )
}

export default Body