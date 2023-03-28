import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import NaverLogin from "../components/NaverLogin";
import TotalFooter from "../components/TotalFooter";
import { KAKAO_AUTH_URL } from "../components/KakaoLogin";
import { FaKey, FaLock } from "react-icons/fa";
function Join() {
  const nav = useNavigate();
  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} />
      <JoinWrap>
        <JoinContainer>
          <WelcomeBox>
            <Page_tit02>환영합니다!</Page_tit02>
            <Txt_welcome>
              <p>
                이메일 주소 혹은 sns 계정으로 간편하게
                <StrongRed>회원가입</StrongRed>하세요!
              </p>
              <Txt_info>
                버거킹 서비스는 만 14세 이상부터 이용 하실 수 있습니다.
              </Txt_info>
            </Txt_welcome>
          </WelcomeBox>
          <LoginUi>
            <Login>
              <TitleLogin>
                <FaKey />
                <span>이메일 회원가입</span>
              </TitleLogin>
              <LoginBtn>
                <Button
                  bgcolor="red"
                  boxstyle="box"
                  onClick={() => nav("/signup")}
                >
                  버거킹 회원가입
                </Button>
              </LoginBtn>
            </Login>
            <LoginSimple>
              <TitleLogin>
                <FaLock />
                <span>간편 회원가입</span>
              </TitleLogin>
              <NaverLogin />
              <a href={KAKAO_AUTH_URL}>
                <span>카카오계정 로그인</span>
              </a>
              <div>애플</div>
            </LoginSimple>
          </LoginUi>
        </JoinContainer>
      </JoinWrap>
      <TotalFooter />
    </>
  );
}

export default Join;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0px;
`;

const TitleLogin = styled.div`
  margin-top: 40px;
  font-size: 20px;
`;

const LoginSimple = styled.div`
  padding-top: 85px;
  width: 50%;
  max-width: 485px;
  padding-left: 8.74%;
  float: right;
  background-color: #6197c5;
`;

const Login = styled.div`
  padding-top: 85px;
  width: 50%;
  min-width: 530px;
  padding-right: 5.23%;
  border-right: 1px solid #e5e5e5;
  /* background-color: #e6e6e6; */
  float: left;
`;

const LoginUi = styled.div`
  margin: 20px 0px;
  border: 2px solid black;
  background-color: #ebebeb;
  border-radius: 20px;
  min-height: 560px;
  padding: 45px 30px 70px;
  display: flex;
`;
const JoinContainer = styled.div`
  max-width: 1184px;
  margin: 0 auto;
`;
const WelcomeBox = styled.div`
  max-width: 1184px;
  padding: 75px 20px 0px;
  margin: 0 auto;
`;
const Page_tit02 = styled.h2`
  color: #2e2e2e;
  font-weight: 400;
  font-size: 2.5rem;
`;

const Txt_welcome = styled.div`
  margin: 30px 0 0;
  font-size: 1.5rem;
`;

const Txt_info = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

const StrongRed = styled.span`
  color: #e22219;
`;

const JoinWrap = styled.div`
  padding: 0;
  background: #fff;
`;
