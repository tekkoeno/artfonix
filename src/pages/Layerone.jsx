import React, { useState } from 'react';
import Premiers from '../components/Premiers';

import 'react-photo-view/dist/react-photo-view.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import calendarIcon from '../assets/img/calendar-main.svg';
import locationIcon from '../assets/img/location-main.svg';
import timeIcon from '../assets/img/time-main.svg';

import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Partners from '../components/Partners';
import AboutConcert from '../components/AboutConcert';
import Musics from '../components/Musics';
import See from '../components/See';
import Advantage from '../components/Advantage';
import Session from '../components/Session';
import OtherSession from '../components/OtherSession';
import Reviews from '../components/Reviews';
import YandexMap from '../components/YandexMap';

const Layerone = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const fetchEvent = async () => {
    try {
      const { data } = await axios.get('https://bd55002b5ca6cb03.mokky.dev/events/' + id);
      setEvents(data);
    } catch (error) {
      alert('Не удалось перейти по концерту. Повторите попытку позже');
      navigate('/');
    }
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <>
      <main className="layerone__m">
        <div className="container">
          <div className="layerone__m-info main__info--layerone">
            <h2 className="layerone__m-title info-title--layerone">{events.name}</h2>
            <p className="layerone__m-date">
              <img src={calendarIcon} alt="calendar" /> {events.full_date}
            </p>
            <div className="main__time-wrap">
              <p className="main__time-item">
                <img src={locationIcon} alt="location" />
                {events.location}
              </p>
              <p className="main__time-item">
                <img src={timeIcon} alt="time" /> {events.full_time}
              </p>
              <p className="main__time-question">?</p>
              <div className="time__question-hover">
                <p>
                  Также закладываете <span>10 минут</span> перед началом мероприятия и
                  <span>10 минут</span> на гардероб
                </p>
              </div>
            </div>

            <p className="layerone__m-text">{events.descr}</p>
            <p className="layerone__m-age">16+</p>
            <div className="layerone__m-btn">
              <button className="info-btn">Купить билеты</button>
            </div>
          </div>
        </div>
      </main>
      <Partners />
      <AboutConcert />
      <Musics />
      <See />
      <Advantage />
      <Session />
      <OtherSession />
      <Reviews />
      <YandexMap />
      <Premiers />
    </>
  );
};

export default Layerone;
