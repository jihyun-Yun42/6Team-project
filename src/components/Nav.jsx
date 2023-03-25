import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from './Button';
import { Flex } from './Flex';

function Nav() {
  const navi = useNavigate();
  const [mouse, setMouse] = useState(false);

  return (
    <NavMenu isbig={mouse}>
      <NavContainer>
        <NavLogo src="../assets/burgerkingLogo.png" onClick={() => navi('/')} />
        <ListTotalTitle>
          <MenuTitle
            onMouseOver={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
          >
            <ul>
              <MenuNavList>
                메뉴소개
                <NavListUl>
                  <NavListContent>신제품(NEW)</NavListContent>
                  <NavListContent>프리미엄</NavListContent>
                  <NavListContent>와퍼&주니어</NavListContent>
                  <NavListContent>치킨&슈림프버거</NavListContent>
                  <NavListContent>올데이킹&킹모닝</NavListContent>
                  <NavListContent>사이드</NavListContent>
                  <NavListContent>음료&디저트</NavListContent>
                </NavListUl>
              </MenuNavList>
              <MenuNavList>
                매장소개
                <NavListUl>
                  <NavListContent onClick={() => navi('/storeSearch')}>
                    매장찾기
                  </NavListContent>
                </NavListUl>
              </MenuNavList>
              <MenuNavList>
                이벤트
                <NavListUl>
                  <NavListContent>이벤트</NavListContent>
                </NavListUl>
              </MenuNavList>
              <MenuNavList>
                고객센터
                <NavListUl>
                  <NavListContent>공지사항</NavListContent>
                  <NavListContent>버거킹앱 이용안내</NavListContent>
                  <NavListContent>FAQ</NavListContent>
                  <NavListContent>문의</NavListContent>
                  <NavListContent>가맹점모집</NavListContent>
                  <NavListContent>인재채용</NavListContent>
                </NavListUl>
              </MenuNavList>
            </ul>
          </MenuTitle>
          <Button brown onClick={() => navi('/login')}>
            로그인
          </Button>
          <Button onClick={() => navi('/deliveryHome')}>딜리버리 주문</Button>
        </ListTotalTitle>
      </NavContainer>
    </NavMenu>
  );
}

const NavMenu = styled.div`
  width: 100%;
  position: fixed;
  background: white;
  z-index: 50;
  transition: all 0.2s ease-out;
  height: ${({ isbig }) => (isbig ? '400px' : '130px')};
  overflow: hidden;
`;

const NavLogo = styled.img`
  width: 82px;
  height: 83px;
  cursor: pointer;
`;

const NavContainer = styled.div`
  /* position: relative; */
  /* height: 100px; */
  padding: 24px 20px 0 20px;
  margin-left: 10%;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const ListTotalTitle = styled.div`
  /* position: absolute; */
  /* font-size: 1.375rem; */
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const MenuTitle = styled.div`
  position: relative;
  width: 65%;
  margin-left: 5%;
  margin-top: 40px;
  height: 60px;
`;

const MenuNavList = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 24.5%;
  font-size: 1.375rem;
  font-weight: 700;
  /* border: 1px solid red; */
`;

const NavListUl = styled.ul`
  margin-top: 50px;
`;

const NavListContent = styled.li`
  font-family: 'IBMPlexSansKR-Regular';
  font-size: 13px;
  font-weight: 300;
  margin: 15px 7px;
  cursor: pointer;
`;

export default Nav;
