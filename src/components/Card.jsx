import React from 'react';
import { FiX } from 'react-icons/fi';
import { RxUpdate } from 'react-icons/rx';
import { UpdateMenu } from '../pageComponents/DeliveryHome/UpdateMenu';
import { useDeleteMenu } from '../hooks/Menu/useDeleteMenu';
import { cookies } from '../shared/cookies';
import * as delivery from '../pageComponents/DeliveryHome/StyledDelivery';

export const Card = ({ item }) => {
  const ADMIN = cookies.get('userId');
  const { deleteMenu } = useDeleteMenu();

  return (
    <delivery.CardBox key={item.id}>
      {ADMIN && (
        <UpdateMenu item={item}>
          <delivery.BtnCard style={{ right: '25px' }}>
            <RxUpdate />
          </delivery.BtnCard>
        </UpdateMenu>
      )}

      {ADMIN && (
        <delivery.BtnCard
          style={{ right: 0 }}
          onClick={() => {
            deleteMenu(item.id);
          }}
        >
          <FiX />
        </delivery.BtnCard>
      )}

      <delivery.CardImg style={{ backgroundImage: `url(${item.fileUrl})` }} />
      <delivery.CardBurgerName>{item.title}</delivery.CardBurgerName>
      <delivery.CardBurgerPrice>₩{item.price}~</delivery.CardBurgerPrice>
    </delivery.CardBox>
  );
};
