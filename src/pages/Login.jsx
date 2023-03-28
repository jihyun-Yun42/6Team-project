import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { apis } from "../axios/api";
import Button from "../components/Button";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import TotalFooter from "../components/TotalFooter";
import { cookies } from "../shared/cookies";
import { FaKey, FaLock } from "react-icons/fa";
import Input from "../components/Input";

function Login() {
  const navi = useNavigate();
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
  console.log(user);
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
      console.log("ErrorEvent", event);
    }
  };

  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} />
      <LoginContainer>
        <LoinTitle color={"#e22219"}>YOUR WAY</LoinTitle>
        <LoinTitle>어서오세요! 버거킹입니다.</LoinTitle>
        <LoginUI>
          <LoginArea>
            <TitleLogin>
              <FaKey />
              <span>일반로그인</span>
            </TitleLogin>
            <LogInForm onSubmit={submitHandler}>
              <Input
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
                <span>아이디찾기</span>
                <span>비밀번호찾기</span>
              </div>
            </LogInForm>
          </LoginArea>
          <OAuthArea>
            <TitleLogin>
              <FaLock />
              <span>간편 로그인</span>
            </TitleLogin>
            <div>네이버로그인</div>
            <div>카카오로그인</div>
            <div>애플로그인</div>
          </OAuthArea>
        </LoginUI>
      </LoginContainer>
      <NoneUserContainer>비회원구역</NoneUserContainer>
      <TotalFooter />
    </>
  );
}

export default Login;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  padding: 40px 0;
`;

const TitleLogin = styled.div`
  margin-top: 0;
  font-size: 30px;
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
const NoneUserContainer = styled.div`
  background-color: #f2ebe6;
  height: 465px;
`;
