import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import './css/global.css';
import './css/reset.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import axios from 'axios';
import HeaderMenu from './components/HeaderMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutEvents from './pages/AboutEvents';
import MobileMenu from './components/MobileMenu';
import SelectLocationModal from './components/SelectLocationModal';
import About from './pages/About';
import Layerone from './pages/Layerone';
import ScrollDefault from './hooks/ScrollDefault';

function App() {
  const [premiers, setPremiers] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectLocationOpen, setSelectLocationOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return localStorage.getItem('country') || 'Москва';
  });

  const locationWrapRef = useRef(null);
  const selectWrapRef = useRef(null);
  const countryListCol1 = [
    { name: 'Москва', value: 'Moscow' },
    { name: 'Санкт-Петербург', value: 'Saint Petersburg' },
    { name: 'Альметьевск', value: 'Almetyevsk' },
    { name: 'Архангельск', value: 'Arkhangelsk' },
    { name: 'Астрахань', value: 'Astrakhan' },
    { name: 'Барнаул', value: 'Barnaul' },
    { name: 'Белгород', value: 'Belgorod' },
    { name: 'Брянск', value: 'Bryansk' },
    { name: 'Великий Новгород', value: 'Veliky Novgorod' },
    { name: 'Владивосток', value: 'Vladivostok' },
    { name: 'Волгоград', value: 'Volgograd' },
    { name: 'Вологда', value: 'Vologda' },
    { name: 'Воронеж', value: 'Voronezh' },
    { name: 'Евпатория', value: 'Yevpatoria' },
    { name: 'Екатеринбург', value: 'Yekaterinburg' },
    { name: 'Иваново', value: 'Ivanovo' },
    { name: 'Ижевск', value: 'Izhevsk' },
    { name: 'Иннополис', value: 'Innopolis' },
    { name: 'Иркутск', value: 'Irkutsk' },
    { name: 'Казань', value: 'Kazan' },
    { name: 'Киров', value: 'Kirov' },
    { name: 'Королёв', value: 'Korolyov' },
  ];

  const countryListCol2 = [
    { name: 'Кострома', value: 'Kostroma' },
    { name: 'Краснодар', value: 'Krasnodar' },
    { name: 'Красноярск', value: 'Krasnoyarsk' },
    { name: 'Курган', value: 'Kurgan' },
    { name: 'Курск', value: 'Kursk' },
    { name: 'Липецк', value: 'Lipetsk' },
    { name: 'Магнитогорск', value: 'Magnitogorsk' },
    { name: 'Мурманск', value: 'Murmansk' },
    { name: 'Набережные Челны', value: 'Naberezhnye Chelny' },
    { name: 'Нижневартовск', value: 'Nizhnevartovsk' },
    { name: 'Нижний Новгород', value: 'Nizhny Novgorod' },
    { name: 'Новокузнецк', value: 'Novokuznetsk' },
    { name: 'Новороссийск', value: 'Novorossiysk' },
    { name: 'Новосибирск', value: 'Novosibirsk' },
    { name: 'Омск', value: 'Omsk' },
    { name: 'Орел', value: 'Orel' },
    { name: 'Оренбург', value: 'Orenburg' },
    { name: 'Пенза', value: 'Penza' },
    { name: 'Пермь', value: 'Perm' },
    { name: 'Петрозаводск', value: 'Petrozavodsk' },
    { name: 'Псков', value: 'Pskov' },
    { name: 'Ростов-на-Дону', value: 'Rostov-on-Don' },
  ];

  const countryListCol3 = [
    { name: 'Рыбинск', value: 'Rybinsk' },
    { name: 'Рязань', value: 'Ryazan' },
    { name: 'Самара', value: 'Samara' },
    { name: 'Саранск', value: 'Saransk' },
    { name: 'Саратов', value: 'Saratov' },
    { name: 'Севастополь', value: 'Sevastopol' },
    { name: 'Смоленск', value: 'Smolensk' },
    { name: 'Сочи', value: 'Sochi' },
    { name: 'Ставрополь', value: 'Stavropol' },
    { name: 'Тверь', value: 'Tver' },
    { name: 'Тольятти', value: 'Tolyatti' },
    { name: 'Томск', value: 'Tomsk' },
    { name: 'Тула', value: 'Tula' },
    { name: 'Тюмень', value: 'Tyumen' },
    { name: 'Ульяновск', value: 'Ulyanovsk' },
    { name: 'Уфа', value: 'Ufa' },
    { name: 'Хабаровск', value: 'Khabarovsk' },
    { name: 'Чебоксары', value: 'Cheboksary' },
    { name: 'Челябинск', value: 'Chelyabinsk' },
    { name: 'Череповец', value: 'Cherepovets' },
    { name: 'Ялта', value: 'Yalta' },
    { name: 'Ярославль', value: 'Yaroslavl' },
  ];
  // const fetchPremiers = async () => {
  //   try {
  //     const { data } = await axios.get('https://bd55002b5ca6cb03.mokky.dev/premiers');
  //     setPremiers(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const onHandleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const onClickSelectLocation = () => {
    setSelectLocationOpen((currentSelect) => !currentSelect);
    setSearchInput('');
  };
  const onClickMobileMenu = () => {
    setMobileMenu((currentEl) => !currentEl);
  };
  const onClickCountry = (el) => {
    setSelectedCountry(el);
    setSelectLocationOpen(false);
  };
  const handleClickOutside = (e) => {
    // Проверяем клик вне элементов модального окна и выбора локации
    if (
      locationWrapRef.current &&
      !locationWrapRef.current.contains(e.target) &&
      selectWrapRef.current &&
      !selectWrapRef.current.contains(e.target)
    ) {
      setSelectLocationOpen(false);
    }
  };
  useEffect(() => {
    if (selectLocationOpen) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [selectLocationOpen]);

  useEffect(() => {
    localStorage.setItem('country', selectedCountry);
  }, [selectedCountry]);
  return (
    <div onClickCapture={handleClickOutside}>
      <BrowserRouter>
        <HeaderMenu
          selectedCountry={selectedCountry}
          onClickSelectLocation={onClickSelectLocation}
          selectWrapperRef={selectWrapRef}
          onClickMobileMenu={onClickMobileMenu}
        />
        <MobileMenu mobileMenu={mobileMenu} />
        <SelectLocationModal
          onClickCountry={onClickCountry}
          countryListCol1={countryListCol1}
          countryListCol2={countryListCol2}
          countryListCol3={countryListCol3}
          locationWrapRef={locationWrapRef}
          selectLocationOpen={selectLocationOpen}
          searchInput={searchInput}
          onHandleSearchInput={onHandleSearchInput}
        />
        <ScrollDefault />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_events" element={<AboutEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:id" element={<Layerone />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
