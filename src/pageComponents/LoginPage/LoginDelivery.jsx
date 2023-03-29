import jwtDecode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../shared/cookies";
import * as Login from "./StyledLogin";
import { FaKey, FaLock } from "react-icons/fa";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { apis } from "../../axios/api";
import KakaoLogo from "../../assets/kakaologin.png";
import { KAKAO_AUTH_URL } from "./KakaoLogin";

function LoginDelivery() {
  const navi = useNavigate();
  const inputRef = useRef();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await apis.post("/api/login", user);
      const token = result.headers.authorization.split(" ")[1];
      const decodeToken = jwtDecode(token);
      cookies.set("token", token, { path: "/" });
      cookies.set("userId", decodeToken.auth, { path: "/" });
      alert("로그인성공");
      navi("/deliveryHome");
    } catch (event) {
      alert("ErrorEvent", event);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <Login.LoginContainer>
        <div style={{ paddingBottom: "30px" }}>
          <Login.LoinTitle color={"#e22219"}>YOUR WAY</Login.LoinTitle>
          <Login.LoinTitle>어서오세요! 버거킹입니다.</Login.LoinTitle>
        </div>
        <Login.LoginUI>
          <Login.LoginArea>
            <Login.TitleLogin>
              <Login.Circle>
                <FaKey />
              </Login.Circle>
              <span>일반로그인</span>
            </Login.TitleLogin>
            <Login.LogInForm onSubmit={submitHandler}>
              <Input
                inputRef={inputRef}
                InputStyle={"LoginStyle"}
                type="text"
                placeholder="아이디(이메일)"
                value={user.username}
                name="username"
                onChange={changeInputHandler}
              />
              <Input
                InputStyle={"LoginStyle"}
                type="password"
                placeholder="비밀번호"
                value={user.password}
                name="password"
                onChange={changeInputHandler}
              />
              <Login.Btns>
                <Button type="submit" bgcolor="red" boxstyle="box">
                  로그인
                </Button>
                <Button
                  type="button"
                  onClick={() => navi("/join")}
                  bgcolor="brown"
                  boxstyle="box"
                >
                  회원가입
                </Button>
              </Login.Btns>
              <div>
                <span style={{ marginRight: "20px" }}>아이디찾기</span>
                <span>비밀번호찾기</span>
              </div>
            </Login.LogInForm>
          </Login.LoginArea>
          <Login.OAuthArea>
            <Login.OauthLogin>
              <Login.TitleLogin>
                <Login.Circle>
                  <FaLock />
                </Login.Circle>
                <span>간편 로그인</span>
              </Login.TitleLogin>
              <Login.SocialLogin>
                <a href={KAKAO_AUTH_URL}>
                  <Login.KakaoLogin src={KakaoLogo} />
                </a>
              </Login.SocialLogin>
            </Login.OauthLogin>
          </Login.OAuthArea>
        </Login.LoginUI>
      </Login.LoginContainer>
    </>
  );
}

export default LoginDelivery;
