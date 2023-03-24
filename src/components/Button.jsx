import React from 'react';
import styled, { css } from 'styled-components';

function Button({ children, brown, onClick }) {
  return (
    <StButton brown={brown} onClick={onClick}>
      {children}
    </StButton>
  );
}

const StButton = styled.button`
  /* width: 60px; */
  font-family: TmoneyRoundWindExtraBold;
  font-weight: 800;
  font-size: 17px;
  padding: 15px 21px;
  overflow: hidden;
  border-radius: 30px;
  border: 0;
  cursor: pointer;
  color: white;
  background-color: ${({ brown }) => (brown ? '#502416' : '#d72300')};
`;

export default Button;
