import React, { useState } from 'react';
import styled from 'styled-components';
import { AddMenu } from '../components/Menu/AddMenu';
import BetweenNav from '../components/BetweenNav';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import OrderCoution from '../components/OrderCoution';
import TotalFooter from '../components/TotalFooter';
import { Card } from '../components/Card';
import { useGetMenu } from '../hooks/Menu/useGetMenu';
import { cookies } from '../shared/cookies';
import Button from '../components/Button';
function DeliveryHome() {
  const ADMIN = cookies.get('userId');
  const { menuData, getMenuIsLoading } = useGetMenu();
  const [category, setCategory] = useState("NEW");

  const onClickCategory = (e) => {
    setCategory(e.target.value);
  };
  if (!menuData || getMenuIsLoading) return <div>로딩중...</div>;

  return (
    <>
      <HeaderDelivery name={"딜리버리"} />
      <BetweenNav />
      <NavDelivery page="딜리버리" />
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
        {ADMIN && (
          <AddMenu>
            <Button>메뉴추가</Button>
          </AddMenu>
        )}
        <Tab_cont>
          {menuData.map(
            (item) => item.category === category && <Card key={item.id} item={item} />
          )}
        </Tab_cont>
      </MenuArea>

      <OrderCoution />
      <TotalFooter />
    </>
  );
}
export default DeliveryHome;
const Tab_cont = styled.div`
  /* background-color: #aad3d3; */
  min-height: 522px;
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
  box-sizing: border-box;
`;
const MenuBar = styled.ul`
  display: flex;
  gap: 30px;
`;
const MenuBtn = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 20px;
  font-family: "TmoneyRoundWindExtraBold";
  color: #b8b8b8;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:focus {
    color: #e22219;
    border-bottom: 3.5px solid #e22219;
  }
`;

const CardBox = styled.div`
  position: relative;
  width: 240px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
