import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import Footer from './Footer';
function TotalFooter({ main }) {
  return (
    <>
      {main && <Footer />}
      <TFooter>
        <FooterContainer>
          <FooterMenu>
            <MenuUl>
              <MenuLi>
                <MenuA>
                  <span>이용약관</span>
                </MenuA>
              </MenuLi>
              <MenuLi>
                <MenuA>
                  <span>개인정보처리방침</span>
                </MenuA>
              </MenuLi>
              <MenuLi>
                <MenuA>
                  <span>법적고지</span>
                </MenuA>
              </MenuLi>
            </MenuUl>
            <FooterBtn>
              <BtnA>
                <span>인재채용</span>
              </BtnA>
              <BtnA>
                <span>가맹점모집</span>
              </BtnA>
            </FooterBtn>
          </FooterMenu>
          <div>
            <BKRLogo>
              <img src="/assets/BKRLogo.png" />
            </BKRLogo>
            <BKRP>
              서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알 <span></span> 전화주문
              1599-0505
            </BKRP>
            <BKRP>
              <a>사업자 등록번호 101-86-76277</a>
              <span></span> (주)BKR 대표이사 문영주, 이동형
            </BKRP>
            <BKRP>Copyright 2019 BKR Co., Ltd. All right Reserved</BKRP>
            <Sns>
              <AiFillFacebook style={{ fontSize: '30px' }}>페이스북</AiFillFacebook>
              <BsInstagram style={{ fontSize: '28px' }}>인스타그램</BsInstagram>
            </Sns>
          </div>
        </FooterContainer>
      </TFooter>
    </>
  );
}

export default TotalFooter;

const Sns = styled.div`
  margin-top: 20px;
`;

const BKRP = styled.p`
  line-height: 170%;
`;

const BKRLogo = styled.h2`
  margin-bottom: 24px;
`;

const BtnA = styled.a`
  display: inline-block;
  margin: 12px 0 0 3px;
  padding: 0 32px;
  color: #f5ebdc;
  border: 1px solid rgba(187, 163, 145, 0.6);
  border-radius: 16px;
  line-height: 30px;
`;

const FooterBtn = styled.div`
  text-align: right;
`;

const MenuUl = styled.ul`
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const MenuLi = styled.li`
  float: left;
`;

const MenuA = styled.a`
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  color: #bba391;
`;

const TFooter = styled.div`
  height: 272px;
  font-size: 0.875rem;
  color: #818181;
  background-color: #2b0200;
`;

const FooterContainer = styled.div`
  position: relative;
  margin: 0px auto;
  max-width: 1144px;
  padding: 47px 0;
  border-top: 1px solid #bba391;
  color: #bba391;
`;

const FooterMenu = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
`;
