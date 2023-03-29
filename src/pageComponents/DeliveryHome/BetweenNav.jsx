import { MdDeliveryDining } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import { Flex } from '../../components/Flex';
import * as delivery from './StyledDelivery';

function BetweenNav() {
  return (
    <delivery.BetweenNavWrap>
      <delivery.BetweenNavContainer>
        <Flex>
          <delivery.Order>
            <MdDeliveryDining />
          </delivery.Order>
          <Flex fd="column" jc="space-evenly">
            <delivery.NavTitle style={{ fontSize: '25px' }}>
              딜리버리 주문내역
            </delivery.NavTitle>
            <delivery.NavTitle>주문내역이 없습니다.</delivery.NavTitle>
          </Flex>
        </Flex>
        <Flex>
          <delivery.Order>
            <TiShoppingCart />
          </delivery.Order>
          <Flex fd="column" jc="space-evenly">
            <delivery.NavTitle style={{ fontSize: '25px' }}>
              딜리버리 주문내역
            </delivery.NavTitle>
            <delivery.NavTitle>주문내역이 없습니다.</delivery.NavTitle>
          </Flex>
        </Flex>
      </delivery.BetweenNavContainer>
    </delivery.BetweenNavWrap>
  );
}

export default BetweenNav;
