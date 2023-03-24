import React from 'react'
import styled from 'styled-components'
import FooterDelivery from '../components/FooterDelivery'
import HeaderDelivery from '../components/HeaderDelivery'

function Join() {
  return (
    <>
    <HeaderDelivery/>
    <StyledDiv></StyledDiv>
    <FooterDelivery/>
    </>
  )
}

export default Join

const StyledDiv =styled.div`
  height: 1000px;
  background-color: #b5aeae;
`