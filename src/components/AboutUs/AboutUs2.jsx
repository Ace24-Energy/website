import React from 'react';
import "./AboutUs2.css";
import { Statistics1, Statistics2, Statistics3, Statistics4, Statistics5, MobileStat1, MobileStat2, MobileStat3, MobileStat4, MobileStat5 } from "../../assets/";


const AboutUs2 = () => {
  return (
    <>
      <section className='wrapper' id='main-container-2'>
        <div className="intro-text-wrapper">
          <p className='intro-2'>What Makes Us Different</p>
          <p className='intro-2-text'>
            Create, assign, and manage tasks with a drag-and-drop interface.
            Visualize your workflow in Kanban, Gantt, or calendar views. 
          </p>
        </div>
        <div className="sub-container-2">
          <div className="inner-sub-container-1">
            <div className="sub-container-content-upper">
              <img src= {Statistics1} alt="Statistics" />
              <p className='about-upper-title'>All-in-One Energy Platform</p>
              <p className='about-upper'>Discover, finance, manage and maintain energy solutions in one place</p>
            </div>
            <div className="sub-container-content-upper">
              <img src= {Statistics2} alt="Statistics" />
              <p className='about-upper-title'>Flexible Payment Option</p>
              <p className='about-upper'>Energy financing, leasing, and recycle-to-purchase program </p>
            </div>
          </div>
          <div className="inner-sub-container-2">
            <div className="sub-container-content-lower">
              <img src= {Statistics3} alt="Statistics" />
              <p className='about-lower-title'>Quality-First Approach</p>
              <p className='about-lower'>Only verified, high-quality products deployed</p>
            </div>
            <div className="sub-container-content-lower">
              <img src= {Statistics4} alt="Statistics" />
              <p className='about-lower-title'>Fast Response Time</p>
              <p className='about-lower'>Prompt support from inquiry to delivery</p>
            </div>
            <div className="sub-container-content-lower">
              <img src= {Statistics5} alt="Statistics" />
              <p className='about-lower-title'>Nationwide Partner Network</p>
              <p className='about-lower'>Reliable service delivery across Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE VIEW  */}
      <section className='mobile-main-container-2'>
        <div className="mobile-intro-2">
          <p className='mobile-intro-title-2'>What Makes Us Different</p>
          <p className='mobile-intro-text-2'>Discover why thousands trust us with their energy needs</p>
        </div>
        <div className="mobile-wrapper-2">
          <div className="mobile-main-sub-container-2">
            <div className="mobile-main-content-2">
              <img src={MobileStat1} alt="Mobile-stat-icon" />
              <div className="mobile-main-content-text">
                <p className='mobile-main-content-text-1'>All-In-One Energy Platform</p>
                <p className='mobile-main-content-text-2'>Discover, finance, manage, and maintain energy solutions</p>
              </div>
            </div>

            <div className="mobile-main-content-2">
              <img src={MobileStat2} alt="Mobile-stat-icon" />
              <div className="mobile-main-content-text">
                <p className='mobile-main-content-text-1'>Flexible Payment Option</p>
                <p className='mobile-main-content-text-2'>Enery financing, leasing, and recycle-to-purchase programs</p>
              </div>
            </div>

            <div className="mobile-main-content-2">
              <img src={MobileStat3} alt="Mobile-stat-icon" />
              <div className="mobile-main-content-text">
                <p className='mobile-main-content-text-1'>Quality-First Approach</p>
                <p className='mobile-main-content-text-2'>Only verified, high-quality products deployed</p>
              </div>
            </div>

            <div className="mobile-main-content-2">
              <img src={MobileStat4} alt="Mobile-stat-icon" />
              <div className="mobile-main-content-text">
                <p className='mobile-main-content-text-1'>Fast Response Time</p>
                <p className='mobile-main-content-text-2'>Prompt support from inquiry to delivery</p>
              </div>
            </div>

            <div className="mobile-main-content-2">
              <img src={MobileStat5} alt="Mobile-stat-icon" />
              <div className="mobile-main-content-text">
                <p className='mobile-main-content-text-1'>National Partner Network</p>
                <p className='mobile-main-content-text-2'>Reliable service delivery across Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs2