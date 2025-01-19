import React from 'react';

const Feedback = () => {
  return (
    <blockquote class="feedback">
      <div class="container">
        <div class="feedback__wrap">
          <div class="feedback__title-wrap">
            <h2 class="feedback__title">Подпишись на рассылку</h2>
            <h3 class="feedback__subtitle">
              и получите скидку <span>10% на все шоу!</span>
            </h3>
          </div>
          <div class="feedback__form-wrap">
            <p class="feedback__form-title">
              Будьте в курсе всех наших акций, премьер <br />и специальных предложений.
            </p>
            <form class="feedback__form-item">
              <input class="feedback__form-input" type="email" placeholder="Ваш e-mail" />
              <button type="submit">Вступить</button>
            </form>
            <div class="feedback__pass-checkbox">
              <label class="checkbox-container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              Я согласен(-на) на обработку персональных и ознакомился(-лась)
              <br />с Политикой конфиденциальности.
            </div>
          </div>
        </div>
      </div>
    </blockquote>
  );
};

export default Feedback;
