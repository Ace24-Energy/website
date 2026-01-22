import React from 'react'
import "./Executed.css";
import { ExecutedImage1, ExecutedImage2, ExecutedImage3, Location } from '../../assets';


const Executed = () => {
  return (
    <section className='wrapper' id='main-container-4'>
        <div className="executed-intro"><p>Our Executed Projects</p></div>
        <div className="sub-container-4">
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
        </div>
    </section>
  )
}

export default Executed