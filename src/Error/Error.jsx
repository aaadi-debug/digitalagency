import React from 'react'
import './erroe.css'

const Error = () => {
  return (
    <>
        <section className="error-section">
            <div className="error-container">
                <div className="error-wrapper">
                    <h1> 
                        <span>4</span> 
                        <div class="planet-wrapper">
                            <div className="planet"></div>
                            <div className="planet-ring"></div>
                        </div>
                        <span>4</span> 
                    </h1>
                    <h2>Sorry We Can't Find That Page!</h2>
                    <p>The page you are looking for was moved, removed, renamed or never existed.</p>
                    <div className="btn-div">
                        <button><a href="/">TAKE ME HOME</a></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Error