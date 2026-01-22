import React from 'react';
import "./Faqs.css";
import { Plus } from '../../assets';

const Faqs = () => {
  return (
    <section className='wrapper' id='Faq-section'>
      <div className="question-title">
        <p id='first-title'>Have questions?</p>
        <p id='second-title'>We've got answer</p>
      </div>
      <div className="questions-box">
        <div className="questions"><p>Do you provide clean energy solutions for both homes and businesses?</p> <img src={Plus} alt="Plus-icon" /></div>
        <div className="questions"><p>Do you offer flexible payment plans or energy financing options?</p> <img src={Plus} alt="Plus-icon" /></div>
        <div className="questions"><p>How long does installation typically take after an inquiry?</p> <img src={Plus} alt="Plus-icon" /></div>
        <div className="questions"><p>What types of inverters and batteries do you support?</p> <img src={Plus} alt="Plus-icon" /></div>
        <div className="questions" id='target-contact'><p>Do you offer maintenance, support, and recycling for old batteries and equipment?</p> <img src={Plus} alt="Plus-icon" /></div>
      </div>
    </section>
  )
}

export default Faqs