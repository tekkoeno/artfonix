import React from 'react';
import arrowBottom from '../assets/img/arrow-bottom.svg';

const MobileMenu = ({ mobileMenu }) => {
  return (
    <div className={`header__menu ${mobileMenu ? 'menu-visible' : ''}`}>
      <div className="header__menu-wrap">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <a href="#">
                Главная <img src={arrowBottom} alt="arrow" />
              </a>
            </li>
            <li className="header__list-item">
              <a href="#">Афиша</a>
            </li>
            <li className="header__list-item">
              <a href="#">Контакты</a>
            </li>
            <li className="header__list-item">
              <a href="#">Статьи</a>
            </li>
            <li className="header__list-item">
              <a href="#">О нас</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
