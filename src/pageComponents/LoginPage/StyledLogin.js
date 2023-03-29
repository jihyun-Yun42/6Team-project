import styled from "styled-components";

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

export {
  Circle,
  LoginContainer,
  LoginUI,
  OAuthArea,
  LoginArea,
  LoinTitle,
  LogInForm,
  SocialLogin,
  Btns,
  TitleLogin,
  OauthLogin,
  KakaoLogin,
};
