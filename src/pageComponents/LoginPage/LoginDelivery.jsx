import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apis } from "../../axios/api";
import { KAKAO_AUTH_URL } from "../../components/KakaoLogin";
import NaverLogin from "../../components/NaverLogin";
import { cookies } from "../../shared/cookies";
import KakaoLogo from "../../assets/kakaologin.png";
import { FaKey, FaLock } from "react-icons/fa";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styled from "styled-components";

function LoginDelivery() {
  const navi = useNavigate();
  const inputRef = useRef();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await apis.post("/api/login", user);
      const token = result.headers.authorization.split(" ")[1];
      const decodeToken = jwtDecode(token);
      cookies.set("token", token, { path: "/" });
      cookies.set("userId", decodeToken.auth, { path: "/" });
      alert("로그인성공");
      navi("/deliveryHome");
    } catch (event) {
      alert("ErrorEvent", event);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <LoginContainer>
        <div style={{ paddingBottom: "30px" }}>
          <LoinTitle color={"#e22219"}>YOUR WAY</LoinTitle>
          <LoinTitle>어서오세요! 버거킹입니다.</LoinTitle>
        </div>
        <LoginUI>
          <LoginArea>
            <TitleLogin>
              <Circle>
                <FaKey />
              </Circle>
              <span>일반로그인</span>
            </TitleLogin>
            <LogInForm onSubmit={submitHandler}>
              <Input
                inputRef={inputRef}
                InputStyle={"LoginStyle"}
                type="text"
                placeholder="아이디(이메일)"
                value={user.username}
                name="username"
                onChange={changeInputHandler}
              />
              <Input
                InputStyle={"LoginStyle"}
                type="password"
                placeholder="비밀번호"
                value={user.password}
                name="password"
                onChange={changeInputHandler}
              />
              <Btns>
                <Button type="submit" bgcolor="red" boxstyle="box">
                  로그인
                </Button>
                <Button
                  type="button"
                  onClick={() => navi("/join")}
                  bgcolor="brown"
                  boxstyle="box"
                >
                  회원가입
                </Button>
              </Btns>
              <div>
                <span style={{ marginRight: "20px" }}>아이디찾기</span>
                <span>비밀번호찾기</span>
              </div>
            </LogInForm>
          </LoginArea>
          <OAuthArea>
            <OauthLogin>
              <TitleLogin>
                <Circle>
                  <FaLock />
                </Circle>
                <span>간편 로그인</span>
              </TitleLogin>
              <SocialLogin>
                <a href={KAKAO_AUTH_URL}>
                  <KakaoLogin src={KakaoLogo} />
                </a>
                <NaverLogin />
              </SocialLogin>
            </OauthLogin>
          </OAuthArea>
        </LoginUI>
      </LoginContainer>
    </>
  );
}

export default LoginDelivery;

const KakaoLogin = styled.img`
  width: 270px;
  /* height: 58px; */
  border-radius: 12px;
`;

const OauthLogin = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  padding: 5%;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  padding: 40px 0;
`;

const TitleLogin = styled.div`
  display: flex;
  gap: 10px;
  font-size: 25px;
`;

const SocialLogin = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 50px;
`;

const LoinTitle = styled.p`
  color: ${({ color }) => color};
  font-size: 40px;
`;

const LoginArea = styled.div`
  width: 50%;
  background-color: #ffffff;
  min-width: 530px;
  padding-right: 5.23%;
  border-right: 1px solid #e5e5e5;
`;
const OAuthArea = styled.div`
  width: 50%;
  background-color: white;
`;

const LoginUI = styled.div`
  padding: 45px 0 70px;
  display: flex;
`;

const LoginContainer = styled.div`
  height: 684px;
  margin: 0px auto;
  max-width: 1184px;
  background-color: #ffffff;
  padding: 75px 25px 0px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
`;