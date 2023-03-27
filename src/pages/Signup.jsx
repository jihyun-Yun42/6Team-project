import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import TotalFooter from "../components/TotalFooter";

function Signup() {
  const [signupUser, setSignupUser] = useState({
    Email: "",
    nickname: "",
    pw: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setSignupUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("실험용");
  };

  console.log("signupUser", signupUser);

  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} />
      <SignupWrap>
        <SignupForm onSubmit={submitHandler}>
          <SignupBox>
            이메일:
            <input type="email" name="Email" onChange={changeInputHandler} />
          </SignupBox>
          <SignupBox>
            비밀번호:
            <input type="password" name="pw" onChange={changeInputHandler} />
          </SignupBox>
          <SignupBox>
            닉네임:
            <input type="text" name="nickname" onChange={changeInputHandler} />
          </SignupBox>
          <Button type="submit">회원가입</Button>
        </SignupForm>
      </SignupWrap>
      <TotalFooter />
    </>
  );
}

export default Signup;

const SignupWrap = styled.div`
  min-height: 460px;
`;
const SignupForm = styled.form`
  background-color: #555252;
  max-width: 600px;
  height: 400px;
  margin: 100px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const SignupBox = styled.div`
  width: 300px;
`;
