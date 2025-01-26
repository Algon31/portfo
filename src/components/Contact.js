import '../css/Contact.css';
import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const contactNo = form.querySelector('input[type="tel"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (!name || !email || !contactNo || !message) {
          alert('Please fill out all fields.');
          event.preventDefault();
        }
      });
    }
  }, []);

  return (
    <>
      <div id="Contact" className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>
            Reach Me<br />
            <span className="highlight">Here!</span>
          </h1>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <form id="contactForm" className="contact-form">
            <input type="text" className="form-input" placeholder="NAME" required />
            <input type="email" className="form-input" placeholder="EMAIL (e.g., yourname@gmail.com)" pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$" title="Please enter a valid Gmail address" required />
            <input type="tel" className="form-input" placeholder="CONTACT NO" required />
            <textarea className="form-input message-input" placeholder="MESSAGE" required></textarea>
            <div className="button-group">
              <button type="button" className="cancel-btn">CANCEL</button>
              <button type="submit" className="send-btn" onClick={() => { alert('Thank you!'); window.location.reload(); }}>SEND</button>
            </div>
          </form>

          <p className="contact-info">
            You Can Mail Me Here: <a href="mailto:ravibhuvan31@gmail.com" className="contact-info"><b>ravibhuvan31@gmail.com</b></a>
          </p>
        </div>
      </div>
    </>
  );
}
