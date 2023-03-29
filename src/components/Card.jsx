import React from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { RxUpdate } from 'react-icons/rx';
import { ModalBackground, ModalContent, ModalRoot, ModalTrigger } from './Modal';
import { apis } from '../axios/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keys } from '../utils/createQueryKey';
import { UpdateMenu } from './Menu/UpdateMenu';
import { useDeleteMenu } from '../hooks/Menu/useDeleteMenu';
import { cookies } from '../shared/cookies';

export const Card = ({ item }) => {
  const ADMIN = cookies.get('userId');
  const { deleteMenu } = useDeleteMenu();
  console.log(item.url);
  return (
    <CardBox key={item.id}>
      <ModalRoot>
        <ModalTrigger>
          <ModalBackground />
          {ADMIN && (
            <BtnCard style={{ right: '25px' }}>
              <RxUpdate />
            </BtnCard>
          )}
        </ModalTrigger>
        <ModalContent>
          <UpdateMenu item={item} />
        </ModalContent>
      </ModalRoot>
      {ADMIN && (
        <BtnCard
          style={{ right: 0 }}
          onClick={() => {
            deleteMenu(item.id);
          }}
        >
          <FiX />
        </BtnCard>
      )}

      <CardImg style={{ backgroundImage: `url(${item.url})` }} />
      <CardBurgerName>{item.title}</CardBurgerName>
      <CardBurgerPrice>₩{item.price}~</CardBurgerPrice>
    </CardBox>
  );
};

const CardBox = styled.div`
  position: relative;
  width: 240px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const CardImg = styled.div`
  width: 240px;
  height: 180px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CardBurgerName = styled.div`
  font-size: 20px;
`;

const CardBurgerPrice = styled.div`
  color: #e22219;
  font-size: 18px;
`;

const BtnCard = styled.button`
  position: absolute;
  border: 0;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
`;
