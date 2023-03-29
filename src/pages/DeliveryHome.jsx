import { AddMenu } from '../pageComponents/DeliveryHome/AddMenu';
import BetweenNav from '../pageComponents/DeliveryHome/BetweenNav';
import HeaderDelivery from '../components/HeaderDelivery';
import NavDelivery from '../components/NavDelivery';
import OrderCoution from '../components/OrderCoution';
import TotalFooter from '../components/TotalFooter';
import { MenuArea } from '../pageComponents/DeliveryHome/MenuArea';

function DeliveryHome() {
  return (
    <>
      <HeaderDelivery name={'딜리버리'} />
      <BetweenNav />
      <NavDelivery page="딜리버리" />
      <MenuArea />
      <OrderCoution />
      <TotalFooter />
    </>
  );
}
export default DeliveryHome;
