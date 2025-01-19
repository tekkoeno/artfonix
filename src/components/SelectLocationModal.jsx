import React from 'react';

const SelectLocationModal = ({
  locationWrapRef,
  countryListCol1,
  onClickCountry,
  countryListCol2,
  countryListCol3,
  selectLocationOpen,
  searchInput,
  onHandleSearchInput,
}) => {
  const allCountries = [...countryListCol1, ...countryListCol2, ...countryListCol3];
  const filteredCountries = allCountries.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()),
  );
  return (
    <div className={`select__location ${selectLocationOpen && 'visible'}`}>
      <div className="select__location-wrap" ref={locationWrapRef}>
        <input
          value={searchInput}
          onChange={onHandleSearchInput}
          className="countries__input"
          type="text"
          placeholder="Введите название города"
        />
        {filteredCountries.length === 0 ? (
          <p className="countries-wrong">Город введен неверно</p>
        ) : (
          <div className="countries__list">
            <div className="countries__item">
              <p className="countries__item-title">Все города</p>

              {countryListCol1
                .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                .map((country, index) => {
                  return (
                    <p onClick={() => onClickCountry(country.name)} key={index}>
                      {country.name}
                    </p>
                  );
                })}
            </div>
            <div className="countries__item">
              {countryListCol2
                .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                .map((country, index) => {
                  return (
                    <p onClick={() => onClickCountry(country.name)} key={index}>
                      {country.name}
                    </p>
                  );
                })}
            </div>
            <div className="countries__item">
              {countryListCol3
                .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                .map((country, index) => {
                  return (
                    <p onClick={() => onClickCountry(country.name)} key={index}>
                      {country.name}
                    </p>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectLocationModal;
