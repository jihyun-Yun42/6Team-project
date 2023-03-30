import React, { useState } from 'react';
import Button from '../../components/Button';
import { AddMenu } from './AddMenu';
import { Flex } from '../../components/Flex';
import { Card } from '../DeliveryHome/Card';
import { cookies } from '../../shared/cookies';
import { useGetMenu } from '../../hooks/Menu/useGetMenu';
import * as delivery from './StyledDelivery';

export const MenuArea = () => {
  const ADMIN = cookies.get('userId');
  const [category, setCategory] = useState('NEW');
  const { menuData, getMenuIsLoading } = useGetMenu();

  const onClickCategory = (e) => {
    setCategory(e.target.value);
  };

  if (!menuData || getMenuIsLoading) return <div>로딩중...</div>;
  return (
    <delivery.MenuAreaDiv>
      <delivery.MenuList>
        <span style={{ color: 'black', fontSize: '40px' }}>메뉴</span>
        <Flex gap={30}>
          <delivery.MenuBtn value="NEW" onClick={onClickCategory}>
            신제품(NEW)
          </delivery.MenuBtn>
          <delivery.MenuBtn value="premium" onClick={onClickCategory}>
            프리미엄
          </delivery.MenuBtn>
          <delivery.MenuBtn value="Whopper" onClick={onClickCategory}>
            와퍼&주니어
          </delivery.MenuBtn>
          <delivery.MenuBtn value="chicken" onClick={onClickCategory}>
            치킨&슈림프버거
          </delivery.MenuBtn>
          <delivery.MenuBtn value="side" onClick={onClickCategory}>
            사이드
          </delivery.MenuBtn>
          <delivery.MenuBtn value="drink" onClick={onClickCategory}>
            음료&디저트
          </delivery.MenuBtn>
          <delivery.MenuBtn value="dog" onClick={onClickCategory}>
            독퍼
          </delivery.MenuBtn>
        </Flex>
      </delivery.MenuList>
      {ADMIN && (
        <AddMenu>
          <Button>메뉴추가</Button>
        </AddMenu>
      )}
      <delivery.Tab_cont>
        {menuData.map(
          (item) => item.category === category && <Card key={item.id} item={item} />
        )}
      </delivery.Tab_cont>
    </delivery.MenuAreaDiv>
  );
};
