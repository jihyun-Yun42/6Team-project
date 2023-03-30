import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterMenu>
          <Menuli>
            <TitleMenu>
              <span>메뉴</span>
            </TitleMenu>
            <Submenu>
              <li>
                <SubmenuA>
                  <span>신제품(NEW)</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>프리미엄</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>와퍼&amp;주니어</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>치킨&amp;슈림프버거</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>올데이킹&amp;킹모닝</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>사이드</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>음료&amp;디저트</span>
                </SubmenuA>
              </li>
            </Submenu>
          </Menuli>
          <Menuli>
            <TitleMenu>
              <span>매장</span>
            </TitleMenu>
            <Submenu>
              <li>
                <SubmenuA>
                  <span>매장찾기</span>
                </SubmenuA>
              </li>
            </Submenu>
          </Menuli>
          <Menuli>
            <TitleMenu>
              <span>이벤트</span>
            </TitleMenu>
            <Submenu>
              <li>
                <SubmenuA>
                  <span>이벤트</span>
                </SubmenuA>
              </li>
            </Submenu>
          </Menuli>
          <Menuli>
            <TitleMenu>
              <span>브랜드 스토리</span>
            </TitleMenu>
            <Submenu>
              <li>
                <SubmenuA>
                  <span>BRAND</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>WHOPPER</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>COMM.</span>
                </SubmenuA>
              </li>
            </Submenu>
          </Menuli>
          <Menuli>
            <TitleMenu>
              <span>고객센터</span>
            </TitleMenu>
            <Submenu>
              <li>
                <SubmenuA>
                  <span>공지사항</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>버거킹앱이용안내</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>FAQ</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>문의</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>가맹점모집</span>
                </SubmenuA>
              </li>
              <li>
                <SubmenuA>
                  <span>인재채용</span>
                </SubmenuA>
              </li>
            </Submenu>
          </Menuli>
        </FooterMenu>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;

const SubmenuA = styled.a`
  height: 32px;
  font-size: 1rem;
  line-height: 32px;
  color: #bba391;
  font-family: dabanggu;
`;

const Submenu = styled.ul`
  margin-top: 15px;
`;

const FooterWrap = styled.div`
  background-color: #2b0200;
`;

const FooterContainer = styled.div`
  /* background-color: yellow; */
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterMenu = styled.ul`
  min-height: 338px;
  padding-top: 50px;
  overflow: hidden;
`;

const Menuli = styled.li`
  position: relative;
  float: left;
  width: 20%;
`;

const TitleMenu = styled.a`
  color: #f5ebdc;
  display: block;
  height: 28px;
  font-size: 1.5rem;
  line-height: 28px;
  padding-left: 0;
`;
