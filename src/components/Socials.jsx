import React from 'react';
import telegramIcon from '../assets/img/socials-telegram.svg';
import vkIcon from '../assets/img/socials-vk.svg';
import whatsappIcon from '../assets/img/social-whatsapp.png';

const Socials = () => {
  return (
    <section class="socials">
      <div class="container">
        <div class="socials__wrap">
          <div class="socials__icons">
            <h2 class="socials__icons-title">
              А так же следите за нами <br />в социальных сетях:
            </h2>
            <div class="socials__icons-wrap">
              <a href="https://web.telegram.org/">
                <img src={telegramIcon} alt="social" />
              </a>
              <a href="https://www.whatsapp.com/?lang=ru_RU">
                <img src={vkIcon} alt="social" />
              </a>
              <a target="_blank" href="https://www.whatsapp.com/?lang=ru_RU">
                <img src={whatsappIcon} alt="social" />
              </a>
            </div>
          </div>
          <div class="socials__info">
            <h2 class="socials__info-title">Все мероприятия на одном портале!</h2>
            <p class="socials__info-text">
              Специально для вас мы подобрали мероприятия, которые будут в нашем городе в ближайший
              месяц. У нас тоолько самые интересные концерты. Все мероприятия нашего города в одном
              портале!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
