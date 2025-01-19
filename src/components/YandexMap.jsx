import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
const YandexMap = ({ apikey = 'ВАШ_API_КЛЮЧ' }) => {
  return (
    <section className="map">
      <div className="container">
        <h2 className="title">
          Как <br />
          добраться
        </h2>
        <div className="map-adress" id="map-adress">
          <YMaps query={{ apikey }}>
            <Map
              defaultState={{
                center: [55.76, 37.64],
                zoom: 15,
              }}
              modules={[
                'control.ZoomControl',
                'control.FullscreenControl',
                'geoObject.addon.balloon',
              ]}
              width="100%"
              height="500px"
              options={{
                suppressMapOpenBlock: true,
              }}>
              <Placemark
                geometry={[55.76, 37.64]}
                properties={{
                  balloonContent: 'Москва!',
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: './images/map-marker.svg',
                  iconImageSize: [30, 42],
                  iconImageOffset: [-15, -42],
                }}
              />
            </Map>
          </YMaps>
        </div>
        <div className="map__btn">
          <button>КУПИТЬ БИЛЕТ</button>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
