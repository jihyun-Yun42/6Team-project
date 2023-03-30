import React, { useEffect, useRef, useState } from 'react';
import { FaKey, FaLock } from 'react-icons/fa';
import { apis } from '../../axios/api';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { cookies } from '../../shared/cookies';
import * as Join from './StyledJoin';

function JoinDelivery() {
  const nav = useNavigate();
  const inputRef = useRef();
  const [signupUser, setSignupUser] = useState({
    username: '',
    email: '',
    password: '',
    nickname: '',
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setSignupUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await apis.post('/api/signup', signupUser);
      nav('/login');
    } catch (e) {
      console.log('error', e);
    }
  };

  const pwCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
  const nicknameCheck = /^[a-zA-Z가-힣0-9]{2,16}$/;
  const usernameCheck = /^[a-z0-9]{4,10}$/;

  let showbutton =
    usernameCheck.test(signupUser.username) &&
    pwCheck.test(signupUser.password) &&
    nicknameCheck.test(signupUser.nickname) &&
    signupUser.email;

  useEffect(() => {
    inputRef.current.focus();
    const token = cookies.get('token');
    if (token) {
      nav('/deliveryHome');
    }
  }, [nav]);
  return (
    <Join.JoinWrap>
      <Join.JoinContainer>
        <Join.WelcomeBox>
          <Join.Pagetit02>환영합니다!</Join.Pagetit02>
          <Join.Txtwelcome>
            <p>
              이메일 주소 혹은 sns 계정으로 간편하게{' '}
              <Join.StrongRed>회원가입</Join.StrongRed>
              하세요!
            </p>
            <Join.Txtinfo>
              버거킹 서비스는 만 14세 이상부터 이용 하실 수 있습니다.
            </Join.Txtinfo>
          </Join.Txtwelcome>
        </Join.WelcomeBox>
        <Join.LoginUi>
          <Join.Login>
            <Join.TitleLogin>
              <Join.Circle>
                <FaKey />
              </Join.Circle>
              <span>이메일 회원가입</span>
            </Join.TitleLogin>
            <Join.SignupForm onSubmit={submitHandler}>
              <Join.SignupBox>
                <Join.SignupLabal>이메일</Join.SignupLabal>
                <Input
                  InputStyle="LoginStyle"
                  type="email"
                  name="email"
                  onChange={changeInputHandler}
                  placeholder="이메일을 입력해주세요"
                  inputRef={inputRef}
                />
              </Join.SignupBox>
              <Join.SignupBox>
                <Join.SignupLabal>ID</Join.SignupLabal>
                <div>
                  <Input
                    InputStyle="LoginStyle"
                    type="text"
                    name="username"
                    onChange={changeInputHandler}
                    placeholder="아이디를 입력해주세요"
                  />
                  <div>
                    {usernameCheck.test(signupUser.username) ? (
                      <Join.Pass>사용 가능합니다</Join.Pass>
                    ) : (
                      <Join.Rejects>
                        4~10글자 알파벳 소문자(a~z), 숫자(0~9)만 입력 가능합니다.
                      </Join.Rejects>
                    )}
                  </div>
                </div>
              </Join.SignupBox>
              <Join.SignupBox>
                <Join.SignupLabal>비밀번호</Join.SignupLabal>
                <div>
                  <Input
                    InputStyle="LoginStyle"
                    type="password"
                    name="password"
                    onChange={changeInputHandler}
                    placeholder="비밀번호를 입력해주세요"
                  />
                  <div>
                    {pwCheck.test(signupUser.password) ? (
                      <Join.Pass>사용 가능합니다</Join.Pass>
                    ) : (
                      <Join.Rejects>
                        8~15글자, 글자 1개, 숫자 1개, 특수문자 1개 꼭 입력해야합니다.
                      </Join.Rejects>
                    )}
                  </div>
                </div>
              </Join.SignupBox>
              <Join.SignupBox>
                <Join.SignupLabal>닉네임</Join.SignupLabal>
                <div>
                  <Input
                    InputStyle="LoginStyle"
                    type="text"
                    name="nickname"
                    onChange={changeInputHandler}
                    placeholder="닉네임을 입력해주세요"
                  />
                  <div>
                    {nicknameCheck.test(signupUser.nickname) ? (
                      <Join.Pass>사용 가능합니다</Join.Pass>
                    ) : (
                      <Join.Rejects>
                        2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성되야 합니다
                      </Join.Rejects>
                    )}
                  </div>
                </div>
              </Join.SignupBox>
              {showbutton ? (
                <div style={{ marginTop: '20px' }}>
                  <Button bgcolor="red" type="submit" boxstyle="box">
                    회원가입
                  </Button>
                </div>
              ) : null}
            </Join.SignupForm>
          </Join.Login>
        </Join.LoginUi>
      </Join.JoinContainer>
    </Join.JoinWrap>
  );
}

export default JoinDelivery;
