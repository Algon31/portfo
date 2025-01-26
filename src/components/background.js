import '../css/Styles.css'

import React from 'react'

export default function background() {
  const circleCount = 100;

  // Create an array with the desired number of elements
  const circles = Array.from({ length: circleCount });

  return (
    <>

    <div className="container">
      {circles.map((_, index) => (
        <div key={index} className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
    </div>
    </>
  )
}
