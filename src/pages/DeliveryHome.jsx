import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FooterDelivery from '../components/FooterDelivery';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import OrderCoution from '../components/OrderCoution';
import { cookies } from '../shared/cookies';

function DeliveryHome() {
  const navi = useNavigate();
  const token = cookies.get("token");
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
        <div>메뉴</div>
        <Tab_cont>f</Tab_cont>
      </MenuArea>
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
  background-color: #917d7d;
  margin: 0px auto;
  max-width: 1184px;
  /* height: 934px; */
`;
