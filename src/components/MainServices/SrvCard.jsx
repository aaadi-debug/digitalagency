import React from 'react'

const SrvCard = (props) => {
  return (
    <>
        <div className="srv-card">
            <img src={props.src} alt="srv-image" />
            <h4>{props.heading}</h4>
            <p>{props.para_cont}</p>
        </div>
    </>
  )
}

export default SrvCard