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

export const Card = ({ item }) => {
  const { deleteMenu } = useDeleteMenu();
  return (
    <CardBox key={item.id}>
      <ModalRoot>
        <ModalTrigger>
          <ModalBackground />

          <BtnCard style={{ right: '25px' }}>
            <RxUpdate />
          </BtnCard>
        </ModalTrigger>
        <ModalContent>
          <UpdateMenu item={item} />
        </ModalContent>
      </ModalRoot>
      <BtnCard
        style={{ right: 0 }}
        onClick={() => {
          deleteMenu(item.id);
        }}
      >
        <FiX />
      </BtnCard>
      <CardImg>사진넣을공간</CardImg>
      <CardBurgerName>{item.title}</CardBurgerName>
      <CardBurgerPrice>₩{item.price}~</CardBurgerPrice>
    </CardBox>
  );
};

const CardBox = styled.div`
  position: relative;
  width: 240px;
  border: 1px solid;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const CardImg = styled.div`
  width: 240px;
  background-color: aliceblue;
  height: 180px;
  margin-bottom: 10px;
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
