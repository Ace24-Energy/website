import React from 'react';
import "./Solutions.css";
import { Leaf } from "../../assets/";


const Solutions = () => {
  return (
    <section className="wrapper" id='main-container-3'>
      <div className="solution-intro"><p>Our Solutions</p></div>
      <div className="sub-container-3">
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Solar & Clean <br /> Energy Systems
          </p>
          <ul>
            <li>Residential and commercial solar solutions</li>
            <li>Custom-designed systems for every energy need</li>
            <li>Small-scale to large-scale deployments</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Inverters & Batteries
          </p>
          <ul>
            <li>All notable inverter brands and capacities</li>
            <li>Lithium, lead-acid, and other battery options</li>
            <li>Suitable for homes and businesses</li>
            <li>Average warranty: 5 years</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Installation & Maintenance
          </p>
          <ul>
            <li>Professional installation</li>
            <li>Ongoing maintenance contracts</li>
            <li>Direct service delivery and partner-supported installations</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Energy Financing
          </p>
          <ul>
            <li>Flexible payment plans for solar systems</li>
            <li>Financing for CNG conversion</li>
            <li>EV vehicle acquisition support</li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default Solutions