import styled from 'styled-components';
import bgimg from '../../assets/bg_personality.2ff1d0f9.gif';

const CardBox = styled.div`
  position: relative;
  width: 240px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const CardImg = styled.div`
  width: 240px;
  height: 180px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CardBurgerName = styled.div`
  font-size: 20px;
`;

const CardBurgerPrice = styled.div`
  color: #e22219;
  font-size: 18px;
`;

const BtnCard = styled.button`
  position: absolute;
  border: 0;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
`;

const Tab_cont = styled.div`
  min-height: 522px;
  display: flex;
  gap: 3%;
  flex-wrap: wrap;
  padding: 4%;
`;
const MenuAreaDiv = styled.div`
  margin: 50px auto 0 auto;
  max-width: 1184px;
`;
const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
`;

const MenuBtn = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 20px;
  font-family: 'TmoneyRoundWindExtraBold';
  color: #b8b8b8;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:focus {
    color: #e22219;
    border-bottom: 3.5px solid #e22219;
  }
`;

const BetweenNavWrap = styled.div`
  margin-top: 168px;
  height: 124px;
  background-image: url(${bgimg});
  display: flex;
  align-items: center;
`;

const BetweenNavContainer = styled.div`
  min-width: 1184px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Order = styled.div`
  font-size: 100px;
  color: white;
  margin-right: 10px;
`;

const NavTitle = styled.div`
  font-size: 18px;
  color: white;
`;
export {
  CardBox,
  CardImg,
  CardBurgerName,
  CardBurgerPrice,
  BtnCard,
  Tab_cont,
  MenuAreaDiv,
  MenuList,
  MenuBtn,
  BetweenNavWrap,
  BetweenNavContainer,
  Order,
  NavTitle,
};
