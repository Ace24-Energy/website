import React from 'react'
import "./Subservices2.css";
import { Serviceicon4, Serviceicon5, Serviceicon6, Serviceicon7, Serviceicon8,Serviceicon9, Serviceicon10, Serviceicon11, Serviceicon12, Serviceicon13, Mark, Arrow} from '../../assets';
import { Link } from "react-router";



const Subservices2 = () => {
  return (
    <section className='sub-service-2 wrapper'>
        {/* BOX 1 */}
        <div className="sub-service-2-content-box">
            <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon4} alt="Serviceicon4" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">ACE24 Energy Token Vending</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Buy electricity tokens online for IKEDC, IBEDC, 
                    AEDC, EKEDC and more — quick, secure, stress-free.
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Coverage across major Nigerian DisCos</li>
                       <li>24/7 access via mobile or desktop</li>
                       <li>Secure & reliable payment channels</li>
                       <li>Instant token delivery</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Never run out of power unexpectedly</li>
                        <li>Save time with instant vending</li>
                        <li>Stay in control of your spending</li>
                        <li>Guaranteed secure payments</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Immediate recharge codes</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Acess to upcoming all-in-one app</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>24/7 customer support</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Never stay in darkness again - top up in seconds."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 2 */}
        <div className="sub-service-2-content-box">
            <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon5} alt="Serviceicon5" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Solar Power Solutions</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Affordable, durable solar systems engineered for Nigeria's 
                    climate — for homes, SMEs andindustries.
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Solar panels, inverters & battery packages</li>
                       <li>Professional installation with warranties</li>
                       <li>Flexible system sizes for any property</li>
                       <li>Ongoing maintenance & support</li>
                       
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Goodbye to noisy, costly generators</li>
                        <li>Save up to 60% on monthly bills</li>
                        <li>Eco-friendly, sustainable power</li>
                        <li>24/7 reliable supply</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>High-quality panels, batteries & inverters</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Expert install & maintenance</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Scalable systems — homes to enterprises</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Long-term warranties</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>""Solar isn't an expense — it's a long-term investment in your freedom."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 3 */}
        <div className="sub-service-2-content-box">
             <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon6} alt="Serviceicon6" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Smart Energy Management</p>
                <p className="sub-service-2-content-box-item-1-text">Track consumption in real-time, optimize usage, and cut waste — at home, office, or school.</p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Real-time usage tracking</li>
                       <li>Mobile/online monitoring dashboard</li>
                       <li>High-consumption alerts</li>
                       <li>Optimization insights</li>

                       
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Save by cutting energy waste</li>
                        <li>See which appliances cost most</li>
                        <li>Control & optimize remotely</li>
                        <li>Data-driven upgrade decisions</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Smart devices installed</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Mobile-friendly dashboard</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Expert cost-reduction guidance</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Energy efficiency is the new currency — keep more of it."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX-4 */}
        <div className="sub-service-2-content-box">
             <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon7} alt="Serviceicon7" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Energy Financing — Solar, CNG & EV</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Going green shouldn't be a financial burden. Flexible financing for solar, CNG conversion
                    and EVs.
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Pay-as-you-go solar plans</li>
                       <li>Business & institutional financing</li>
                       <li>Bank & lender partnerships</li>
                       <li>Affordable repayment terms</li>
                       
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Zero stress, flexible payments</li>
                        <li>No upfront burden</li>
                        <li>For households, SMEs, schools, corporates</li>
                        <li>Access clean energy immediately</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Tailored financing plan</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Affordable repayments</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Immediate asset access</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Own clean energy assets today, pay gradually tomorrow."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 5 */}
        <div className="sub-service-2-content-box">
             <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon8} alt="Serviceicon8" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Energy Swap & Upgrade</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Energy Swap & Upgrade
                    Trade in old systems for better ones. Upgrade panels, inverters and batteries with expert
                    advice.         
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Flexible swap options</li>
                       <li>Scalable upgrades</li>
                       <li>Professional energy assessment</li>
                       <li>Seamless transitions, minimal downtime</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Get value from your old system</li>
                        <li>Boost performance & efficiency</li>
                        <li>Future-proof your energy</li>
                        <li>Backed by ACE24 support</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Personalized energy audit</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Flexible upgrade financing</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Warranty-backed equipment</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>After-sales maintenance</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Don't stay stuck — grow your power as your needs expand."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 6 */}
        <div className="sub-service-2-content-box">
             <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon9} alt="Serviceicon9" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Request an Engineer</p>
                <p className="sub-service-2-content-box-item-1-text">Certified engineers for installation, troubleshooting and maintenance — just a call away,</p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>On-demand booking</li>
                       <li>Certified, vetted experts</li>
                       <li>Nationwide reach</li>
                       <li>Transparent pricing</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Quick response times</li>
                        <li>Done right the first time</li>
                        <li>Peace of mind</li>
                        <li>One call handles everything</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Qualified engineer at your door</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Professional diagnostics</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Expert repairs & install</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>After-service recommendations</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Professional help is never far away — request an engineer today."</p>
                </div>
               <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 7 */}
        <div className="sub-service-2-content-box">
             <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon10} alt="Serviceicon10" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Energy Recycling Services</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Safe, eco-friendly disposal of old batteries, panels and e-waste. Compliant with global
                    standards.      
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Solar waste collection & disposal</li>
                       <li>Global compliance standards</li>
                       <li>Battery & electronics recycling</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Protect the environment</li>
                        <li>Free up space safely</li>
                        <li>Contribute to a greener Nigeria</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Collection service</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Responsible disposal</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Eco-recycling certificate</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Protect your environment while enjoying reliable energy."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 8 */}
        <div className="sub-service-2-content-box">
             <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon11} alt="Serviceicon11" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">Clean Energy Consulting</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Tailored renewable energy consulting — energy audits, project design and sustainability
                    roadmaps.
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Energy audits</li>
                       <li>Business sustainability roadmaps</li>
                       <li>Solar project design</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>Avoid costly mistakes</li>
                        <li>Maximize efficiency</li>
                        <li>Reach sustainability goals faster</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Detailed audit report</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Budget-tailored recommendations</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Long-term clean energy roadmap</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"From schools to factories — we guide you to the smartest path."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 9 */}
        <div className="sub-service-2-content-box">
              <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon12} alt="Serviceicon12" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">LAUNCHING SOON</p>
                <p className="sub-service-2-content-box-item-1-text">
                    ACE24 Energy App
                    A first-of-its-kind app putting all your energy needs in one place — built for Nigeria.
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Buy tokens online</li>
                       <li>Order solar systems & batteries</li>
                       <li>Request engineers on-demand</li>
                       <li>Access financing & recycling</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>All services in one place</li>
                        <li>No more juggling apps</li>
                        <li>Instant access, anywhere</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Seamless app experience</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>24/7 access to services</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Exclusive marketplace offers</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>"Energy has never been this simple — all in one app, in your pocket."</p>
                </div>
                <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>

        {/* BOX 10 */}
        <div className="sub-service-2-content-box">
              <div className="sub-service-2-content-box-icon">
                <img src={Serviceicon13} alt="Serviceicon13" />
            </div>
            <div className="sub-service-2-content-box-item-1">
                <p className="sub-service-2-content-box-item-1-title">ACE24 Online Marketplace</p>
                <p className="sub-service-2-content-box-item-1-text">
                    Shop solar, inverters, batteries and accessories — vetted by ACE24 experts, available 24/7.
                </p>
            </div>
            <div className="sub-service-2-content-box-item-2">
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>FEATURES</p>
                    <ul>
                       <li>Wide selection of solar gear</li>
                       <li>Energy-efficient appliances</li>
                       <li>Engineers, financing & recycling</li>
                       <li>Secure online payments</li>
                    </ul>
                </div>
                <div className="sub-service-2-content-box-item-2-sub-box">
                    <p>BENEFITS</p>
                    <ul>
                        <li>One-stop shop for clean energy</li>
                        <li>Transparent, no hidden costs</li>
                        <li>Quality you can trust</li>
                        <li>Shop anytime, anywhere</li>
                    </ul>
                </div>
            </div>
            <div className="sub-service-2-content-box-item-3">
                <div className="sub-service-2-content-box-item-3-title">
                    <p>WHAT YOU GET</p>
                </div>
                <div className="sub-service-2-content-box-item-3-sub-box">
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>High-quality energy products</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Seamless mobile shopping</p>
                    </div>
                    <div className="sub-service-2-content-box-item-3-sub-box-items">
                        <img src={Mark} alt="Checker" />
                        <p>Round-the-clock support</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sub-service-2-content-box-item-4">
                <div className="sub-service-2-content-box-item-4-text">
                    <p>""Power your life the smarter way — shop on the ACE24 Marketplace.""</p>
                </div>
               <Link to="/Playstore">
                 <button>
                    <p>Get Started</p>
                    <img src={Arrow} alt="Arrow-icon" />
                </button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Subservices2