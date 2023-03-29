import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import TotalFooter from "../components/TotalFooter";
import { cookies } from "../shared/cookies";
import JoinDelivery from "../pageComponents/JoinPage/JoinDelivery";

function Join() {
  const nav = useNavigate();
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      nav("/deliveryHome");
    }
  }, [nav]);
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
