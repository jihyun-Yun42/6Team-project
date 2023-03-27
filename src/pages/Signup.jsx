import styled from "styled-components";
import HeaderDelivery from "../components/HeaderDelivery";
import { KAKAO_AUTH_URL } from "../components/KakaoLogin";
import NavDelivery from "../components/NavDelivery";
import NaverLogin from "../components/NaverLogin";
import TotalFooter from "../components/TotalFooter";

function Signup() {
  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} />
      <SignupContainer>
        <NaverLogin />
        <KaKaoBtn href={KAKAO_AUTH_URL}>
          <span>카카오계정 로그인</span>
        </KaKaoBtn>
      </SignupContainer>
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

const KaKaoBtn = styled.a``;
