import React from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';

function Nav() {
  return (
    <NavMenu>
      <NavContainer>
        <NavLogo src="/burgerkingLogo.png" />
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
`;

const NavContainer = styled.div`
  /* position: relative; */
  height: 120px;
  padding: 24px 20px 0 20px;
  margin-left: 10%;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const MenuTitle = styled.div`
  /* position: relative; */
  /* z-index: 2; */
  width: 100%;
  border: 1px solid;
  padding: 0 10px;
  transition: all 1s;
  &:hover ~ .hiddenText {
    height: 100px;
    background-color: white;
    width: 100%;
  }
`;
const HiddenList = styled.ul`
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 100%;
  left: 0;
  min-width: 100%;
  &:hover {
    height: 100px;
    background-color: white;
    width: 100%;
  }
`;
// const MenuNav = styled.ul`
//   float: left;
//   width: 100%;
//   border: 1px solid;
// `;
const MenuNavList = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 25%;
`;

// const MenuScroll = styled.a`
//   display: block;
//   width: auto;
//   text-decoration: none;
//   margin: 5px;
// `;

// const List = styled.div`
//   position: relative;
//   overflow: hidden;
// `;

// const ListTitle = styled.div`
//   position: absolute;
//   bottom: 150%;
//   left: 30px;
//   z-index: 2;
// `;

// const Submenu = styled.ul`
//   /* position: absolute;
//   left: 2%;
//   overflow: hidden;
//   z-index: 100; */
// `;
// const SubmenuLi = styled.li`
//   /* margin-bottom: 5px; */
// `;
export default Nav;
