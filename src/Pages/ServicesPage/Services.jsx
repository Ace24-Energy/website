import React from 'react'
import "./Services.css";
import Subservices1 from './Subservices1';
import Subservices2 from './Subservices2';
import Subservices3 from './Subservices3';
import Subservices4 from './Subservices4';
import { Footer } from '../../components';



const Services = () => {
  return (
    <section>
        <Subservices1/>
        <Subservices2/>
        <Subservices3/>
        <Subservices4/>
        <Footer/>
    </section>
  )
}

export default Services