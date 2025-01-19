import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import playBtn from '../assets/img/play-btn.svg';
import showImg from '../assets/img/shows-img.png';
import sliderImg2 from '../assets/img/shows-img-2.png';
import sliderImg3 from '../assets/img/shows-img-3.png';
import sliderImg1 from '../assets/img/see-img-slider-1.png';
import showBtnSlider from '../assets/img/button-slide.svg';
import { useState } from 'react';
import { useEffect } from 'react';
const Shows = () => {
  const shows = [
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
    {
      name: 'Времена года',
      url: 'https://www.youtube.com/watch?v=1h-N0Tv8zxM',
    },
  ];
  const [width, setWidth] = useState(window.innerWidth);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl('');
  };
  return (
    <section className="shows">
      <div className="container">
        <h2 className="title">Наши шоу</h2>
        {width > 720 && (
          <div className="shows__wrap">
            {shows.map((item, index) => {
              return (
                <div key={index} className="shows__item">
                  <div className="shows__item-info">
                    <h2 className="shows__item-title">{item.name}</h2>
                    <p className="shows__item-subtitle">Подробнее</p>
                  </div>
                  <div className="shows__img-container">
                    <a href={item.url} className="tube">
                      <img className="shows__btn" src={playBtn} alt="play-btn" />
                    </a>
                    <img className="shows__img-item" src={showImg} alt="shows img" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {width <= 720 && (
          <div className="show__swiper">
            <div className="swiper-wrapper">
              <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                pagination={{
                  el: '.swiper-pagination', // Указываем кастомный класс для пагинации
                  clickable: true,
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]} // Добавляем модули
              >
                {shows.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="swiper-slide">
                        <div className="show__overlay">
                          <h2 className="show__overlay-title">{item.name}</h2>
                          <a href={item.url} className="tube">
                            <img className="show__overlay-btn" src={showBtnSlider} alt="play-btn" />
                          </a>
                          <p className="show__overlay-more">Подробнее</p>
                        </div>
                        <img className="show__swiper-img" src={sliderImg1} alt="shows" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shows;
