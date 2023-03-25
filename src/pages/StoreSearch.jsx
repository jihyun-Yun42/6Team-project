import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const { kakao } = window;

const StoreSearch = () => {
  const [lat, setLat] = React.useState('');
  const [lon, setLon] = React.useState('');

  function onGeoOk(position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  }
  function onGeoError() {
    setLat(33.450701);
    setLon(126.570667);
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <Nav />
      <MapSize id="map"></MapSize>
    </>
  );
};

const MapSize = styled.div`
  width: 1000px;
  height: 800px;
`;

export default StoreSearch;
