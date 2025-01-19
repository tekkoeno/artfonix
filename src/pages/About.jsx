import React from 'react';
import Premiers from '../components/Premiers';
import Shows from '../components/Shows';
import musicImg from '../assets/img/musician.svg';

const About = () => {
  return (
    <>
      <section class="about__us">
        <div class="container">
          <h2 class="about__us-title">О нас</h2>
          <div class="about__us-wrap">
            <p class="about__us-text">
              Свободное, универсальное место для текста Свободное, универсальное место для текста
              Свободное, универсальное место для текста Свободное, универсальное место для текста
              Свободное, универсальное место для текста Свободное, универсальное место для текста
              Свободное, универсальное место для текста Свободное, универсальное место для текста
            </p>
            <p class="about__us-text">
              Свободное, универсальное место для текста Свободное, универсальное место для текста
              Свободное, универсальное место для текста Свободное, универсальное место для текста
              Свободное, универсальное место для текста Свободное, универсальное место для текста
              Свободное, универсальное место для текста Свободное, универсальное место для текста
            </p>
          </div>
        </div>
      </section>
      <Premiers />
      <section class="musicians">
        <div class="container">
          <h2 class="title">
            Музыканты <br />
            оркестра
          </h2>
          <div class="musicians__wrap">
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
            <div class="musicians__item">
              <img src={musicImg} alt="musician" />
              <h3 class="musician__item-name">Андрей Иванов</h3>
              <p class="musician__item-instrument">Скрипка</p>
            </div>
          </div>
        </div>
      </section>
      <Shows />
    </>
  );
};

export default About;
