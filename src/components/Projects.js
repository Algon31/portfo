import '../css/Project.css';
import React from 'react';

export default function Projects() {
  return (
    <>
      <div id="Projects" className="project stroke-shadow">
        Projects
      </div>

      <ul className="cards">
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--fence"></div>
            <div className="card__content">
              <div className="card__title">Weather App</div>
              <p className="card__text">
                My weather app is a dynamic and user-friendly tool that fetches real-time weather data using API calls and JavaScript. It provides users with mostly accurate and up-to-date weather conditions such as temperature, humidity, wind speed, and more for any desired location. By seamlessly integrating with a weather API, your app ensures reliability and enhances user experience with a clean and interactive interface.
              </p>
              <a href="https://algon31.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                <button className="btnn">
                  <span>Link</span>
                </button>
              </a>
            </div>
          </div>
        </li>

        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--river"></div>
            <div className="card__content">
              <div className="card__title">Yet To Make</div>
              <p className="card__text">Yet To Make.....</p>
              <a href="#">
                <button className="btnn">
                  <span>Link</span>
                </button>
              </a>
            </div>
          </div>
        </li>

        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--record"></div>
            <div className="card__content">
              <div className="card__title">Yet To Make</div>
              <p className="card__text">Yet To Make.....</p>
              <a href="#">
                <button className="btnn">
                  <span>Link</span>
                </button>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
