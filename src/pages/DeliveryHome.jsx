import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AddMenu } from '../components/Menu/AddMenu';
import BetweenNav from '../components/BetweenNav';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import OrderCoution from '../components/OrderCoution';
import { cookies } from '../shared/cookies';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../axios/api';
import { keys } from '../utils/createQueryKey';
import TotalFooter from '../components/TotalFooter';

function DeliveryHome() {
  const navi = useNavigate();
  const token = cookies.get('token');
  // useEffect(()=>{
  //   if(!token){
  //     alert('로그인이필요합니다')
  //     navi('/login')
  //   }
  // },[])

  const { data, isLoading } = useQuery({
    queryKey: keys.GET_MENU,
    queryFn: async () => {
      const data = await apis.get('/api/menus/list');
      return data.data;
    },
  });
  console.log(data);

  if (!data || isLoading) return <div>로딩중...</div>;

  return (
    <>
      <HeaderDelivery />
      <BetweenNav />
      <NavDelivery />
      <MenuArea>
        <MenuList>
          <span style={{ color: 'black', fontSize: '40px' }}>메뉴</span>
          <MenuBar>
            <MenuTitle>신제품(NEW)</MenuTitle>
            <li>프리미엄</li>
            <li>와퍼&주니어</li>
            <li>치킨&슈림프버거</li>
            <li>사이드</li>
            <li>음료&디저트</li>
            <li>독퍼</li>
          </MenuBar>
        </MenuList>
        <Tab_cont>
          {data.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </Tab_cont>
      </MenuArea>
      <AddMenu />
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
