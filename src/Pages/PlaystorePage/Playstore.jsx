import React from 'react'
import "./Playstore.css";
import Navbar from '../../components/Navbar/Navbar';
import { Working3 } from '../../assets';


const Playstore = () => {
  return (
    <section className="playstore-error-section">
        <div className="wrapper">
            <Navbar />
        <div className="playstore-error-section-wrapper">
            <img src={Working3} alt="working-on-it-icon" />
            <div className="playstore-text">
                <h2>
                    Oops!
                </h2>
                <p>
                    We're currently working on our official application that has everything you need and would be available on both Andriod and Ios.
                </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Playstore