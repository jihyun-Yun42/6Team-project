import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../shared/cookies";
import Spinner from "../assets/spinner.gif";
import { apis } from "../axios/api";
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

function OAuthKakao() {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("code", code);
  const kakaoLogin = async () => {
    try {
      const response = await axios.get(
        `http://3.36.52.202:8080/OAuth/Kakao/?code=${code}`
      );
      const token = response.headers.authorization.substr(7);
      const decodeToken = jwtDecode(token);
      cookies.set("userId", decodeToken.nickname, { path: "/" });
      cookies.set("token", token, {
        path: "/",
      });
      nav("/deliveryHome");
    } catch (e) {
      console.log("error", e);
      alert(e);
    }
  };

  kakaoLogin();

  return (
    <Background>
      <LoadingText>로그인 중</LoadingText>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
}

export default OAuthKakao;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 3rem "Noto Sans KR";
  text-align: center;
`;
