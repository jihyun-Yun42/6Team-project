import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookies";

function OAuthKakao() {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("code", code);
  const kakaoLogin = async () => {
    try {
      // const response = await axios.post?
      // cookies.set("token",response,{path:"/"});
      nav("/deliveryHome");
    } catch (e) {
      alert(e);
    }
  };

  kakaoLogin();

  return (
    <div>
      <div>로딩중</div>
    </div>
  );
}

export default OAuthKakao;
