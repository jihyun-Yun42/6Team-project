import styled from "styled-components";
import Button from "../components/Button";
import LogoImg from "../assets/burgerkingLogo.png";
import { useNavigate } from "react-router";
import { Flex } from "./Flex";
import { cookies } from "../shared/cookies";
import { FaUserCircle } from "react-icons/fa";
function HeaderDelivery({ name }) {
  const navi = useNavigate();
  const token = cookies.get("token");
  const userID = cookies.get("userId");
  const logOutHandler = () => {
    cookies.remove("token");
    cookies.remove("userId");
    navi("/deliveryHome");
  };
  return (
    <>
      <HeaderWrap>
        <HeaderContainer>
          <Container>
            <div>
              <UtilWrap>
                <UtilA>
                  <DeliveryText onClick={() => navi("/")}>
                    브랜드홈
                  </DeliveryText>
                </UtilA>
                {token ? (
                  <>
                    <UtilA>
                      <DeliveryText onClick={logOutHandler}>
                        로그아웃
                      </DeliveryText>
                    </UtilA>
                    <UtilA>
                      <DeliveryText>MY킹</DeliveryText>
                    </UtilA>
                  </>
                ) : (
                  <UtilA>
                    <DeliveryText onClick={() => navi("/login")}>
                      로그인
                    </DeliveryText>
                  </UtilA>
                )}
                <UtilA>
                  <DeliveryText>고객센터</DeliveryText>
                </UtilA>
              </UtilWrap>
              <Flex ai="flex-end" jc="space-between">
                <LogoH1>
                  <LogoImage src={`${LogoImg}`} onClick={() => navi("/")} />
                  <span>{name}</span>
                </LogoH1>
                {token ? (
                  <UserInfo>
                    <UserImage>
                      <FaUserCircle>이미지</FaUserCircle>
                    </UserImage>
                    <div>
                      <UserName>
                        {userID}
                        <span>님 안녕하세요</span>
                      </UserName>
                      <span>MY킹 바로가기</span>
                    </div>
                  </UserInfo>
                ) : (
                  <Join>
                    <Button brown onClick={() => navi("/join")}>
                      회원가입
                    </Button>
                  </Join>
                )}
              </Flex>
            </div>
          </Container>
        </HeaderContainer>
      </HeaderWrap>
    </>
  );
}

export default HeaderDelivery;

const UserName = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const UserImage = styled.div`
  font-size: 50px;
  color: black;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 60px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  width: 250px;
  height: 46px;
  color: white;
`;

const LogoImage = styled.img`
  width: 82px;
  height: 83px;
  cursor: pointer;
`;

const Join = styled.div`
  display: inline-block;
  padding-right: 30px;
`;

const UtilWrap = styled.div`
  right: 20px;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;
const UtilA = styled.a`
  color: white;
  position: relative;
  /* display: block; */
  float: left;
  height: 48px;
  padding: 0 14px;
  font-size: 0.875rem;
  line-height: 48px;
`;

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
`;
const HeaderContainer = styled.div`
  position: relative;
  background: #e22219;
`;
const Container = styled.div`
  height: 168px;
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;
  /* display: flex; */
  /* justify-content: space-between; */
  position: relative;
`;

const LogoH1 = styled.div`
  font-size: 2.25rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const DeliveryText = styled.span`
  cursor: pointer;
`;
