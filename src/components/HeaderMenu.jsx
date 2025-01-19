import React from 'react';
import headerLogo from '../assets/img/header-logo.svg';
import headerPhone from '../assets/img/phone-header.svg';
import burgerMenu from '../assets/img/menu.svg';
import arrowSelect from '../assets/img/arrow-select.svg';
import { Link } from 'react-router-dom';
const HeaderMenu = ({
  selectedCountry,
  onClickSelectLocation,
  selectWrapperRef,
  onClickMobileMenu,
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/">
            <img className="header__logo" src={headerLogo} alt="logo" />
          </Link>

          <img
            className="header__menu-mobile"
            onClick={onClickMobileMenu}
            src={burgerMenu}
            alt="menu"
          />
          <div className="select-wrapper" ref={selectWrapperRef} onClick={onClickSelectLocation}>
            <p className="selected-name">
              {selectedCountry} <img src={arrowSelect} alt="arrowSelect" />
            </p>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <Link to="/">Главная</Link>
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
                <Link to="/about">О нас</Link>
              </li>
            </ul>
          </nav>
          <a className="header__phone" href="tel:+79999999999">
            <img src={headerPhone} alt="phone" />
            <span>+7 999 999 99 99</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
