import React, { useEffect } from 'react'
import './ele_three.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import WorkTogether from '../../assets/work-together.png'

const Ele_three = () => {
  useEffect(() => {  // for animations on scroll
    // AOS.init();
    AOS.init({
      offset: 120,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section className="ele-section-three">
        <div className="ele-three-container">
            <div className="ele-three-widget-wrap ele-three-wrap-content col-md-5">
                <h1 data-aos="fade-up">Let’s work together</h1>
                <p data-aos="fade-up">Join our network of success-driven individuals and let's achieve greatness together.</p>
                <a data-aos="fade-up" href="tel:8001234567">8829976248</a>
                <p data-aos="fade-up">contact@fameflyer.com</p>
                <button data-aos="fade-up" type='submit'><a href="/contact-us">GET IN TOUCH &nbsp;&nbsp; <i class="fa-solid fa-arrow-right"></i></a></button>
            </div>
            
            <div className="ele-three-widget-wrap col-md-7">
                <img src={WorkTogether} alt="work-together" />
            </div>
        </div>
    </section>
  )
}

export default Ele_three