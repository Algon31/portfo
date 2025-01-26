import '../css/Aboutme.css'; 
import React from 'react';
import reactimg from './images/logo512.png';
import cprogram from './images/c program.png';
import python1 from './images/py.png';

const react = "https://react.dev/";
const python = "https://www.python.org/";
const c_prgm = "https://www.cprogramming.com/";

export default function Aboutme() {
  return (
    <>
      <div id="Skills" className='body-abtme'>
        <h2 className='skills'>
          <div className="grid1">
            <div className="stroke-shadow my-3">Skills</div>
          </div>
        </h2>
        <div className="grid-container slide-up-image">
          <div className="nft">
            <div className='main'>
              <a href={react} target="_blank" rel="noopener noreferrer">
                <img className="tokenImage" src={reactimg} alt="React" />
              </a>
              <h2>React</h2>
              <p className="description">Just some basic knowledge on frontend</p>
            </div>
          </div>
          <div className="nft">
            <div className='main'>
              <a href={c_prgm} target="_blank" rel="noopener noreferrer">
                <img className="tokenImage" src={cprogram} alt="C Programming" />
              </a>
              <h2>C Programming</h2>
              <p className="description">Learned Some Data Structures here and there</p>
            </div>
          </div>
          <div className="nft">
            <div className='main'>
              <a href={python} target="_blank" rel="noopener noreferrer">
                <img className="tokenImage" src={python1} alt="Python" />
              </a>
              <h2>Python</h2>
              <p className="description">Not fully a programmer, but I can do something</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
