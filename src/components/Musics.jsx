import React from 'react';
import Slider from 'react-slick';
import { musicSliderSetting } from '../presets/sliderSettings';
import musicImg1 from '../assets/img/music-img-1.png';
import musicImg2 from '../assets/img/music-img-2.png';
import musicImg3 from '../assets/img/music-img-3.png';
import musicImg4 from '../assets/img/music-img-4.png';
import musicImg5 from '../assets/img/music-img-5.png';
import musicImg6 from '../assets/img/music-img-6.png';
const Musics = () => {
  return (
    <section className="musics">
      <div className="container">
        <h2 className="title">Вы услышите</h2>

        <div className="music__slider">
          <Slider {...musicSliderSetting}>
            <div className="music__slider-item">
              <div className="music__image-container">
                <img src={musicImg1} alt="slider" />
                <p className="music__slider-text">Inside Out</p>
              </div>
            </div>
            <div className="music__slider-item">
              <div className="music__image-container">
                <img src={musicImg2} alt="slider" />
                <p className="music__slider-text">Young</p>
              </div>
            </div>
            <div className="music__slider-item">
              <div className="music__image-container">
                <img src={musicImg3} alt="slider" />
                <p className="music__slider-text">Beach House</p>
              </div>
            </div>
            <div className="music__slider-item">
              <div className="music__image-container">
                <img src={musicImg4} alt="slider" />
                <p className="music__slider-text">Kills You Slo...</p>
              </div>
            </div>
            <div className="music__slider-item">
              <div className="music__image-container">
                <img src={musicImg5} alt="slider" />
                <p className="music__slider-text">Setting Fires</p>
              </div>
            </div>
            <div className="music__slider-item">
              <div className="music__image-container">
                <img src={musicImg6} alt="slider" />
                <p className="music__slider-text">Somebody</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Musics;
