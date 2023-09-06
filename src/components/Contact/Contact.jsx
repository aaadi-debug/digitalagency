import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import './contact.css'

import axios from 'axios';

import ContactImg from '../../assets/contact_img.jpg'

const Contact = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if(name.length === 0) {
            alert("Name has left Blank!");
        }
        else if(email.length === 0) {
            alert("Email has left Blank!");
        }
        else if(website.length === 0) {
            alert("Website has left Blank!");
        }
        else if(email.length === 0) {
            alert("Message has left Blank!");
        }
        else {
            // alert("Success");
            const url = 'http://localhost/digitalageny/contact.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('phone', phone);
            fData.append('website', website);
            fData.append('message', message);

            axios.post(url, fData)
                .then(response => console.log(response.data))
                .catch(error => alert(error));
            
            setTimeout(function() {
                navigate("/contact-thank");
            }, 1000);

        }
    }


  return (
    <>
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-section-1">
                    <h1>Contact Us</h1>
                    <div className="contact-section-1-content">
                        <a href="/">Home</a>
                        <p className='dot'></p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="contact-section-2">
                    <p>GROWTH</p>
                    <p>Find the Perfect Solution for Your Business</p>
                    <p>Discover tailored solutions to elevate your business with ease. Our team of experts will guide you through a comprehensive selection process, ensuring you find the perfect solution that aligns with your unique needs and drives remarkable results. Experience a transformative journey towards success, starting with finding the ideal solution for your business.</p>
                </div>

                <div className="contact-section-3">
                    <img src={ContactImg} alt="contact-image" />
                </div>

                <div className="contact-section-4">
                    <div className="col-md-6 contact-section-4-wrapper-1">
                        <p>GET IN TOUCH</p>
                        <h2>Contact Us</h2>
                        <p className='contact-section-4-wrapper-1-para'>Let's Connect and Make Magic Happen: Reach Out to Us Today! You do not need to worry about anything. Our 24*7 support will assist you thoroughly.</p>

                        <div className="contact-details">
                            <h5>Phone: </h5>
                            <p className='blue-number'>+91 8829976248</p>

                            <h5>Send Email: </h5>
                            <p>contact@fameflyer.com</p>            
                            <p>support@fameflyer.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 contact-section-4-wrapper-2">
                        <h2>Drop Us a Line</h2>
                        <p>Start a Conversation and fuel your Possibilities of success!.</p>

                        <form>
                            <div className="input-div">
                                <input type="text" name='first_name' placeholder='Your Name*' value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="email" name='email' placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-div">
                                <input type="text" name='phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <input type="text" name='website' placeholder='Website*' value={website} onChange={(e) => setWebsite(e.target.value)} /> 
                            </div>
                            <div className="message-div">
                                <textarea name='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <div className="btn-div">
                                <input type='button' name='submit' onClick={handleSubmit} value="SEND MESSAGE" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="contact-section-5">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.691016339475!2d76.86666717468553!3d28.428578793314756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6ad5abdad98b%3A0xeb13a7d0eb14cc49!2sDronacharya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1683485068636!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>

            </div>
        </section>
    </>
  )
}

export default Contact