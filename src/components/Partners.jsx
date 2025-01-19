import React from 'react';
import samsungImg from '../assets/img/samsung.svg';
import xiaomiImg from '../assets/img/xiaomi.svg';
const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <h2 className="title">
          Наши <br />
          партнеры
        </h2>
        <div className="partners__wrap">
          <div className="partners__item">
            <img src={samsungImg} alt="partner" />
            <p>
              Главный спонсор <br />
              мероприятия
            </p>
          </div>
          <div className="partners__item">
            <img src={xiaomiImg} alt="partner" />
            <p>
              Главный спонсор <br />
              мероприятия
            </p>
          </div>
          <div className="partners__item">
            <img src={samsungImg} alt="partner" />
            <p>
              Главный спонсор <br />
              мероприятия
            </p>
          </div>
          <div className="partners__item">
            <img src={xiaomiImg} alt="partner" />
            <p>
              Главный спонсор <br />
              мероприятия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
