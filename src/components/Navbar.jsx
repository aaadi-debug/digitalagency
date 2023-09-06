import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import Logo from '../assets/logo1.png'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar navbar-expand-lg scrolled' : 'navbar navbar-expand-lg'}>
        <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" /></Link>
        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav "> 
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact</Link>
              </li>
              
          </ul>

          <div className="navbar-buttons">
            {/* <i class="fa-solid fa-magnifying-glass"></i>  */}
          </div>
        </div>
    </nav>
  )
}

export default Navbar