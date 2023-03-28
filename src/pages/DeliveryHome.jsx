import React, { useState } from 'react';
import styled from 'styled-components';
import { AddMenu } from '../components/Menu/AddMenu';
import BetweenNav from '../components/BetweenNav';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import OrderCoution from '../components/OrderCoution';
import TotalFooter from '../components/TotalFooter';
import { Card } from '../components/Card';
import {
  ModalBackground,
  ModalContent,
  ModalRoot,
  ModalTrigger,
} from '../components/Modal';
import { useGetMenu } from '../hooks/Menu/useGetMenu';



function DeliveryHome() {
  const { menuData, getMenuIsLoading } = useGetMenu();
  const [category, setCategory] = useState('신제품');

  const { data, isLoading } = useQuery({
    queryKey: keys.GET_MENU,
    queryFn: async () => {
      const data = await apis.get("/api/menus/list");
      return data.data;
    },
  });
  console.log(data);

  // if (!data || isLoading) return <div>로딩중...</div>;


  return (
    <>
      <HeaderDelivery name={'딜리버리'} />
      <BetweenNav />
      <NavDelivery />
      <MenuArea>
        <MenuList>
          <span style={{ color: "black", fontSize: "40px" }}>메뉴</span>
          <MenuBar>
            <MenuBtn value="NEW" onClick={onClickCategory}>
              신제품(NEW)
            </MenuBtn>
            <MenuBtn value="premium" onClick={onClickCategory}>
              프리미엄
            </MenuBtn>
            <MenuBtn value="Whopper" onClick={onClickCategory}>
              와퍼&주니어
            </MenuBtn>
            <MenuBtn value="chicken" onClick={onClickCategory}>
              치킨&슈림프버거
            </MenuBtn>
            <MenuBtn value="side" onClick={onClickCategory}>
              사이드
            </MenuBtn>
            <MenuBtn value="drink" onClick={onClickCategory}>
              음료&디저트
            </MenuBtn>
            <MenuBtn value="dog" onClick={onClickCategory}>
              독퍼
            </MenuBtn>
          </MenuBar>
        </MenuList>
        <Tab_cont>
          {/* {menuData.map((item) => item.category === category && <Card item={item} />)} */}
        </Tab_cont>
      </MenuArea>
      <ModalRoot>
        <ModalTrigger>
          <button>메뉴추가하기</button>
          <ModalBackground />
        </ModalTrigger>
        <ModalContent>
          <AddMenu />
        </ModalContent>
      </ModalRoot>
      <OrderCoution />
      <TotalFooter />
    </>
  );
}

export default DeliveryHome;

const Tab_cont = styled.div`
  /* background-color: #aad3d3; */
  /* height: 522px; */
  display: flex;
  gap: 3%;
  flex-wrap: wrap;
  padding: 4%;
`;

const MenuArea = styled.div`
  margin: 50px auto 0 auto;
  max-width: 1184px;
  /* height: 934px; */
`;

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const MenuBar = styled.ul`
  display: flex;
  gap: 30px;
`;

const MenuBtn = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 20px;
  font-family: 'TmoneyRoundWindExtraBold';
  color: #b8b8b8;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:focus {
    color: #e22219;
    border-bottom: 3.5px solid #e22219;
    box-sizing: border-box;
  }
`;
