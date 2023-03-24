import React from 'react'
import styled from 'styled-components'
import FooterDelivery from '../components/FooterDelivery'
import HeaderDelivery from '../components/HeaderDelivery'
import NavDelivery from '../components/NavDelivery'

function Login() {
  return (
    <>
    <HeaderDelivery/>
    <NavDelivery/>
    <LoginContainer>로그인 구역</LoginContainer>
    <NoneUserContainer>비회원구역</NoneUserContainer>
    <FooterDelivery/>
    </>
  )
}

export default Login

const LoginContainer =styled.div`
  height: 734px;
  background-color: #ffffff;
`
const NoneUserContainer =styled.div`
  background-color: #F2EBE6;
  height: 465px;
`
