import React, { useEffect } from 'react'
import './ele_one.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Img1 from '../../assets/SEO-Consultancy.png'
import Img2 from '../../assets/Competitor-Analysis.png'
import Img3 from '../../assets/Social-Media-Marketing.png'

const Ele_one = () => {
    useEffect(() => {  // for animations on scroll
        // AOS.init();
        AOS.init({
          offset: 100,
          duration: 400,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
      
  return (
    <section className='ele-section'>
        <div className="ele-container container">
            {/* <div className="row"> */}
                <div className="ele-widget-wrap col-md-4">
                    <figure>
                        <img data-aos="zoom-in" src={Img1} alt="1" />
                        <p>.01</p>
                    </figure>
                    <div className="ele-widget-content">
                        <h4>Video Editing</h4>
                        <p>Create or improve your videos with video editing and post-production services.</p>
                    </div>
                    <a className='ele-widget-btn' type='submit'>READ MORE <i class="fa-solid fa-caret-right"></i> </a>
                </div>

                <div className="ele-widget-wrap col-md-4">
                    <figure>
                        <img data-aos="zoom-in" src={Img2} alt="2" />
                        <p>.02</p>
                    </figure> 
                    <div className="ele-widget-content">
                        <h4>Graphic Designing</h4>
                        <p>We specializes in crafting unique digital designs to make your business stand out. </p>
                    </div>
                    <a className='ele-widget-btn' type='submit'>READ MORE <i class="fa-solid fa-caret-right"></i> </a>
                </div>

                <div className="ele-widget-wrap col-md-4">
                    <figure>
                        <img data-aos="zoom-in" src={Img3} alt="3" />
                        <p>.03</p>
                    </figure>
                    <div className="ele-widget-content">
                        <h4>Digital Marketing</h4>
                        <p>Drive Online Success and Skyrocket Your Brand's Reach with Expert Digital Marketing Services.</p>
                    </div>
                    <a className='ele-widget-btn' type='submit'>READ MORE <i class="fa-solid fa-caret-right"></i> </a>
                </div>
            {/* </div> */}
            {/* <i class="fa-solid fa-arrow-right"></i> */}
        </div>
    </section>
  )
}

export default Ele_one