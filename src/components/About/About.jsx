import React from 'react'
import './about.css'

import CardImg1 from '../../assets/about_card_1.png'
import CardImg2 from '../../assets/about_card_2.png'
import CardImg3 from '../../assets/about_card_3.png'
import AboutWebTrafficImg from '../../assets/about_web_traffic.jpg'
import FreshIdeaImg from '../../assets/about_fresh_idea.png'

const About = () => {
  return (
    <>
        <section className="about-section">
            <div className="about-container">
                <div className="about-section-1">
                        <h1>About Us</h1>
                        <div className="about-section-1-content">
                            <a href="/">Home</a>
                            <p className='dot'></p>
                            <p>About Us</p>
                        </div>
                </div>
                
                <div className="about-section-2">
                    <div className="about-card about-section-2-wrapper-1">
                        <img src={CardImg1} alt="card-image-1" />
                        <div className="about-card-content">
                            <h4>Digital Marketing</h4>
                            <p>Drive Online Success and Skyrocket Your Brand's Reach with Expert Digital Marketing Services.</p>
                        </div>
                    </div>
                    <div className="about-card about-section-2-wrapper-2">
                        <img src={CardImg2} alt="card-image-2" />
                        <div className="about-card-content">
                            <h4>Graphic Designing</h4>
                            <p>We specializes in crafting unique digital designs to make your business stand out.</p>
                        </div>
                    </div>
                    <div className="about-card about-section-2-wrapper-3">
                        <img src={CardImg3} alt="card-image-3" />
                        <div className="about-card-content">
                            <h4>Video Editing</h4>
                            <p>Create or improve your videos with video editing and post-production services.</p>
                        </div>
                    </div>
                </div>

                <div className="about-section-3">
                    <div className="col-md-6 about-section-3-wrapper-1">
                        <h5>ABOUT US</h5>
                        <h2>Boosts Your Website Traffic!</h2>
                        <p className='about-section-3-para'>Unlocking Digital Potential: Empowering Businesses through Innovative Solutions.</p>
                        <p>Welcome to FameFlyer, where we harness the power of technology and creativity to drive you forward. With a passion for innovation and a deep understanding of the digital landscape, we are committed to helping you navigate the ever-evolving realm of online marketing and achieve your goals.
                        </p>

                        <div className="btn-div">
                                <button><a href="">OUR SERVICES</a></button>
                        </div>
                    </div>
                    <div className="col-md-6 about-section-3-wrapper-2">
                        <img src={AboutWebTrafficImg} alt="website-traffic-iamge" />
                    </div>
                </div>

                <div className="about-section-4">
                    <p className='about-section-4-top_para'>WHAT WE DO</p>
                    <h2>Fresh Ideas for Every Business</h2>
                    <div className="about-section-4-wrapper">
                        <div className="col-md-6 about-section-4-wrapper-1">
                            <img src={FreshIdeaImg} alt="business-idea-image" />
                        </div>
                        <div className="col-md-6 about-section-4-wrapper-2 mt-5">
                            <div className="percentage-growth-div">
                                <div className="progress-div">
                                    <div className="circle">
                                        <div className="circle-layer layer-1">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="circle-layer layer-2">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="circle-inside-content"> 76% </div>
                                    </div>
                                    <br />
                                </div>
                                <div className="percentage-content-div">
                                    <p>Creative Approach</p>
                                    <p>Unleashing Boundless Creativity: Elevating Your Digital Presence with Unforgettable Magic.</p>
                                </div>
                            </div>

                            <div className="percentage-growth-div">
                                <div className="progress-div">
                                    <div className="circle">
                                        <div className="circle-layer layer-1">
                                            <div className="o-clr fill"></div>
                                        </div>
                                        <div className="circle-layer layer-2">
                                            <div className="o-clr fill"></div>
                                        </div>
                                        <div className="o-clr circle-inside-content"> 76% </div>
                                    </div>
                                </div>
                                <div className="percentage-content-div">
                                    <p className='o-clr'>Guaranteed Success</p>
                                    <p>Your Success, Our Commitment: Guaranteed Digital Growth and Unleashing Your Business Potential.</p>
                                </div>
                            </div>

                            <div className="percentage-growth-div">
                                <div className="progress-div">
                                    <div className="circle">
                                        <div className="circle-layer layer-1">
                                            <div className="g-clr fill"></div>
                                        </div>
                                        <div className="circle-layer layer-2">
                                            <div className="g-clr fill"></div>
                                        </div>
                                        <div className="g-clr circle-inside-content"> 76% </div>
                                    </div>
                                </div>
                                <div className="percentage-content-div">
                                    <p className='g-clr'>Healthy Results</p>
                                    <p>Fueling Digital Success: Transforming your Goals into Tangible, Healthy Results. Powering Your Digital Evolution: Achieving Optimal Results for a Thriving Online Presence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-section-5"></div>
                <div className="about-section-6"></div>
                <div className="about-section-7"></div>
                <div className="about-section-8"></div>
            </div>
        </section>
    </>
  )
}

export default About