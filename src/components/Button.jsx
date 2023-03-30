import React from "react";
import styled, { css } from "styled-components";

function Button({ children, type, onClick, bgcolor, boxstyle }) {
  return (
    <StButton
      onClick={onClick}
      type={type}
      bgcolor={bgcolor}
      boxstyle={boxstyle}
    >
      {children}
    </StButton>
  );
}

const StButton = styled.button`
  ${({ bgcolor }) => {
    switch (bgcolor) {
      case "red":
        return css`
          background-color: #d72300;
        `;
      case "brown":
        return css`
          background-color: #512314;
        `;
      default:
        return css`
          background-color: #512314;
        `;
    }
  }}
  ${({ boxstyle }) => {
    switch (boxstyle) {
      case "box":
        return css`
          width: 216px;
          height: 68px;
          border-radius: 10px;
          padding: 12px 10px 10px;
          font-size: 1.5rem;
        `;
      default:
        return css`
          border-radius: 30px;
        `;
    }
  }}
  font-size: 17px;
  font-family: TmoneyRoundWindExtraBold;
  font-weight: 800;
  padding: 15px 21px;
  overflow: hidden;
  border: 0;
  cursor: pointer;
  color: white;
`;

export default Button;
