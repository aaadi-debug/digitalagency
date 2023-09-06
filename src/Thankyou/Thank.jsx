import React from 'react'

const Thank = (props) => {
  return (
    <>
      <div className="thank-wrapper">
        <p>THANKS</p>
        <h1>For {props.greet_heading} Us!</h1>
        <p>You will be responded back soon by our agent, stay tuned 🤗 </p>
        <div className="btn-div">
          <button><a href="/">TAKE ME HOME</a></button>
        </div>
      </div>
    </>
  )
}

export default Thank