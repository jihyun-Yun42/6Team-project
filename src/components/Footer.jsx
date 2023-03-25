import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBackground>
      <FooterTitleList>
        <FooterTitle>메뉴</FooterTitle>
        <FooterTitle>매장</FooterTitle>
        <FooterTitle>이벤트</FooterTitle>
        <FooterTitle>브랜드 스토리</FooterTitle>
        <FooterTitle>고객센터</FooterTitle>
      </FooterTitleList>
    </FooterBackground>
  );
};

const FooterBackground = styled.div`
  background-color: #2b0200;
  color: #bba391;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const FooterTitleList = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;
const FooterTitle = styled.div`
  color: #f5ebdc;
  cursor: pointer;
`;
export default Footer;
