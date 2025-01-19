import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../assets/img/events-arrow.svg';

const EventsItem = ({
  id,
  index,
  handleAcc,
  name = 'Неизвестное событие', // Значение по умолчанию
  date_number = '00', // Значение по умолчанию
  date = 'Месяц', // Значение по умолчанию
  date_time = '00:00', // Значение по умолчанию
  location = 'Неизвестное место', // Значение по умолчанию
  price = '0', // Значение по умолчанию
  activeIndex,
}) => {
  return (
    <Link to={`/event/${id}`}>
      <div
        onClick={() => handleAcc(index)}
        className={`event-item ${activeIndex === index ? 'active' : ''}`}>
        <div className="event-info">
          <div className="event-date">
            <p className="event-number">{date_number}</p>
            <p className="event-month">{date}</p>
            <p className="event-time">{date_time}</p>
          </div>
          <div className="event-title">
            <p>{name}</p>
          </div>
          <div className="event__location-wrap">
            <p className="event__location-title">{name}</p>
            <p className="event-location">{location}</p>
            <p className="event-price">ОТ {price} РУБ.</p>
            <img src={arrow} alt="arrow-right" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventsItem;
