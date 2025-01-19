import React from 'react';
import eventsImg from '../assets/img/events-img.png';
import arrowBottom from '../assets/img/arrow-bottom.svg';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useCallback } from 'react';
const AboutEvents = () => {
  const [selectedOpen, setSelectedOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [events, setEvents] = useState([]);
  const [timeName, setTimeName] = useState('Сегодня');
  const [timeValue, setTimeValue] = useState('today');

  const eventTimes = [
    { name: 'Сегодня', value: 'today' },
    { name: 'Завтра', value: 'tomorrow' },
    { name: 'Неделя', value: 'week' },
    { name: 'Месяц', value: 'month' },
    { name: '3 месяца', value: 'three' },
  ];
  const onClickTime = useCallback((item) => {
    setTimeName(item.name);
    setTimeValue(item.value);
    setSelectedOpen(false);
  });
  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://bd55002b5ca6cb03.mokky.dev/premiers?date_value=${timeValue}`,
      );
      setEvents(data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, [timeValue]);
  return (
    <section className="all_events">
      <div className="container">
        <h2 className="all_title">
          <span>Только лучшие шоу</span>
          <br />в санкт-петербуге
        </h2>
        <div className="events_select-wrap">
          <p
            className="all_events-selected"
            onClick={() => setSelectedOpen((currentEl) => !currentEl)}>
            {timeName} <img src={arrowBottom} alt="arrow" />
          </p>
          <div className={`events_selected-list ${selectedOpen && 'selected-active'}`}>
            {eventTimes.map((item, index) => {
              return (
                <p onClick={() => onClickTime(item)} key={index}>
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="all_events-wrap">
          {isLoading ? (
            <div className="all_events-loader">
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_314_1740)">
                  <path
                    d="M24.5 49C27.8065 49 31.0174 48.354 34.0368 47.0764C36.9558 45.8418 39.5732 44.0713 41.8223 41.8223C44.0713 39.5732 45.8418 36.9558 47.0764 34.0368C48.354 31.0174 49 27.8065 49 24.5C49 23.5478 48.2296 22.7773 47.2773 22.7773C46.3251 22.7773 45.5547 23.5478 45.5547 24.5C45.5547 27.3424 44.9996 30.0986 43.899 32.697C42.8367 35.2044 41.3198 37.4582 39.3866 39.3914C37.4534 41.3246 35.1996 42.8463 32.6922 43.9038C30.0986 44.9996 27.3424 45.5547 24.5 45.5547C21.6576 45.5547 18.9014 44.9996 16.303 43.899C13.7956 42.8367 11.5418 41.3198 9.6086 39.3866C7.6754 37.4534 6.15372 35.1996 5.0962 32.6922C4.0004 30.0986 3.44532 27.3424 3.44532 24.5C3.44532 21.6576 4.0004 18.9014 5.10098 16.303C6.15969 13.8016 7.69193 11.5285 9.61339 9.60859C11.5311 7.68456 13.8048 6.15197 16.3078 5.09619C18.9014 4.00039 21.6576 3.44531 24.5 3.44531C25.4522 3.44531 26.2227 2.6749 26.2227 1.72266C26.2227 0.77041 25.4522 0 24.5 0C21.1935 0 17.9826 0.645996 14.9632 1.92363C12.0442 3.1582 9.42677 4.92871 7.17774 7.17773C4.92872 9.42676 3.16299 12.049 1.92842 14.9632C0.650787 17.9826 0.00479126 21.1935 0.00479126 24.5C0.00479126 27.8065 0.650787 31.0174 1.92842 34.0368C3.15821 36.9558 4.92872 39.5732 7.17774 41.8223C9.42677 44.0713 12.049 45.837 14.9632 47.0716C17.9826 48.354 21.1935 49 24.5 49Z"
                    fill="#DFFA70"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_314_1740">
                    <rect width="49" height="49" fill="white" transform="matrix(-1 0 0 1 49 0)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          ) : events.length > 0 ? (
            events.map((item, index) => (
              <div key={index} className="all_events-item">
                <div className="all_events__image">
                  <img src={eventsImg} alt="portfolio" />
                  <div className="all_event-overlay">
                    <div className="all_events-content">
                      <h2 className="all_events-title">{item.name}</h2>
                      <div className="all_events-content-wrap">
                        <p className="all_events-location">{item.location}</p>
                        <p className="all_events-date">
                          {item.date_number} / {item.date_month} / {item.date_year} |{' '}
                          {item.date_day}
                        </p>
                        <p className="all_events-price">От {item.price} руб.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="not_found">Нет концертов запланированных на данную дату</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutEvents;
