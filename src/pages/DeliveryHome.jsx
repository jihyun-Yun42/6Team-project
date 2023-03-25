import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import FooterDelivery from '../components/FooterDelivery'
import HeaderDelivery from '../components/HeaderDelivery'
import NavDelivery from '../components/NavDelivery'
import { cookies } from '../shared/cookies'

function DeliveryHome() {
  const navi =useNavigate();
  const token =cookies.get("token")
  useEffect(()=>{
    if(!token){
      alert('로그인이필요합니다')
      navi('/login')
    }
  },[])
  return (
    <>
      <HeaderDelivery/>
      <NavDelivery/>
      <MenuArea>
        <div>메뉴</div>
        <Tab_cont>
          f
        </Tab_cont>
        <Order_coution>
          <div>유의사항,원산지, 영양성분, 알레르기 유발성분</div>
          <ul>
            <li>매장별 주문금액이 상이하니, 반드시 최소금액을 확인하기 바랍니다.</li>
            <li>배달 소요시간은 기상조건이나 매장 사정상 지연 또는 제한될 수 있습니다.</li>
            <li>고객님과 수 차례 연락을 시도한 후 연락이 되지 않는 경우 배달음식이 변질되거나 부패될 우려로 식품위생법상 위반될 여지가 있어 별도로 보관 하지 않으며, 재배달 또는 환불처리가 어려울 수 있습니다.</li>
            <li>딜리버리 서비스 메뉴의 가격은 매장 가격과 상이하며, 딜리버리 시 타쿠폰을 사용하실 수 없습니다. (일부품목 배달 제외)</li>
            <li>배달 제품은 매장 행사(할인가격)에서 제외됩니다.</li>
            <li>제품 가격 및 메뉴 구성은 본사 사정상 변경될 수 있습니다.</li>
            <li>대량 주문의 경우 콜센터(1599-0505)주문으로만 가능합니다.</li>
            <li>주문 완료 후 변경 및 취소는 콜센터(1599-0505)에서만 가능합니다.</li>
          </ul>
        </Order_coution>
      </MenuArea>
      <FooterDelivery/>
    </>
  )
}

export default DeliveryHome

const Tab_cont =styled.div`
  background-color: #aad3d3;
  height: 522px;
`

const MenuArea=styled.div`
  background-color: #917d7d;
  margin: 0px auto;
  max-width: 1184px;
  /* height: 934px; */
`

const Order_coution =styled.div`
  background-color: green;
`