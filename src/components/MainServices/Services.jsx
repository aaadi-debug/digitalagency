import React from 'react'
import './services.css'
import SrvCard from './SrvCard'

import ServicesImg from '../../assets/services_img.png'
import BoostImg1 from '../../assets/boost_1.png'
import BoostImg2 from '../../assets/boost_2.png'
import SrvImg1 from '../../assets/services_1.png'
import SrvImg2 from '../../assets/services_2.png'
import SrvImg3 from '../../assets/services_3.png'
import SrvImg4 from '../../assets/services_4.png'
import SrvImg5 from '../../assets/services_5.png'
import SEOImg from '../../assets/seo_img.png'

const Services = () => {
  return (
    <>
      <section className="services-section">
        <div className="services-container">
          <div className="contact-section-1">
                      <h1>Services</h1>
                      <div className="contact-section-1-content">
                          <a href="/">Home</a>
                          <p className='dot'></p>
                          <p>Services</p>
                      </div>
                  </div>
          </div>

          <div className="services-section-2">
            <div className="col-md-6 services-section-2-wrapper-1">
              <img src={ServicesImg} alt="services-image" />
            </div>
            <div className="col-md-6 services-section-2-wrapper-2">
              <p>BEST FOR YOU</p>
              <h2>Boosts Your Website Traffic!</h2>
              <p className='services-section-2-para'>Digital marketing holds the key to unlocking exponential growth for businesses. By harnessing its power, organizations can reach wider audiences, cultivate meaningful connections, and propel their success to new heights.</p>
              <div className="best-for-you">
                <div className="best-div">
                  <img src={BoostImg1} alt="bosst-traffic" />
                  <h3>Media Promotion</h3>
                  <p>Unleash Your Brand's Brilliance: Amplify Your Message with Irresistible Media Promotion!</p>
                </div>
                <div className="best-div">
                  <img src={BoostImg2} alt="bosst-traffic" />
                  <h3>Infographics Content</h3>
                  <p>Visualize the Story: Unveiling Insights and Information through Captivating Infographics.</p>
                </div>
              </div>

              <div className="btn-div">
                <button><a href="">DISCOVER MORE</a></button>
              </div>
            </div>
          </div>

          <div className="services-section-3">
            <div className="services-section-3-wrapper">
              <div className="col-md-4 services-section-3-wrapper-1">
                <div className="srv-heading">
                  <p>OUR SERVICES</p>
                  <h2>Let’s Check Our Services</h2>
                </div>
                <SrvCard 
                  src={SrvImg1} 
                  heading="Logo Desinging"
                  para_cont="Transforming Concepts into Memorable Symbols: Elevate Your Brand with our Professional Logo Design Services." 
                />
              </div>
              <div className="col-md-4 services-section-3-wrapper-2">
                <SrvCard 
                  src={SrvImg2} 
                  heading="Graphic Designing"
                  para_cont="From Vision to Vibrancy: Unleash the Power of Visual Communication with our Cutting-edge Graphic Design Services."
                 />
                <SrvCard 
                  src={SrvImg3} 
                  heading="Digital Marketing" 
                  para_cont="Ignite Your Online Presence: Dominate the Digital Landscape with our Dynamic Digital Marketing Solutions."
                />
              </div>
              <div className="col-md-4 services-section-3-wrapper-3">
                <SrvCard 
                  src={SrvImg4} 
                  heading="Website Development" 
                  para_cont="Building Digital Masterpieces: Transforming Ideas into Seamless Online Experiences with our Expert Website Development Services."
                />
                <SrvCard 
                  src={SrvImg5} 
                  heading="Video Editing" 
                  para_cont="Unleash the Power of Visual Storytelling: Elevate Your Videos with our Professional Video Editing Services."
                />
              </div>
            </div>
          </div>

          <div className="services-section-4">
            <div className="col-md-6 services-section-4-wrapper-1">
              <p>ANALYSIS</p>
              <h2>Get Free Consulting?</h2>
              <p className='services-section-4-para'>We are providing free consulting services related to you brand, business, how to? things or any kind of digital growth you want to discuss.</p>
              
              <form>
                <div className="input-div">
                    <input type="text" placeholder='Your Name*' />
                    <input type="email" placeholder='Email*' />
                </div>
                <div className="input-div">
                  <input type="text" placeholder='Phone' />
                  <input type="text" placeholder='Website*' /> 
                </div>
                <button type='submit'><a href="">CHECK NOW</a></button>
              </form>
            </div>

            <div className="col-md-6 services-section-4-wrapper-2">
              <img src={SEOImg} alt="seo-image" />
            </div>
          </div>

      </section>
    </>
  )
}

export default Services