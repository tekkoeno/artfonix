import React from 'react';
import { Link } from 'react-router-dom';
import sessionImg from '../assets/img/session-img.png';
import Socials from './Socials';
const Session = () => {
  return (
    <section className="session">
      <div className="container">
        <h2 className="title">Сеансы</h2>
      </div>
      <h2 className="session__info-title session__info--mobile">
        Название Шоу и мероприятия
        <p className="title__age">16+</p>
      </h2>
      <div className="session__wrap">
        <div className="container">
          <div className="session__wrap-item">
            <div className="session__item">
              <img src={sessionImg} alt="session" />
              <div className="session__info-wrap">
                <h2 className="session__info-title">
                  Название Шоу и мероприятия <br />в две строки
                  <p className="title__age">16+</p>
                </h2>
                <div className="session__info-details">
                  <p>20 октября</p>
                  <p>19:00</p>
                  <p>Барвиха Luxury Village</p>
                </div>
                <div className="session__info-buy">
                  <p className="session__info-price">От 5 000 руб.</p>
                  <Link to="/thanks">
                    <button className="session__info-btn">КУПИТЬ БИЛЕТ</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="session__info-btn--mobile">
        <button className="session__info-btn">КУПИТЬ БИЛЕТ</button>
      </div>
    </section>
  );
};

export default Session;
