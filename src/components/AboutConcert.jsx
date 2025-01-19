import React from 'react';
import Slider from 'react-slick';
import playBtn from '../assets/img/play-btn.png';
import aboutConcertImg from '../assets/img/about__concert-img.png';
import lineKupon from '../assets/img/line-kupon.svg';
import sliderAbout from '../assets/img/slider-about.png';
import { aboutSliderSetting } from '../presets/sliderSettings';
const AboutConcert = () => {
  return (
    <section className="about__concert">
      <div className="container">
        <h2 className="title about__title">О концерте</h2>
        <div className="about__concert-video">
          <img className="play-btn" src={playBtn} alt="play" />
          <img className="about__concert-img" src={aboutConcertImg} alt="about-img" />
        </div>
        <h2 className="about__subtitle">Завораживающее шоу</h2>
        <p className="about__text">
          Тектс текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст
        </p>
        <p className="about__slider-title">Другие видео концерта</p>
        <div className="about__slider">
          <Slider {...aboutSliderSetting}>
            <div className="about__slider-item">
              <div className="about__image-container">
                <img className="play-btn about-concerts" src={playBtn} alt="play" />
                <img className="image" src={sliderAbout} alt="slider" />
              </div>
            </div>
            <div className="about__slider-item">
              <div className="about__image-container">
                <img className="play-btn about-concerts" src={playBtn} alt="play" />
                <img className="image" src={sliderAbout} alt="slider" />
              </div>
            </div>
            <div className="about__slider-item">
              <div className="about__image-container">
                <img className="play-btn about-concerts" src={playBtn} alt="play" />
                <img className="image" src={sliderAbout} alt="slider" />
              </div>
            </div>
            <div className="about__slider-item">
              <div className="about__image-container">
                <img className="play-btn about-concerts" src={playBtn} alt="play" />
                <img className="image" src={sliderAbout} alt="slider" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="about__frame">
          <img className="line-border" src={lineKupon} alt="line" />
          <div className="about__concert-info">
            <div>
              <div className="concert__info-wrap">
                <div className="concert__info-left">
                  <span>СКИДКА</span>
                  <p>по промокоду</p>
                  <span>1 8 0 2</span>
                </div>
                <div className="concert__info-right">
                  <span>10%</span>
                  <p>
                    Действует до <br />
                    20 сентября.
                  </p>
                </div>
              </div>
              <p className="about__concert-offer">Успей купить со скидкой!</p>
            </div>
          </div>
        </div>
        <div className="about__concert-btn">
          <button>Перейти к сеансам</button>
        </div>
      </div>
    </section>
  );
};

export default AboutConcert;
