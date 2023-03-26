import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { apis } from '../axios/api';
import Nav from '../components/Nav';

const { kakao } = window;
// import { kakao } from 'kakao/maps'; // 카카오 맵 API를 import 합니다.

const StoreSearch = () => {
  /* 현재위치 불러오기 */
  const [lat, setLat] = useState(37.5663);
  const [lon, setLon] = useState(126.9779);
  // const [zoomLevel, setZoomLevel] = useState(3);
  // const [searchKeyword, setSearchKeyword] = useState('버거킹');

  function onGeoOk(position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  }
  function onGeoError() {
    setLat(37.5663);
    setLon(126.9779);
  }

  function currentPosition() {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }

  /* 지도 불러오기 */
  // const mapRef = useRef();
  // const options = {
  //   center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
  //   level: 4,
  // };

  // useEffect(() => {
  //   new kakao.maps.Map(mapRef.current, options);
  // }, []);
  // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  // const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // // // 지도를 생성합니다
  // const map = new kakao.maps.Map(mapRef.current, options);

  // // // 장소 검색 객체를 생성합니다
  // // const ps = new kakao.maps.services.Places();

  // // // 키워드로 장소를 검색합니다
  // // ps.keywordSearch('버거킹', placesSearchCB);

  // // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  // function placesSearchCB(data, status, pagination) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //     // LatLngBounds 객체에 좌표를 추가합니다
  //     const bounds = new kakao.maps.LatLngBounds();

  //     for (let i = 0; i < data.length; i++) {
  //       displayMarker(data[i]);
  //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //     }

  //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //     map.setBounds(bounds);
  //   }
  // }

  // // 지도에 마커를 표시하는 함수입니다
  // function displayMarker(place) {
  //   // 마커를 생성하고 지도에 표시합니다
  //   const marker = new kakao.maps.Marker({
  //     map: map,
  //     position: new kakao.maps.LatLng(place.y, place.x),
  //   });

  //   // 마커에 클릭이벤트를 등록합니다
  //   kakao.maps.event.addListener(marker, 'click', function () {
  //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
  //     infowindow.setContent(
  //       '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>'
  //     );
  //     infowindow.open(map, marker);
  //   });
  // }
  const [storeLoc, setStoreLoc] = useState('버거킹');

  useEffect(() => {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        // center: new kakao.maps.LatLng(37.5663, 126.9779), // 지도의 중심좌표
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(storeLoc, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, []);

  // 버거킹 위치 저장
  // useEffect(() => {
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(37.5666102, 126.9783881), // 서울시청 좌표
  //     level: 5,
  //   };
  //   const map = new kakao.maps.Map(container, options);

  //   // 버거킹 매장 위치 정보
  //   const stores = [
  //     {
  //       name: '버거킹 강남역점',
  //       latlng: new kakao.maps.LatLng(37.497942, 127.027621),
  //     },
  //     {
  //       name: '버거킹 신사역점',
  //       latlng: new kakao.maps.LatLng(37.517284, 127.019284),
  //     },
  //     {
  //       name: '버거킹 홍대입구역점',
  //       latlng: new kakao.maps.LatLng(37.556327, 126.925864),
  //     },
  //   ];

  //   // 버거킹 매장 위치에 마커 표시
  //   stores.forEach((store) => {
  //     const marker = new kakao.maps.Marker({
  //       position: store.latlng,
  //       map: map,
  //       title: store.name,
  //     });
  //   });
  // }, []);

  // 버전 3 버거킹 마커를 눌렀을때 클릭이벤트 발생
  // useEffect(() => {
  //   // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  //   var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  //   var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  //     mapOption = {
  //       center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
  //       level: 2, // 지도의 확대 레벨
  //     };

  //   // 지도를 생성합니다
  //   var map = new kakao.maps.Map(mapContainer, mapOption);

  //   // 장소 검색 객체를 생성합니다
  //   var ps = new kakao.maps.services.Places();

  //   // 키워드로 장소를 검색합니다
  //   ps.keywordSearch('버거킹', placesSearchCB);

  //   // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  //   function placesSearchCB(data, status, pagination) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //       // LatLngBounds 객체에 좌표를 추가합니다
  //       var bounds = new kakao.maps.LatLngBounds();

  //       for (var i = 0; i < data.length; i++) {
  //         displayMarker(data[i]);
  //         bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //       }

  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //       map.setBounds(bounds);
  //     }
  //   }

  //   // 지도에 마커를 표시하는 함수입니다
  //   function displayMarker(place) {
  //     // 마커를 생성하고 지도에 표시합니다
  //     var marker = new kakao.maps.Marker({
  //       map: map,
  //       position: new kakao.maps.LatLng(place.y, place.x),
  //     });

  //     // 마커에 클릭이벤트를 등록합니다
  //     kakao.maps.event.addListener(marker, 'click', function () {
  //       // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
  //       infowindow.setContent(
  //         '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>'
  //       );
  //       infowindow.open(map, marker);
  //     });
  //   }
  // }, []);

  // 버전 4 위치 마커찍기
  // useEffect(() => {
  //   // 현재 위치 정보 가져오기
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const lat = position.coords.latitude;
  //         const lng = position.coords.longitude;

  //         // 카카오 지도 객체 생성
  //         const container = document.getElementById('map');
  //         const options = {
  //           center: new kakao.maps.LatLng(lat, lng),
  //           level: 5,
  //         };
  //         const map = new kakao.maps.Map(container, options);

  //         // 근처 버거킹 매장 찾기
  //         const ps = new kakao.maps.services.Places();
  //         ps.keywordSearch('버거킹', (data, status) => {
  //           if (status === kakao.maps.services.Status.OK) {
  //             for (let i = 0; i < data.length; i++) {
  //               const place = data[i];
  //               const marker = new kakao.maps.Marker({
  //                 map: map,
  //                 position: new kakao.maps.LatLng(place.y, place.x),
  //               });
  //             }
  //           }
  //         });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   } else {
  //     alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
  //   }
  // }, []);

  return (
    <>
      <Nav />
      <div style={{ height: '125px' }} />
      <NavSubbar>
        <SubText>매장찾기</SubText>
      </NavSubbar>
      {/* <Map id="map" ref={mapRef} /> */}
      <Map id="map" />
      <button onClick={currentPosition}>현재위치로 매장검색</button>
    </>
  );
};

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
