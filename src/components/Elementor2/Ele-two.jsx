import React, { useEffect } from 'react'
import './ele_two.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

import WebsiteTraffic from '../../assets/website_traffic.png'

const Ele_two = () => {
    useEffect(() => {  // for animations on scroll
        // AOS.init();
        AOS.init({
          offset: 200,
          duration: 400,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
        
  return (
    <section className='ele-section-two'>
        <div className="ele-section-two-container">
            <div className="ele-two-widget-wrap col-md-6">
                <img data-aos="slide-right" src={WebsiteTraffic} alt="website-traffic-image" />
            </div>
            <div className="ele-two-widget-wrap col-md-6">
                <div className="ele-two-widget-content">
                    <h5>GROW DIGITALLY</h5>
                    <h2>Boosts Your Website Traffic!</h2>
                    <p>Fuel Your Growth: Unleash Your Business's Potential with Digital Marketing Strategies.</p>
                    <p>Digital marketing holds the key to unlocking exponential growth for businesses. By harnessing its power, organizations can reach wider audiences, cultivate meaningful connections, and propel their success to new heights.</p>
                </div>
                <button type='submit'><a href="/about-us">ABOUT US</a></button>
            </div>
        </div>
        <div className="white_bg"></div>
    </section>
  )
}

export default Ele_two