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
              <Flex>
                <MenuNavList>메뉴소개</MenuNavList>
                <MenuNavList>매장찾기</MenuNavList>
                <MenuNavList>이벤트</MenuNavList>
                <MenuNavList>브랜드스토리</MenuNavList>
              </Flex>
            </ul>
          </MenuTitle>
          <HiddenList className="hiddenText">안녕 난 숨겨져있어</HiddenList>
          <Button brown>가맹점 문의</Button>
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
  font-size: 1.375rem;
  width: 65%;
  margin-left: 5%;
  font-weight: 700;
  &:hover ~ .hiddenText {
    height: 100px;
    background-color: white;
    width: 100%;
  }
  margin-top: 40px;
  height: 60px;
`;

const HiddenList = styled.ul`
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 100%;
  left: 0;
  min-width: 100%;
  transition: all 0.3s;
  &:hover {
    height: 100px;
    background-color: white;
    width: 100%;
  }
  padding-left: 10%;
`;

const MenuNavList = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 25%;
`;

export default Nav;
