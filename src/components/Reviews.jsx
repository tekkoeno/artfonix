import React, { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewUser1 from '../assets/img/review-user.svg';
import reviewUser2 from '../assets/img/review-user-2.svg';
import reviewUser3 from '../assets/img/review-user-3.svg';
import arrowSliderRight from '../assets/img/arrow-slider-right.svg';
import arrowSliderLeft from '../assets/img/arrow-slider-left.svg';
import axios from 'axios';
import { useEffect } from 'react';
import ReviewsItem from './ReviewsItem';
const settings = {
  navigation: {
    prevEl: '.reviews-button-prev',
    nextEl: '.reviews-button-next',
  },
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    // Когда экран меньше или равен 945px
    945: {
      slidesPerView: 1, // Показываем 1 слайд
    },
    // Для экранов больше 945px
    946: {
      slidesPerView: 2, // Показываем 3 слайда
    },
  },
};
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get('https://bd55002b5ca6cb03.mokky.dev/reviews');
      setReviews(data);
    } catch (error) {
      alert('Произошла ошибка при загрузке отзывов. Повторите попытку позже!');
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title">Отзывы</h2>
        <div className="reviews__wrap">
          <Swiper {...settings} modules={[Navigation]}>
            {reviews.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ReviewsItem {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="tranding-slider-control">
            <div className="reviews-button-prev slider-arrow">
              <img src={arrowSliderLeft} alt="arrow" />
            </div>
            <div className="reviews-button-next slider-arrow">
              <img src={arrowSliderRight} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
