import React from 'react';
import '../css/About.css';
import gokuImage from './images/goku.jpg';

export default function About() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      <div id="About" className="aboutt">
        <a className="photo">
          <h1 className="slide-down-text">Ravi Bhuvan</h1>
          <div className="slide-up-image">
            <img src={gokuImage} alt="Goku" />
          </div>
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </a>
      </div>
    </>
  );
}
