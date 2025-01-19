import React, { forwardRef } from 'react';
import sliderImg from '../assets/img/premier-slider.png';

const PremiersItem = forwardRef(
  ({ imgUrl, name, location, date_number, date_month, date_year, date_day, price }, ref) => {
    return (
      <div ref={ref} className="premiers__slider-item">
        <div className="image-container">
          <img src={sliderImg} alt="portfolio" />
          <div className="overlay">
            <div className="content">
              <h2 className="premiers__slider-title">{name}</h2>
              <p className="premiers__slider-location">{location}</p>
              <p className="premiers__slider-date">
                {date_number} / {date_month} / {date_year} | {date_day}
              </p>
              <p className="premiers__slider-price">От {price} руб.</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default PremiersItem;
