import React from 'react';
import styled from 'styled-components';
import bgimg from '../assets/bg_personality.2ff1d0f9.gif';
import { MdDeliveryDining } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import { Flex } from './Flex';

function BetweenNav() {
  return (
    <>
      <BetweenNavWrap>
        <BetweenNavContainer>
          <Flex>
            <Order>
              <MdDeliveryDining />
            </Order>
            <Flex fd="column" jc="space-evenly">
              <NavTitle style={{ fontSize: '25px' }}>딜리버리 주문내역</NavTitle>
              <NavTitle>주문내역이 없습니다.</NavTitle>
            </Flex>
          </Flex>
          <Flex>
            <Order>
              <TiShoppingCart />
            </Order>
            <Flex fd="column" jc="space-evenly">
              <NavTitle style={{ fontSize: '25px' }}>딜리버리 주문내역</NavTitle>
              <NavTitle>주문내역이 없습니다.</NavTitle>
            </Flex>
          </Flex>
        </BetweenNavContainer>
      </BetweenNavWrap>
    </>
  );
}

export default BetweenNav;

const BetweenNavWrap = styled.div`
  margin-top: 168px;
  height: 124px;
  background-image: url(${bgimg});
  display: flex;
  align-items: center;
`;

const BetweenNavContainer = styled.div`
  min-width: 1184px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Order = styled.div`
  font-size: 100px;
  color: white;
  margin-right: 10px;
`;

const NavTitle = styled.div`
  font-size: 18px;
  color: white;
`;
