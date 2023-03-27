import React from "react";
import styled from "styled-components";
import FooterDelivery from "../components/FooterDelivery";
import HeaderDelivery from "../components/HeaderDelivery";

function Signup() {
  return (
    <>
      <HeaderDelivery />
      <SignupContainer></SignupContainer>
      <FooterDelivery />
    </>
  );
}

export default Signup;

const SignupContainer = styled.div`
  min-height: 560px;
  padding: 45px 0 70px;
  display: flex;
`;
