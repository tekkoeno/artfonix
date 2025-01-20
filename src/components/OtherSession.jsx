import React from 'react';
import { Link } from 'react-router-dom';

const OtherSession = () => {
  return (
    <section className="other__session">
      <div className="container">
        <h2 className="title">Другие сеансы</h2>
        <div className="other__session-wrap">
          <div className="other__session-item session__item-header">
            <div className="other__session-info--mobile">
              <div className="session__item-data--mobile">
                <p className="session__item-data">21</p>
                <p className="session__item-month">окт / 2024</p>
                <p className="session__item-time">19:00</p>
              </div>
              <div className="session__item-info--mobile">
                <p className="session__item-location">Барвиха Luxury Village</p>
                <p className="session__item-price">от 5000 руб.</p>
              </div>
            </div>

            <p className="session__item-data">21 октября</p>
            <p className="session__item-time">19:00</p>

            <p className="session__item-location">Барвиха Luxury Village</p>
            <p className="session__item-price">от 5000 руб.</p>
            <Link to="/thanks">
              <button className="session__item-btn">Купить билеты</button>
            </Link>
          </div>
          <div className="other__session-item">
            <div className="other__session-info--mobile">
              <div className="session__item-data--mobile">
                <p className="session__item-data">21</p>
                <p className="session__item-month">окт / 2024</p>
                <p className="session__item-time">19:00</p>
              </div>
              <div className="session__item-info--mobile">
                <p className="session__item-location">Барвиха Luxury Village</p>
                <p className="session__item-price">от 5000 руб.</p>
              </div>
            </div>

            <p className="session__item-data">21 октября</p>
            <p className="session__item-time">19:00</p>

            <p className="session__item-location">Барвиха Luxury Village</p>
            <p className="session__item-price">от 5000 руб.</p>
            <Link to="/thanks">
              <button className="session__item-btn">Купить билеты</button>
            </Link>
          </div>
          <div className="other__session-item">
            <div className="other__session-info--mobile">
              <div className="session__item-data--mobile">
                <p className="session__item-data">21</p>
                <p className="session__item-month">окт / 2024</p>
                <p className="session__item-time">19:00</p>
              </div>
              <div className="session__item-info--mobile">
                <p className="session__item-location">Барвиха Luxury Village</p>
                <p className="session__item-price">от 5000 руб.</p>
              </div>
            </div>

            <p className="session__item-data">21 октября</p>
            <p className="session__item-time">19:00</p>

            <p className="session__item-location">Барвиха Luxury Village</p>
            <p className="session__item-price">от 5000 руб.</p>
            <button className="session__item-btn sold-btn">SOLD OUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherSession;
