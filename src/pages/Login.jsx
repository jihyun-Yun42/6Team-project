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
    <StyledDiv></StyledDiv>
    <FooterDelivery/>
    </>
  )
}

export default Login

const StyledDiv =styled.div`
  height: 1000px;
  background-color: #ffffff;
`
