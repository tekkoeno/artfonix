import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import seeImg1 from '../assets/img/see-img-1.png';
import seeImg2 from '../assets/img/see-img-2.png';
import seeImg3 from '../assets/img/see-img-3.png';
import arrowLeft from '../assets/img/arrow-slider-left.svg';
import arrowRight from '../assets/img/arrow-slider-right.svg';
const See = () => {
  return (
    <section className="see">
      <div className="container">
        <h2 className="title">Вы увидите</h2>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.see-button-next',
              prevEl: '.see-button-prev',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1560: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, EffectCoverflow]} // Подключаем модули
          >
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={seeImg1}>
                  <img src={seeImg1} alt="see" />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={seeImg2}>
                  <img src={seeImg2} alt="see" />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={seeImg3}>
                  <img src={seeImg3} alt="see" />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={seeImg1}>
                  <img src={seeImg1} alt="see" />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={seeImg2}>
                  <img src={seeImg2} alt="see" />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={seeImg3}>
                  <img src={seeImg3} alt="see" />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="tranding-slider-control">
          <div className="see-button-prev slider-arrow">
            <img src={arrowLeft} alt="arrow" />
          </div>
          <div className="see-button-next slider-arrow">
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default See;
