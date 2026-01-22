import React from 'react';
import "./ContactUs.css";
import {Call, Email, Instagram, Facebook, Twitter, Linkedin, Whatsapp} from "../../assets/";


const ContactUs = () => {
  return (
    <section className='wrapper' id='contactus-section'>
      <p className='contact-title'>Contact Us</p>
      <p className='contact-text'>For trusted and efficient energy solutions, Ace24 Energy is here to support you.
         Our team is available to respond to inquiries, provide guidance, and deliver dependable service tailored to your needs.
      </p>
      <div className="contact-box">
        <div className="box-1">
          <div><img src={Call} alt="Call-Icon" /> <p>+234 (0) 704 125 9864</p></div>
          <div><img src={Email} alt="Sms-Icon" /> <p>info@ace24energy.com</p></div>
        </div>
        <div className="box-2">
          <img src={Instagram} alt="Instagram-Icon" />
          <img src={Facebook} alt="Facebook-Icon" />
          <img src={Twitter} alt="Twitter-Icon" />
          <img src={Linkedin} alt="Linkedin-Icon" />
          <img src={Whatsapp} alt="Whatsapp-Icon" />
          <p>@ace24energyglobal</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs