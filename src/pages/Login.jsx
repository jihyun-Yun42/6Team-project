import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import FooterDelivery from '../components/FooterDelivery'
import HeaderDelivery from '../components/HeaderDelivery'
import NavDelivery from '../components/NavDelivery'

function Login() {


  return (
    <>
    <HeaderDelivery/>
    <NavDelivery/>
    <LoginContainer>
      <LoinTitle color={'#e22219'} >YOUR WAY</LoinTitle>
      <LoinTitle >어서오세요 버거킹입니다.</LoinTitle>
      <LoginUI>
        <LoginArea>
          <div>일반로그인</div>
          <LogInForm>
            <input placeholder='아이디(이메일)'/>
            <input placeholder='비밀번호'/>
            <div>
              <Button>로그인</Button>
              <Button>회원가입</Button>
            </div>
            <div>
              <span>아이디찾기</span>
              <span>비밀번호찾기</span>
            </div>
          </LogInForm>
        </LoginArea>
        <OAuthArea>
          <div>간편 로그인</div>
          <div>네이버로그인</div>
          <div>애플로그인</div>
        </OAuthArea>
      </LoginUI>
    </LoginContainer>
    <NoneUserContainer>비회원구역</NoneUserContainer>
    <FooterDelivery/>
    </>
  )
}

export default Login

const LogInForm=styled.form`
  display: flex;
  flex-direction:column;
`

const LoinTitle=styled.p`
  color:${({color})=>color};
  font-size: 40px
`

const LoginArea=styled.div`
  width: 50%;
  background-color: #ffffff;
  min-width: 530px;
  padding-right: 5.23%;
  border-right: 1px solid #e5e5e5;
`
const OAuthArea=styled.div`
  width: 50%;
  background-color: white;
`

const LoginUI =styled.div`
  display: flex;
`

const LoginContainer =styled.div`
  height: 684px;
  margin: 0px auto;
  max-width: 1184px;
  background-color: #e1e1e1;
  padding :75px 25px 0px;
`
const NoneUserContainer =styled.div`
  background-color: #F2EBE6;
  height: 465px;
`

