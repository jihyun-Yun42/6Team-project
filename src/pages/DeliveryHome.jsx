import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AddMenu } from '../components/Menu/AddMenu';
import BetweenNav from '../components/BetweenNav';
import FooterDelivery from '../components/FooterDelivery';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import OrderCoution from '../components/OrderCoution';
import { cookies } from '../shared/cookies';

function DeliveryHome() {
  const navi = useNavigate();
  const token = cookies.get('token');
  // useEffect(()=>{
  //   if(!token){
  //     alert('로그인이필요합니다')
  //     navi('/login')
  //   }
  // },[])
  return (
    <>
      <HeaderDelivery />
      <BetweenNav />
      <NavDelivery />
      <MenuArea>
        <MenuList>
          <span style={{ color: 'black', fontSize: '40px' }}>메뉴</span>
          <MenuBar>
            <MenuTitle>스페셜&할인팩</MenuTitle>
            <MenuTitle>신제품(NEW)</MenuTitle>
            <li>프리미엄</li>
            <li>와퍼&주니어</li>
            <li>치킨&슈림프버거</li>
            <li>사이드</li>
            <li>음료&디저트</li>
            <li>독퍼</li>
          </MenuBar>
        </MenuList>
        <Tab_cont>f</Tab_cont>
      </MenuArea>
      <AddMenu />
      <OrderCoution />
      <FooterDelivery />
    </>
  );
}

export default DeliveryHome;

const Tab_cont = styled.div`
  background-color: #aad3d3;
  height: 522px;
`;

const MenuArea = styled.div`
  margin: 50px auto 0 auto;
  max-width: 1184px;
  /* height: 934px; */
`;
const MenuList = styled.div`
  color: #b8b8b8;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const MenuBar = styled.ul`
  display: flex;
  gap: 30px;
`;

const MenuTitle = styled.li`
  cursor: pointer;
  &:active {
    color: #e22219;
  }
`;
