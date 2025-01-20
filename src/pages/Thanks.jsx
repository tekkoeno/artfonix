import React from 'react';
import { useState } from 'react';
import Socials from '../components/Socials';

const Thanks = () => {
  const [copied, setCopied] = useState(false);

  const onClickCopy = () => {
    const textToCopy = 'Lookism';
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Ошибка копирования: ', err);
      });
  };

  return (
    <>
      <section className="thanks">
        <div className="container">
          <h1 className="thanks__title">Спасибо за покупку!</h1>
          <h2 className="thanks__subtitle">
            Ваши билеты отправлены на почту, <br />
            указанную при покупке
          </h2>
          <p className="thanks__text">
            Если письма нет во “Входящих”, проверьте “Промоакции” <br />и “Спам” - письмо могло
            попасть туда по ошибке.
          </p>
          <div className="thanks__card-wrap">
            <div className="thanks__card">
              <h2 className="thanks__card-title">
                Поделитесь ссылкой с друзьями и друг получит <br />
                <span>промокод на скидку -15%</span>
              </h2>
              <div className="thanks__card-btn">
                <button onClick={onClickCopy} className={`thanks__btn ${copied ? 'copied' : ''}`}>
                  {copied ? 'Ссылка скопирована' : 'СКОПИРОВАТЬ ССЫЛКУ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Socials />
    </>
  );
};

export default Thanks;
