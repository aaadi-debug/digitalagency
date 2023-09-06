import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer-section'>
        <div className="footer-container">
            <div className="footer-wrapper footer-contact">
                <div className="footer-contact-details col-md-6">
                    <div className="detail">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <p>+91 8829976248 <br /> contact@fameflyer.com</p>
                    </div>
                    {/* <div className="detail">
                        <i class="fa-solid fa-envelope"></i>
                        <p>27 Division St, New York <br /> 10002, United States</p>
                    </div> */}
                </div>
                <div className="footer-contact-input col-md-6">
                    <form>
                        <input type="email" placeholder='Email Address' /> 
                        <button type='submit'> <a href="">SIGN UP</a> </button>
                    </form>
                </div>
            </div>

            <div className="footer-wrapper footer-features">
                <div className="footer-about">
                    <h3>About</h3>
                    <p>We Fuel Growth through Digital Ingenuity: Get Acquainted with Our Agency's Expertise.</p>
                    <div className="social-media-links">
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
                        <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-feature-box footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="">Logo Designing</a> </li>
                        <li><a href="">Graphic Designing</a></li>
                        <li><a href="">Disgital Marketing</a></li>
                        <li><a href="">Website Development</a></li>
                        <li><a href="">Video Editing</a></li>
                    </ul>
                </div>
                <div className="footer-feature-box footer-community">
                    <h3>Community</h3>
                    <ul>
                        <li><a href="">Our Product</a></li>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Our Services</a></li>
                        <li><a href="">Company</a></li>
                        <li><a href="">What We Do?</a></li>
                    </ul>
                </div>
                <div className="footer-feature-box footer-quicklinks">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Main Services</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Our Cases</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-wrapper footer-year">
                <p>©{new Date().getFullYear()} — FameFlyer. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
