import styled from 'styled-components';

const Pass = styled.span`
  font-size: 13px;
  color: #69e454;
`;

const Rejects = styled.span`
  color: red;
  font-size: 11px;
`;

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
  width: 50%;
  min-width: 530px;
  float: left;
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
const Pagetit02 = styled.h2`
  color: #2e2e2e;
  font-weight: 400;
  font-size: 2.5rem;
`;

const Txtwelcome = styled.div`
  margin: 30px 0 0;
  font-size: 1.5rem;
`;

const Txtinfo = styled.p`
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
export {
  SignupLabal,
  SignupBox,
  SignupForm,
  Circle,
  JoinWrap,
  StrongRed,
  Txtinfo,
  Txtwelcome,
  Pagetit02,
  WelcomeBox,
  JoinContainer,
  Pass,
  Rejects,
  TitleLogin,
  LoginSimple,
  Login,
  LoginUi,
};
