import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BetweenNav from "../components/BetweenNav";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import OrderCoution from "../components/OrderCoution";
import TotalFooter from "../components/TotalFooter";
import { cookies } from "../shared/cookies";

function DeliveryHome() {
  const navi = useNavigate();
  const token = cookies.get("token");
  // useEffect(()=>{
  //   if(!token){
  //     alert('로그인이필요합니다')
  //     navi('/login')
  //   }
  // },[])
  const location = useLocation();
  const code = location.search.split("=")[1];
  const state = location.search.split("=")[2];
  console.log("code", code);
  console.log("location", location);
  console.log("state", state);
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
      <TotalFooter />
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
