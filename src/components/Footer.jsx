import React from 'react';
import footerLogo from '../assets/img/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__info-wrap">
            <div className="footer__info">
              <div className="footer__info-item">
                <h2 className="footer__item-title">О компании</h2>
                <ul className="footer__item-list">
                  <li>
                    <a href=""> О нас</a>
                  </li>
                  <li>
                    <a href="">Контакты</a>
                  </li>
                  <li>
                    <a href="">Репертуар</a>
                  </li>
                  <li>
                    <a href="">+7 999 999 99 99</a>
                  </li>
                </ul>
              </div>
              <div className="footer__info-item">
                <h2 className="footer__item-title">Помощь</h2>
                <ul className="footer__item-list">
                  <li>
                    <a href="">Возврат билетов</a>
                  </li>
                  <li>
                    <a href="">Как купить билет</a>
                  </li>
                  <li>
                    <a href="">Вопросы и ответы</a>
                  </li>
                  <li>
                    <a href="">Пользовательское соглашение</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__inn">
              <p className="footer__inn-text">ИНН 999 999 999 999</p>
              <p className="footer__inn-text">ОГРН 999 999 999 999</p>
              <p className="footer__inn-text">КПП 999 9999 9999 999</p>
              <p className="footer__inn-text">ООО “Артфоникс”</p>
            </div>
          </div>
          <div className="footer__rights-wrap">
            <div className="footer__inn">
              <p className="footer__inn-text">ИНН 999 999 999 999</p>
              <p className="footer__inn-text">ОГРН 999 999 999 999</p>
              <p className="footer__inn-text">КПП 999 9999 9999 999</p>
              <p className="footer__inn-text">ООО “Артфоникс”</p>
            </div>
            <p className="footer__rights">
              © ООО «Правообладатель контента», 2024
              <img src={footerLogo} alt="footer-logo" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
