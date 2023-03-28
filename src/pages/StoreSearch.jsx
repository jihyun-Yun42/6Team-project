import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { apis } from '../axios/api';
import Nav from '../components/Nav';
import NavDelivery from '../components/NavDelivery';

const StoreSearch = () => {
  const { kakao } = window;
  const [storeLoc, setStoreLoc] = useState('서울');
  const [store, setStore] = useState([]);

  const selectChange = (e) => {
    setStoreLoc(e.target.value);
  };

  useEffect(() => {
    // 마커를 담을 배열입니다
    var markers = [];

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(`${storeLoc} 버거킹`, placesSearchCB);

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data);
        setStore(data);
        return;
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayPlaces(places) {
      const fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds();

      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = addMarker(placePosition, i),
          itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function (marker, title) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, title);
          });

          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });

          itemEl.onmouseover = function () {
            displayInfowindow(marker, title);
          };

          itemEl.onmouseout = function () {
            infowindow.close();
          };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }

    // 검색결과 항목을 Element로 반환하는 함수입니다
    function getListItem(index, places) {
      var el = document.createElement('li'),
        itemStr =
          '<span className="markerbg marker_' +
          (index + 1) +
          '"></span>' +
          '<div className="info">' +
          '<h5>' +
          places.place_name +
          '</h5>';

      if (places.road_address_name) {
        itemStr +=
          '<span>' +
          places.road_address_name +
          '</span>' +
          '<span className="jibun gray">' +
          places.address_name +
          '</span>';
      } else {
        itemStr += '<span>' + places.address_name + '</span>';
      }

      itemStr += '<span className="tel">' + places.phone + '</span>' + '</div>';

      el.innerHTML = itemStr;
      el.className = 'item';
      return el;
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, idx, title) {
      var imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    function displayInfowindow(marker, title) {
      var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    function removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    }
  }, [storeLoc]);

  return (
    <>
      <Nav />
      <div style={{ height: '130px' }} />
      <NavDelivery page="매장찾기" />
      <Map id="map" />
      <StoreSearchBox>
        <Store>
          지역검색
          <select
            name="location"
            value={this}
            defaultValue={'DEFAULT'}
            onChange={selectChange}
            style={{
              border: '1px solid lightgray',
              borderRadius: '10px',
              padding: '10px',
              fontSize: '18px',
              fontFamily: 'TmoneyRoundWindExtraBold',
              // margin: '20px',
            }}
          >
            <option value="DEFAULT" disabled>
              특별/광역시
            </option>
            <option value="서울">서울특별시</option>
            <option value="부산">부산광역시</option>
            <option value="대전">대전광역시</option>
            <option value="대구">대구광역시</option>
            <option value="울산">울산광역시</option>
            <option value="인천">인천광역시</option>
            <option value="광주">광주광역시</option>
            <option value="세종">세종특별자치구</option>
          </select>
        </Store>
        <StoreListBox>
          <ListTitle>
            <span style={{ color: 'red' }}>{store.length}개</span>의 검색결과가 있습니다
            {store.map((item) => (
              <StoreBox>
                <TitleLink href={item?.place_url}>
                  <PlaceName>{item?.place_name}</PlaceName>
                </TitleLink>
                <PlaceAddress>{item?.road_address_name}</PlaceAddress>
                <PlaceAddress>{item?.phone}</PlaceAddress>
                {/* <a>{item.place_url}</a> */}
              </StoreBox>
            ))}
          </ListTitle>
        </StoreListBox>
      </StoreSearchBox>
    </>
  );
};

const Map = styled.div`
  width: 100%;
  height: 750px;
  z-index: 1;
`;

const Store = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 10px;
`;
const StoreSearchBox = styled.div`
  width: 400px;
  background-color: white;
  position: absolute;
  height: 640px;
  top: 20%;
  right: 0;
  z-index: 2;
`;
const StoreListBox = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 5%;
  background-color: #f5eadc;
  height: 100%;
  box-sizing: border-box;
`;
const ListTitle = styled.div`
  height: 50px;
`;

const StoreBox = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 5%;
`;
const PlaceName = styled.span`
  font-size: 20px;
`;

const PlaceAddress = styled.div`
  color: #939191;
  font-family: 'IBMPlexSansKR-Regular';
  margin-top: 10px;
`;

const TitleLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;
export default StoreSearch;
