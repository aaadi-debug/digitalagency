import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Services from './components/MainServices/Services'
import ContactThank from './Thankyou/ContactThank'
import Error from './Error/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-thank' element={<ContactThank />} />

        <Route path='*' element={ <Error />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App    