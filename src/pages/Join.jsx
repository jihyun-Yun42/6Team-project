import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import FooterDelivery from "../components/FooterDelivery";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
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
              <h3>이메일 회원가입</h3>
              <Button onClick={() => nav("/signup")}>버거킹 회원가입</Button>
            </Login>
            <LoginSimple>
              <h3>간편 회원가입</h3>
              <div>네이버</div>
              <div>카카오톡</div>
              <div>애플</div>
            </LoginSimple>
          </LoginUi>
        </JoinContainer>
      </JoinWrap>
      <FooterDelivery />
    </>
  );
}

export default Join;

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
  background-color: #41586b;
  float: left;
`;

const LoginUi = styled.div`
  min-height: 560px;
  padding: 45px 0 70px;
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
