import React from "react";
import styled from "styled-components";
import FooterDelivery from "../components/FooterDelivery";
import HeaderDelivery from "../components/HeaderDelivery";
function Join() {
  return (
    <>
      <HeaderDelivery />
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
        </JoinContainer>
      </JoinWrap>
      <FooterDelivery />
    </>
  );
}

export default Join;

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
