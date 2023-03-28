import { useState } from "react";
import styled from "styled-components";
import { apis } from "../axios/api";
import Button from "../components/Button";
import HeaderDelivery from "../components/HeaderDelivery";
import NavDelivery from "../components/NavDelivery";
import TotalFooter from "../components/TotalFooter";

function Signup() {
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
    nickname: "",
  });

  console.log("signupUser", signupUser);
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setSignupUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await apis.post("/api/sigup", signupUser);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <HeaderDelivery />
      <NavDelivery margintop={"168px"} page="회원가입" />
      <SignupWrap>
        <SignupForm onSubmit={submitHandler}>
          <SignupBox>
            email:
            <input type="email" name="email" onChange={changeInputHandler} />
          </SignupBox>
          <SignupBox>
            password:
            <input
              type="password"
              name="password"
              onChange={changeInputHandler}
            />
          </SignupBox>
          <SignupBox>
            nickname:
            <input type="text" name="nickname" onChange={changeInputHandler} />
          </SignupBox>
          <SignupBox>
            username:
            <input type="text" name="username" onChange={changeInputHandler} />
          </SignupBox>
          <Button bgcolor="red" type="submit">
            회원가입
          </Button>
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
  background-color: #adadad;
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
