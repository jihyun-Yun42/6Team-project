import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from './Button';
import { Flex } from './Flex';

function Nav() {
  const navi = useNavigate();
  return (
    <NavMenu>
      <NavContainer>
        <NavLogo src="../assets/burgerkingLogo.png" onClick={() => navi('/')} />
        <ListTitle>
          <MenuTitle>
            <ul>
              <MenuNavList>
                <ClickNavClick>메뉴소개</ClickNavClick>
              </MenuNavList>
              <MenuNavList>
                <ClickNavClick onClick={() => navi('/storeSearch')}>
                  매장찾기
                </ClickNavClick>
              </MenuNavList>
              <MenuNavList>
                <ClickNavClick>이벤트</ClickNavClick>
              </MenuNavList>
              <MenuNavList>
                <ClickNavClick>브랜드스토리</ClickNavClick>
              </MenuNavList>
            </ul>
          </MenuTitle>
          <HiddenBox className="hiddenText">
            <HiddenDiv>
              <ul>
                <li>
                  <Hiddenlist>신제품(NEW)</Hiddenlist>
                </li>
                <li>
                  <Hiddenlist>프리미엄</Hiddenlist>
                </li>
                <li>
                  <Hiddenlist>와퍼&주니어</Hiddenlist>
                </li>
                <li>
                  <Hiddenlist>치킨&슈프림버거</Hiddenlist>
                </li>
                <li>
                  <Hiddenlist>올데이킹&킹모닝</Hiddenlist>
                </li>
                <li>
                  <Hiddenlist>사이드</Hiddenlist>
                </li>
                <li>
                  <Hiddenlist>음료&디저트</Hiddenlist>
                </li>
              </ul>
            </HiddenDiv>
          </HiddenBox>
          <Button brown onClick={() => navi('/login')}>
            로그인
          </Button>
          <Button onClick={() => navi('/deliveryHome')}>딜리버리 주문</Button>
        </ListTitle>
      </NavContainer>
    </NavMenu>
  );
}

const NavMenu = styled.div`
  width: 100%;
  position: fixed;
  background: white;
  z-index: 50;
`;

const NavLogo = styled.img`
  width: 82px;
  height: 83px;
  cursor: pointer;
`;

const NavContainer = styled.div`
  /* position: relative; */
  height: 100px;
  padding: 24px 20px 0 20px;
  margin-left: 10%;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const ListTitle = styled.div`
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
  &:hover ~ .hiddenText {
    height: 300px;
    background-color: white;
    width: 100%;
  }
  margin-top: 40px;
  height: 60px;
`;

const HiddenBox = styled.ul`
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 100%;
  left: 0;
  min-width: 100%;
  transition: all 0.3s;
  &:hover {
    height: 300px;
    background-color: white;
    width: 100%;
  }
`;

const MenuNavList = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 25%;
`;

const ClickNavClick = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  cursor: pointer;
  /* font-family: TmoneyRoundWindExtraBold; */
`;

const HiddenDiv = styled.div`
  position: relative;
  max-width: 1000px;
  width: 8%;
  left: 25%;
  /* right: 30%; */
  /* margin: 0 auto; */
  border: 1px solid;
  /* max-width: 700px; */
`;

const Hiddenlist = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
`;
export default Nav;
