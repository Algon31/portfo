import React from 'react';
import '../css/Footer.css';
// import 'ionicons/css/ionicons.min.css';
const insagram = "https://www.instagram.com/ravibhuvan31/";
const github = "https://github.com/Algon31";
const twitter = "https://x.com/goodfeelzz";
const linkedin ="https://www.linkedin.com/in/ravi-bhuvan-985399286/";

export default function Footer() {
  return (
    <>
      <div className="foot">

        {/* Hello from footer */}
        <div className="footer-basic">
          <footer>
            {/* <div className="list-inline">
              <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="icon ion-social-linkedin"></i></a>
              <a href={github} target="_blank" rel="noopener noreferrer"><i className="icon ion-social-github"></i></a>
              <a href={insagram} target="_blank" rel="noopener noreferrer"><i className="icon ion-social-instagram"></i></a>
              <a href={twitter} target="_blank" rel="noopener noreferrer"><i className="icon ion-social-twitter"></i></a>
            </div> */}
            <ul className="list-inline">
              <li className="list-inline-item"><a href={linkedin}>LinkedIn</a></li>
              <li className="list-inline-item"><a href={insagram}>Instagram</a></li>
              <li className="list-inline-item"><a href={github}>GitHub</a></li>
              <li className="list-inline-item"><a href={twitter}>X (formarly twitter)</a></li>
              {/* <li className="list-inline-item">Terms</li>
              <li className="list-inline-item">Privacy Policy</li> */}
            </ul>
            <p className="copyright">Ravi Bhuvan © 2024</p>
          </footer>
        </div>
      </div>
    </>
  );
}
