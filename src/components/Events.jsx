import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import EventsItem from './EventsItem';

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get('https://bd55002b5ca6cb03.mokky.dev/events');
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAcc = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <section className="events">
      <div className="container">
        <h2 className="title">
          БЛИЖАЙШИЕ
          <br />
          КОНЦЕРТЫ
        </h2>
        <div className="event">
          <div className="event-list">
            {events.map((item, index) => {
              return (
                <EventsItem
                  handleAcc={handleAcc}
                  key={index}
                  index={index}
                  {...item}
                  activeIndex={activeIndex}
                />
              );
            })}
          </div>
        </div>
        <Link to="/about_events">
          <button className="event-btn">
            все <br />
            концерты
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Events;
