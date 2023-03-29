import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from '../components/Button';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import NaverLogin from '../components/NaverLogin';
import TotalFooter from '../components/TotalFooter';
import { KAKAO_AUTH_URL } from '../components/KakaoLogin';
import { FaKey, FaLock } from 'react-icons/fa';
import Input, { FileForm } from '../components/Input';
import { apis } from '../axios/api';

function Join() {
  const nav = useNavigate();

  const [signupUser, setSignupUser] = useState({
    username: '',
    email: '',
    password: '',
    nickname: '',
  });

  console.log('signupUser', signupUser);
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setSignupUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await apis.post('/api/sigup', signupUser);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <>
      <HeaderDelivery name="회원가입" />
      <NavDelivery margintop="168px" page="회원가입" />
      <JoinWrap>
        <JoinContainer>
          <WelcomeBox>
            <Page_tit02>환영합니다!</Page_tit02>
            <Txt_welcome>
              <p>
                이메일 주소 혹은 sns 계정으로 간편하게 <StrongRed>회원가입</StrongRed>
                하세요!
              </p>
              <Txt_info>버거킹 서비스는 만 14세 이상부터 이용 하실 수 있습니다.</Txt_info>
            </Txt_welcome>
          </WelcomeBox>
          <LoginUi>
            <Login>
              <TitleLogin>
                <Circle>
                  <FaKey />
                </Circle>
                <span>이메일 회원가입</span>
              </TitleLogin>
              <SignupForm onSubmit={submitHandler}>
                <SignupBox>
                  <SignupLabal>이메일</SignupLabal>
                  <Input
                    InputStyle="LoginStyle"
                    type="email"
                    name="email"
                    onChange={changeInputHandler}
                    placeholder="이메일을 입력해주세요"
                  />
                </SignupBox>
                <SignupBox>
                  <SignupLabal>비밀번호</SignupLabal>
                  <Input
                    InputStyle="LoginStyle"
                    type="password"
                    name="password"
                    onChange={changeInputHandler}
                    placeholder="비밀번호를 입력해주세요"
                  />
                </SignupBox>
                <SignupBox>
                  <SignupLabal>닉네임</SignupLabal>
                  <Input
                    InputStyle="LoginStyle"
                    type="text"
                    name="nickname"
                    onChange={changeInputHandler}
                    placeholder="닉네임을 입력해주세요"
                  />
                </SignupBox>
                <SignupBox>
                  <SignupLabal>username</SignupLabal>
                  <Input
                    InputStyle="LoginStyle"
                    type="text"
                    name="username"
                    onChange={changeInputHandler}
                    placeholder="아이디를 입력해주세요"
                  />
                </SignupBox>
                <div style={{ marginTop: '20px' }}>
                  <Button bgcolor="red" type="submit" boxstyle="box">
                    회원가입
                  </Button>
                </div>
              </SignupForm>
            </Login>
            <LoginSimple>
              <TitleLogin>
                <FaLock />
                <span>간편 회원가입</span>
              </TitleLogin>
              <NaverLogin />
              <a href={KAKAO_AUTH_URL}>
                <span>카카오계정 로그인</span>
              </a>
            </LoginSimple>
          </LoginUi>
        </JoinContainer>
      </JoinWrap>
      <TotalFooter />
    </>
  );
}

export default Join;

const TitleLogin = styled.div`
  margin-top: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10%;
`;

const LoginSimple = styled.div`
  padding-top: 85px;
  width: 50%;
  max-width: 485px;
  padding-left: 8.74%;
  float: right;
`;

const Login = styled.div`
  /* padding-top: 85px; */
  width: 50%;
  min-width: 530px;
  border-right: 3px solid #c5c1c1;
  float: left;
  /* border: 1px solid; */
`;

const LoginUi = styled.div`
  margin: 20px 0px;
  border-radius: 20px;
  min-height: 560px;
  padding: 45px 30px 70px;
  display: flex;
`;
const JoinContainer = styled.div`
  max-width: 1184px;
  margin: 0 auto;
`;
const WelcomeBox = styled.div`
  max-width: 1184px;
  padding: 75px 20px 0px;
  margin: 0 auto;
`;
const Page_tit02 = styled.h2`
  color: #2e2e2e;
  font-weight: 400;
  font-size: 2.5rem;
`;

const Txt_welcome = styled.div`
  margin: 30px 0 0;
  font-size: 1.5rem;
`;

const Txt_info = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

const StrongRed = styled.span`
  color: #e22219;
`;

const JoinWrap = styled.div`
  padding: 0;
  background: #fff;
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
`;
const SignupForm = styled.form`
  padding-left: 10%;
  max-width: 500px;
  height: 400px;
  margin: 20px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SignupBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
`;

const SignupLabal = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;
