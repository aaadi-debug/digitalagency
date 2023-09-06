import React, { useEffect } from 'react'
import './ele_five.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Client1 from '../../assets/home_quote_img1.png'
import Client2 from '../../assets/home_quote_img2.jpg'
import Client3 from '../../assets/home_quote_img3.jpg'
import Client4 from '../../assets/home_quote_img4.png'
import Client5 from '../../assets/home_quote_im3.jpg'
import Client6 from '../../assets/home_quote_img6.png'
import ClientCorner from '../../assets/client-corner.png'

const Ele_five = () => {
  useEffect(() => {  // for animations on scroll
    // AOS.init();
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section className="ele-five-section">
        <div className="ele-five-container">
            <div className="ele-five-widget-wrap clients-images col-md-6">
                <img src={Client1} alt="client-1" />
                <img src={Client2} alt="client-2" />
                <img src={Client3} alt="client-3" />
                <img src={Client4} alt="client-4" />
                <img src={Client5} alt="client-5" />
                <img src={Client6} alt="client-6" />
            </div>

            <div className="ele-five-widget-wrap clients-say col-md-6">
              <p data-aos="fade-up">TESTIMONIALS</p>
              <h2 data-aos="flip-up">What Our Clients Say</h2>
              <div className="client-say-silder">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner carousel-client">
                    <div class="carousel-item active">
                          <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talent, creative ability and technical knowledge. </p>
                          <div className="testimonial_title">Denis Robinson</div>
                          <div className="testimonial_sun_name">Customer</div>
                    </div>
                    <div class="carousel-item">
                        <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talent, creative ability and technical knowledge. </p>
                        <div className="testimonial_title">Silviia Garden</div>
                        <div className="testimonial_sun_name">Customer</div>
                    </div>
                    <div class="carousel-item">
                        <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talent, creative ability and technical knowledge. </p>
                        <div className="testimonial_title">Tommy Dents</div>
                        <div className="testimonial_sun_name">Customer</div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <img className='client-corner' src={ClientCorner} alt="" />

              
                    

                  

                  

              </div>
            </div>
        </div>
    </section>
  )
}

export default Ele_five