/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { YMaps, Map, Placemark, GeolocationControl } from 'react-yandex-maps';
import axios from 'axios';

const AddressMap = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState([55.751574, 37.573856]); // Координаты по умолчанию (Москва)

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://geocode-maps.yandex.ru/1.x/?apikey=<20860656-5a8f-4ceb-ad68-3c3b51748bff>&format=json&geocode=${address}`
      );
      const geoObject = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
      const coords = geoObject.Point.pos.split(' ').map(Number).reverse();
      setCoordinates(coords);
    } catch (error) {
      console.error('Ошибка при получении координат:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Введите адрес для отображения на карте</h2>
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="Введите адрес"
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Искать
      </button>

      <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
        <YMaps>
          <Map
            state={{ center: coordinates, zoom: 10 }}
            width="100%"
            height="100%"
          >
            <Placemark geometry={coordinates} />
            <GeolocationControl options={{ float: 'left' }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default AddressMap;
