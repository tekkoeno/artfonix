import React from 'react';

const Advantage = () => {
  return (
    <section className="advantage">
      <div className="container">
        <h2 className="title">Преимущества</h2>
        <div className="advantage__wrap-top">
          <div className="advantage__item">
            <h2 className="advantage__item-number">/ 01 /</h2>
            <h3 className="advantage__item-title">Официальный сайт организатора</h3>
          </div>
          <div className="advantage__item advantage-line">
            <h2 className="advantage__item-number">/ 02 /</h2>
            <h3 className="advantage__item-title">Продуманная концепция с вниманием к мелочам</h3>
          </div>
          <div className="advantage__item advantage-line">
            <h2 className="advantage__item-number">/ 03 /</h2>
            <h3 className="advantage__item-title">Проработка каждого номера</h3>
          </div>
          <div className="advantage__item item-four">
            <h2 className="advantage__item-number">/ 04 /</h2>
            <h3 className="advantage__item-title">
              Мы первопроходцы концертов подобного формата в Москве
            </h3>
          </div>
          <div className="advantage__item advantage-line">
            <h2 className="advantage__item-number">/ 05 /</h2>
            <h3 className="advantage__item-title">
              Мы создаём что-то новое, другие - это пародия, причём уступающая нам
            </h3>
          </div>
        </div>
        <div className="advantage__wrap-bottom"></div>
        <div className="advantage__text-bottom">
          <div className="text__wrap">
            <p className="advantage__text-item">
              Если вас это не убедило, сходите на любой другой концерт, но потом вы все равно
              придёте к нам и получите настоящее удовольствие
            </p>
            <p className="advantage__attention-item">
              Внимание: остерегайтесь недобросовестных сайтов плагиаторов!!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
