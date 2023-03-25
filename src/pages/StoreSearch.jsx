import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { apis } from '../axios/api';
import Nav from '../components/Nav';

const { kakao } = window;
const StoreSearch = () => {
  /* 현재위치 불러오기 */
  const [lat, setLat] = useState(37.5663);
  const [lon, setLon] = useState(126.9779);

  function onGeoOk(position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  }
  function onGeoError() {
    setLat(37.5663);
    setLon(126.9779);
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  /* 지도 불러오기 */
  const mapRef = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
    level: 4,
  };
  useEffect(() => {
    new kakao.maps.Map(mapRef.current, options);
  });

  return (
    <>
      <Nav />
      <div style={{ height: '125px' }} />
      <NavSubbar>
        <SubText>매장찾기</SubText>
      </NavSubbar>
      <Map ref={mapRef} />
      <input type="text" />
    </>
  );
};

// const StoreSearchBackground = styled.div`
//   max-width: 1200px;
//   margin-left: auto;
//   margin-right: auto;
// `;
const Map = styled.div`
  width: 100%;
  height: 700px;
`;

const NavSubbar = styled.div`
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const SubText = styled.div`
  //
`;
export default StoreSearch;
