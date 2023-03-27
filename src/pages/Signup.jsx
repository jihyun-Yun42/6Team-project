import styled from "styled-components";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import TotalFooter from "../components/TotalFooter";

function Signup() {
  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} />
      <SignupContainer></SignupContainer>
      <TotalFooter />
    </>
  );
}

export default Signup;

const SignupContainer = styled.div`
  min-height: 560px;
  padding: 45px 0 70px;
  display: flex;
`;
