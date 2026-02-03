import React from 'react'
import { useEffect, useRef } from "react";
import "./Executed.css";
import { ExecutedImage1, ExecutedImage2, ExecutedImage3, Location } from '../../assets';


const Executed = () => {

    //   FUNCTION FOR FIRST MOBILE SLIDE
      const sliderRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const cardWidth = sliderRef.current.offsetWidth;

      index++;

      // Reset back to first card
      if (index >= 3) index = 0;

      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 4000); // slides every 4 seconds

    return () => clearInterval(interval);
  }, []);


    //   FUNCTION FOR SECOND MOBILE SLIDE
  const sliderRef2 = useRef(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (!sliderRef2.current) return;

      const cardWidth = sliderRef2.current.offsetWidth;

      index++;

      // Reset back to first card
      if (index >= 3) index = 0;

      sliderRef2.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 4000); // slides every 4 seconds

    return () => clearInterval(interval);
  }, []);


      //   FUNCTION FOR THIRD MOBILE SLIDE
  const sliderRef3 = useRef(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (!sliderRef3.current) return;

      const cardWidth = sliderRef3.current.offsetWidth;

      index++;

      // Reset back to first card
      if (index >= 3) index = 0;

      sliderRef3.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 4000); // slides every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
        <section className='wrapper' id='main-container-4'>
            <div className="executed-intro"><p>Our Executed Projects</p></div>
            <div className="sub-container-4">
                <div className="group">
                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage1} alt="Executed-project-image" />
                        <div className="execution-name"><p>30KVA Solar Power System</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>Lekki, Lagos</p></div>
                        <div className="execution-details">
                            <p>Delivered and installed a comprehensive renewable energy solution for a private residence, featuring: </p>
                            <ul>
                                <li>30kVA inverter system</li>
                                <li>96kWh battery backup</li>
                                <li>48 units of 580W solar panels</li>
                            </ul>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>Full, stable power supply with enhanced energy autonomy.</p> 
                        </div>
                    </div>

                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage2} alt="Executed-project-image" />
                        <div className="execution-name"><p>Solar Power Installation</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>Anchor Services, Lagos</p></div>
                        <div className="execution-details">
                            <p>Successfully deployed a hybrid solar power system comprising: </p>
                            <ul>
                                <li>15kVA inverter</li>
                                <li>30kWh battery bank</li>
                                <li>9.6kW solar array</li>
                            </ul>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>Improved operational stability and reduced diesel dependency.</p> 
                        </div>
                    </div>

                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage3} alt="Executed-project-image" />
                        <div className="execution-name"><p>Solar-Powered ICT Centre</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>North-East Development Commission (NEDC)</p></div>
                        <div className="execution-details">
                            <p>Designed and executed a complete solar power system for a government-backed ICT centre.</p>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>
                                Sustainable energy supporting daily ICT operations and
                                training programs.
                            </p> 
                        </div>
                    </div>

                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage3} alt="Executed-project-image" />
                        <div className="execution-name"><p>Solar-Powered ICT Centre</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>North-East Development Commission (NEDC)</p></div>
                        <div className="execution-details">
                            <p>Designed and executed a complete solar power system for a government-backed ICT centre.</p>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>
                                Sustainable energy supporting daily ICT operations and
                                training programs.
                            </p> 
                        </div>
                    </div>
            </div>
            <div className="group">
                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage1} alt="Executed-project-image" />
                        <div className="execution-name"><p>30KVA Solar Power System</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>Lekki, Lagos</p></div>
                        <div className="execution-details">
                            <p>Delivered and installed a comprehensive renewable energy solution for a private residence, featuring: </p>
                            <ul>
                                <li>30kVA inverter system</li>
                                <li>96kWh battery backup</li>
                                <li>48 units of 580W solar panels</li>
                            </ul>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>Full, stable power supply with enhanced energy autonomy.</p> 
                        </div>
                    </div>

                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage2} alt="Executed-project-image" />
                        <div className="execution-name"><p>Solar Power Installation</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>Anchor Services, Lagos</p></div>
                        <div className="execution-details">
                            <p>Successfully deployed a hybrid solar power system comprising: </p>
                            <ul>
                                <li>15kVA inverter</li>
                                <li>30kWh battery bank</li>
                                <li>9.6kW solar array</li>
                            </ul>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>Improved operational stability and reduced diesel dependency.</p> 
                        </div>
                    </div>

                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage3} alt="Executed-project-image" />
                        <div className="execution-name"><p>Solar-Powered ICT Centre</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>North-East Development Commission (NEDC)</p></div>
                        <div className="execution-details">
                            <p>Designed and executed a complete solar power system for a government-backed ICT centre.</p>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>
                                Sustainable energy supporting daily ICT operations and
                                training programs.
                            </p> 
                        </div>
                    </div>

                    <div className="executed-content">
                        <img className="execution-image" src={ExecutedImage3} alt="Executed-project-image" />
                        <div className="execution-name"><p>Solar-Powered ICT Centre</p></div>
                        <div className="execution-location"><img className= "location-icon" src={Location} alt="Location-icon" /><p>North-East Development Commission (NEDC)</p></div>
                        <div className="execution-details">
                            <p>Designed and executed a complete solar power system for a government-backed ICT centre.</p>
                            <p className='outcome'>Outcome:</p>
                            <p className='outcome-details'>
                                Sustainable energy supporting daily ICT operations and
                                training programs.
                            </p> 
                        </div>
                    </div>
            </div>
            </div>
        </section>


        {/* MOBILE VIEW */}
        <section className="mobile-main-container-4" id='target-mobile-executed'>
            <div className="mobile-executed-intro"><p>Our Executed Projects</p></div>
            <div className="mobile-sub-container-4">
                <div className="mobile-slider" ref={sliderRef}>
                    <div className="mobile-executed-contents">
                        <div className="mobile-executed-sub-content">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>20KW Solar Power System</p>
                                <p className='mobile-exe-text-2'>Lagos, Nigeria</p>
                            </div>                      
                        </div>

                        <div className="mobile-executed-sub-content-2">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>Solar Powered Office</p>
                                <p className='mobile-exe-text-2'>Abuja, Nigeria</p>
                            </div>                      
                        </div>

                        <div className="mobile-executed-sub-content-3">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>Solar Powered ICT Center</p>
                                <p className='mobile-exe-text-2'>Ibadan, Nigeria</p>
                            </div>                      
                        </div>
                    </div>
                </div>

                <div className="mobile-slider" ref={sliderRef2}>
                    <div className="mobile-executed-contents" id='target-metrics'>
                        <div className="mobile-executed-sub-content-2">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>Solar Powered Office</p>
                                <p className='mobile-exe-text-2'>Abuja, Nigeria</p>
                            </div>                      
                        </div>

                        <div className="mobile-executed-sub-content-3">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>Solar Powered ICT Center</p>
                                <p className='mobile-exe-text-2'>Ibadan, Nigeria</p>
                            </div>                      
                        </div>

                        <div className="mobile-executed-sub-content">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>20KW Solar Power System</p>
                                <p className='mobile-exe-text-2'>Lagos, Nigeria</p>
                            </div>                      
                        </div>
                    </div>
                </div>

                <div className="mobile-slider" ref={sliderRef3}>
                    <div className="mobile-executed-contents">
                        <div className="mobile-executed-sub-content">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>20KW Solar Power System</p>
                                <p className='mobile-exe-text-2'>Lagos, Nigeria</p>
                            </div>                      
                        </div>

                        <div className="mobile-executed-sub-content-3">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>Solar Powered ICT Center</p>
                                <p className='mobile-exe-text-2'>Ibadan, Nigeria</p>
                            </div>                      
                        </div>

                        <div className="mobile-executed-sub-content-2">
                            <div className="mobile-exe-text">
                                <p className='mobile-exe-text-1'>Solar Powered Office</p>
                                <p className='mobile-exe-text-2'>Abuja, Nigeria</p>
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Executed