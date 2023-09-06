import React from 'react'
import './home.css'
import Ele_one from '../Elementor1/Ele_one'
import Ele_two from '../Elementor2/Ele-two'
import Ele_three from '../Elementor3/Ele_three'
import Ele_five from '../Elementor5/Ele_five'

const Home = () => {
  return (

    <div>
      <section className='elementor-section'>
        <div className="elementor-container">
          <div className="elementor-heading">Digital Agency</div>

          <div class="elementor-widget-container">
            <div class="typed_widget">
              <span class="typing-effect-strings" data-text="Services">Services</span>
              {/* <span class="typing-effect-strings">Services</span>
              <span class="typing-effect-strings">Services</span> */}
            </div>

            <div className="para_widget"> Do you know what it takes to grow you <br/> online? Do you want to grow?</div>
          </div>

          <div className="elementor-contact-button">
            <button type='submit'><a href="/contact-us">CONTACT TODAY</a></button>
          </div>
        </div>
      </section>
      <Ele_one />
      <Ele_two />
      <Ele_three />
      <Ele_five />
    </div>


    
  )
}

export default Home