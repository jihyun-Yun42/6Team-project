import React from 'react';
import styled from 'styled-components';

function NavDelivery({ margintop, page }) {
  return (
    <>
      <NavBarwrap margintop={margintop}>
        <NavContainer>
          <NavPage>
            <NavText>Home</NavText>
            {'>'}
            <NavText>{page}</NavText>
          </NavPage>
        </NavContainer>
      </NavBarwrap>
    </>
  );
}

export default NavDelivery;

const NavBarwrap = styled.div`
  margin-top: ${({ margintop }) => margintop};
  height: 38px;
  padding: 10px 0;
  color: #fff;
  line-height: 38px;
  background: #000000;
`;

const NavContainer = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: white;
`;

const NavPage = styled.div`
  float: left;
  font-size: 0.875rem;
`;

const NavText = styled.span`
  margin: 10px;
`;
