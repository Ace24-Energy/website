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
            Solar & Clean Energy Systems
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
            Smart Energy Management
          </p>
          <ul>
            <li>Intelligent monitoring and control systems</li>
            <li>Optimized power usage and load balancing</li>
            <li>Real-time energy performance insights</li>
            <li>Improved efficiency and reduced energy costs</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Recycling 
          </p>
          <ul>
            <li>Safe recycling of used batteries and components </li>
            <li>Environmentally responsible disposal processes</li>
            <li>Supports for sustainable energy practices</li>
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

      <div className="sub-container-3">
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Energy Token Vending
          </p>
          <ul>
            <li>Prepaid energy token sales and management</li>
            <li>Secure and reliable vending system</li>
            <li>Instant token generation and delivery</li>
            <li>Support for residential and commercial users</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Consultancy
          </p>
          <ul>
            <li>Expert energy planning and advisory services</li>
            <li>Feasibility studies and system assessments</li>
            <li>Cost optimization and efficiency recommendations</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            Swap/Upgrade
          </p>
          <ul>
            <li>System upgrades to modern energy solutions</li>
            <li>Battery and inverter replacement services</li>
            <li>Performance improvement and capacity expansion</li>
          </ul>
        </div>
        <div className="solutions-content">
          <img src={Leaf} alt="Leaf-icon" />
          <p className="solutions-content-title">
            ACE24 Mobile App
          </p>
          <ul>
            <li>Easy access to energy products and services</li>
            <li>Manage installations, payments, and support</li>
            <li>Connect with verified partners and engineers</li>
            <li>Centralized platform for energy management</li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default Solutions