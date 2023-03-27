import React from "react";
import styled from "styled-components";
import bgimg from "../assets/bg_personality.2ff1d0f9.gif";
function BetweenNav() {
  return (
    <>
      <BetweenNavWrap>
        <BetweenNavContainer>
          <Order>d</Order>
          <Cart>d</Cart>
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
`;

const BetweenNavContainer = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const Order = styled.div`
  background-color: yellow;
  opacity: 20%;
  width: 500px;
  height: 100px;
`;

const Cart = styled.div`
  background-color: green;
  opacity: 20%;
  width: 500px;
`;
