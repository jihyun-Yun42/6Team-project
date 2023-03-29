import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import TotalFooter from "../components/TotalFooter";
import { cookies } from "../shared/cookies";
import LoginDelivery from "../pageComponents/LoginPage/LoginDelivery";

function Login() {
  const navi = useNavigate();
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navi("/deliveryHome");
    }
  }, [navi]);

  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} />
      <LoginDelivery />
      <TotalFooter />
    </>
  );
}

export default Login;
