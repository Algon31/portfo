import React from 'react';
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className="flexi">
        <nav className="mask">
          <a href="#" className="welcome">Welcome to My Portfolio</a>
          <ul className="list">
            <li><a href="#About">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
          <button className="menu ml-0">Menu</button>
        </nav>
      </div>
    </>
  );
}
