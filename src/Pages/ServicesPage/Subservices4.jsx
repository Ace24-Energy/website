import React from 'react'
import "./Subservices4.css";
import { SmallLeaf, Arrow } from '../../assets';
import { useNavigate } from "react-router";
import { Link } from "react-router";



const Subservices4 = () => {

    // CONTACT US BUTTON NAVIGATION
      const navigate = useNavigate();
      const goToContact = () => {
        navigate("/");
    
        setTimeout(() => {
          document
            .getElementById("contactus-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        };

  return (
    <section className="sub-service-4">
        <div className="sub-service-4-content">
            <div className="sub-service-4-content-title">
                <img src={SmallLeaf} alt="Leaf-icon" />
                <p>ENERGY FREEDOM STARTS HERE</p>
            </div>
            <h2 className='sub-service-4-content-header'>Take control of your energy today</h2>
            <p className='sub-service-4-content-text'>From tokens to solar, financing and beyond — ACE24 ENERGY has the power solutions you need.</p>
            <div className="sub-service-4-content-buttons">
                <Link to="/Playstore">
                    <button className="sub-service-4-content-button-1">
                        <p>Start your journey</p>
                        <img src={Arrow} alt="Arrow-icon" />
                    </button>
                </Link>
                <button className="sub-service-4-content-button-2" onClick={goToContact}>
                    <p>Call an expert</p>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Subservices4