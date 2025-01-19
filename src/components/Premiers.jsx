import React, { useRef, useEffect } from 'react';
import sliderImg from '../assets/img/premier-slider.png';
import arrowSliderRight from '../assets/img/arrow-slider-right.svg';
import arrowSliderLeft from '../assets/img/arrow-slider-left.svg';
import PremiersItem from './PremiersItem';
import { useState } from 'react';

const Premiers = () => {
  const premiers = [
    {
      name: 'Времена года',
      location: 'Барвиха Luxury Village',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'суббота',
      price: '5 000',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'today',
    },
    {
      name: 'Времена года',
      location: 'Барвиха Luxury Village',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'воскресенье',
      price: '2 000',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'today',
    },
    {
      name: 'WRLD concert',
      location: 'US Florida',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'вторник',
      price: '7 9999',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'today',
    },
    {
      name: 'Времена года',
      location: 'Барвиха Luxury Village',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'суббота',
      price: '5 000',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'today',
    },
    {
      name: 'Времена года',
      location: 'Барвиха Luxury Village',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'суббота',
      price: '5 000',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'week',
    },
    {
      name: 'Времена года',
      location: 'Барвиха Luxury Village',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'суббота',
      price: '5 000',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'three',
    },
    {
      name: 'Времена года',
      location: 'Барвиха Luxury Village',
      date_number: '20',
      date_month: 'окт',
      date_year: '2024',
      date_day: 'суббота',
      price: '5 000',
      imgUrl: 'https://imgur.com/Rx2Vrfj',
      date_value: 'month',
    },
  ];
  const premiersSlider = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const premiersSlides = useRef([]);

  useEffect(() => {
    if (
      premiersSlider.current &&
      prevButton.current &&
      nextButton.current &&
      premiersSlides.current.length > 0
    ) {
      let isDragging = false;
      let startPosition = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let animationID;
      let currentIndex = 0;

      function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      }

      function startDrag(event) {
        isDragging = true;
        startPosition = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        premiersSlider.current.style.cursor = 'grabbing';
      }

      function endDrag() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -50 && currentIndex < premiersSlides.current.length - 1) {
          currentIndex += 1;
        }

        if (movedBy > 50 && currentIndex > 0) {
          currentIndex -= 1;
        }

        setPositionByIndex();
        premiersSlider.current.style.cursor = 'grab';
      }

      function moveSlider(event) {
        if (isDragging) {
          const currentPosition = getPositionX(event);
          currentTranslate = prevTranslate + currentPosition - startPosition;
        }
      }

      function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
      }

      function setSliderPosition() {
        premiersSlider.current.style.transform = `translateX(${currentTranslate}px)`;
      }

      function setPositionByIndex() {
        if (premiersSlides.current[0]) {
          const slideWidth =
            premiersSlides.current[0].clientWidth +
            parseInt(getComputedStyle(premiersSlides.current[0]).marginRight);
          currentTranslate = -currentIndex * slideWidth;
          prevTranslate = currentTranslate;
          setSliderPosition();
          updateButtons();
        }
      }

      function updateButtons() {
        prevButton.current.classList.toggle('hidden', currentIndex === 0);
        nextButton.current.classList.toggle(
          'hidden',
          currentIndex === premiersSlides.current.length - 1,
        );
      }

      prevButton.current.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex -= 1;
          setPositionByIndex();
        }
      });

      nextButton.current.addEventListener('click', () => {
        if (currentIndex < premiersSlides.current.length - 1) {
          currentIndex += 1;
          setPositionByIndex();
        }
      });

      premiersSlider.current.addEventListener('mousedown', startDrag);
      premiersSlider.current.addEventListener('mouseup', endDrag);
      premiersSlider.current.addEventListener('mouseleave', endDrag);
      premiersSlider.current.addEventListener('mousemove', moveSlider);

      premiersSlider.current.addEventListener('touchstart', startDrag);
      premiersSlider.current.addEventListener('touchend', endDrag);
      premiersSlider.current.addEventListener('touchmove', moveSlider);

      window.addEventListener('resize', setPositionByIndex);

      setPositionByIndex(); // Установка начальной позиции
      updateButtons(); // Обновление состояния кнопок
    }
  }, [premiers]);

  return (
    <section className="premiers">
      <div className="container">
        <h2 className="title">Премьеры</h2>
        <div className="premiers__slider-wrapper">
          <div ref={premiersSlider} className="premiers__slider">
            {premiers.map((item, index) => {
              return (
                <PremiersItem
                  key={index}
                  ref={(el) => (premiersSlides.current[index] = el)}
                  {...item}
                />
              );
            })}
          </div>
          <div className="slider__btns">
            <img
              ref={prevButton}
              className="slider-button slider-button-prev"
              src={arrowSliderLeft}
              alt="previous"
            />
            <img
              ref={nextButton}
              className="slider-button slider-button-next"
              src={arrowSliderRight}
              alt="next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premiers;
