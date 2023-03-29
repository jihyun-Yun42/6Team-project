import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import NaverLogin from "../components/NaverLogin";
import TotalFooter from "../components/TotalFooter";
import { KAKAO_AUTH_URL } from "../components/KakaoLogin";
import { FaKey, FaLock } from "react-icons/fa";
import Input, { FileForm } from "../components/Input";
import { apis } from "../axios/api";
import { cookies } from "../shared/cookies";
import JoinDelivery from "../pageComponents/JoinPage/JoinDelivery";

function Join() {
  const nav = useNavigate();
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      nav("/deliveryHome");
    }
  }, []);
  return (
    <>
      <HeaderDelivery name="회원가입" />
      <NavDelivery margintop="168px" page="회원가입" />
      <JoinDelivery />
      <TotalFooter />
    </>
  );
}

export default Join;
