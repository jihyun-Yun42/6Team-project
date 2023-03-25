import styled from "styled-components";
import Button from "../components/Button";
import LogoImg from "../assets/burgerkingLogo.png";
import { useNavigate } from "react-router";

function HeaderDelivery() {
  const navi = useNavigate();
  return (
    <>
      <HeaderWrap>
        <HeaderContainer>
          <Container>
            <LogoH1>
              <img src={`${LogoImg}`} style={{ width: "60px" }} />
              <span>버거킹</span>
            </LogoH1>
            <UtilWrap>
              <UtilA>
                <span>브랜드홈</span>
              </UtilA>
              <UtilA>
                <span>로그인</span>
              </UtilA>
              <UtilA>
                <span>고객센터</span>
              </UtilA>
            </UtilWrap>
            <Join>
              <Button onClick={() => navi("/join")}>회원가입</Button>
            </Join>
          </Container>
        </HeaderContainer>
      </HeaderWrap>
    </>
  );
}

export default HeaderDelivery;

const Join = styled.div`
  display: inline-block;
  padding-top: 80px;
  padding-right: 30px;
`;

const UtilWrap = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  overflow: hidden;
`;
const UtilA = styled.a`
  color: white;
  position: relative;
  display: block;
  float: left;
  height: 48px;
  padding: 0 14px;
  font-size: 0.875rem;
  line-height: 48px;
`;

const HeaderWrap = styled.div`
  /* position: fixed; */
  left: 0;
  top: 0;
  right: 0;
  z-index: 50;
`;
const HeaderContainer = styled.div`
  position: relative;
  background: #e22219;
`;
const Container = styled.div`
  height: 168px;
  padding-top: 48px;
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LogoH1 = styled.h1`
  display: inline-block;
  position: static;
  width: auto;
  height: 120px;
  padding-left: 80px;
  padding-right: 10px;
  font-weight: 700;
  font-size: 2.25rem;
  color: #fff;
  text-indent: 0;
  line-height: 120px;
  background-image: url({LogoImg}) no-repeat 0;
  cursor: pointer;
`;
