import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import * as Home from './StyledHome';

function Nav() {
  const navi = useNavigate();
  const [mouse, setMouse] = useState(false);

  return (
    <Home.NavMenu isbig={mouse}>
      <Home.NavContainer>
        <Home.NavLogo src="../assets/burgerkingLogo.png" onClick={() => navi('/')} />
        <Home.ListTotalTitle>
          <Home.MenuTitle
            onMouseOver={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
          >
            <ul>
              <Home.MenuNavList>
                메뉴소개
                <Home.NavListUl>
                  <Home.NavListContent>신제품(NEW)</Home.NavListContent>
                  <Home.NavListContent>프리미엄</Home.NavListContent>
                  <Home.NavListContent>와퍼&주니어</Home.NavListContent>
                  <Home.NavListContent>치킨&슈림프버거</Home.NavListContent>
                  <Home.NavListContent>올데이킹&킹모닝</Home.NavListContent>
                  <Home.NavListContent>사이드</Home.NavListContent>
                  <Home.NavListContent>음료&디저트</Home.NavListContent>
                </Home.NavListUl>
              </Home.MenuNavList>
              <Home.MenuNavList>
                매장소개
                <Home.NavListUl>
                  <Home.NavListContent onClick={() => navi('/storeSearch')}>
                    매장찾기
                  </Home.NavListContent>
                </Home.NavListUl>
              </Home.MenuNavList>
              <Home.MenuNavList>
                이벤트
                <Home.NavListUl>
                  <Home.NavListContent>이벤트</Home.NavListContent>
                </Home.NavListUl>
              </Home.MenuNavList>
              <Home.MenuNavList>
                고객센터
                <Home.NavListUl>
                  <Home.NavListContent>공지사항</Home.NavListContent>
                  <Home.NavListContent>버거킹앱 이용안내</Home.NavListContent>
                  <Home.NavListContent>FAQ</Home.NavListContent>
                  <Home.NavListContent>문의</Home.NavListContent>
                  <Home.NavListContent>가맹점모집</Home.NavListContent>
                  <Home.NavListContent>인재채용</Home.NavListContent>
                </Home.NavListUl>
              </Home.MenuNavList>
            </ul>
          </Home.MenuTitle>
          <Button onClick={() => navi('/login')}>로그인</Button>
          <Button bgcolor="red" onClick={() => navi('/deliveryHome')}>
            딜리버리 주문
          </Button>
        </Home.ListTotalTitle>
      </Home.NavContainer>
    </Home.NavMenu>
  );
}

export default Nav;
