import styled from 'styled-components';

const NavMenu = styled.div`
  width: 100%;
  position: fixed;
  background: white;
  z-index: 50;
  transition: all 0.2s ease-out;
  height: ${({ isbig }) => (isbig ? '400px' : '130px')};
  overflow: hidden;
`;

const NavLogo = styled.img`
  width: 82px;
  height: 83px;
  cursor: pointer;
`;

const NavContainer = styled.div`
  /* position: relative; */
  /* height: 100px; */
  padding: 24px 20px 0 20px;
  margin-left: 10%;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const ListTotalTitle = styled.div`
  /* position: absolute; */
  /* font-size: 1.375rem; */
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const MenuTitle = styled.div`
  position: relative;
  width: 65%;
  margin-left: 5%;
  margin-top: 40px;
  height: 60px;
`;

const MenuNavList = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 24.5%;
  font-size: 1.375rem;
  font-weight: 700;
  /* border: 1px solid red; */
`;

const NavListUl = styled.ul`
  margin-top: 50px;
`;

const NavListContent = styled.li`
  font-family: 'IBMPlexSansKR-Regular';
  font-size: 13px;
  font-weight: 300;
  margin: 15px 7px;
  cursor: pointer;
`;

const Slider = styled.div`
  position: relative;
`;
const BannerImg = styled.img`
  margin-top: 130px;
  width: 100%;
  float: left;
  max-height: 100%;
  z-index: 2;
  transform: translateX(1000);
  transition: all 0.3s ease-out;
`;

const BannerBtn = styled.button`
  border: 0px;
  background-color: transparent;
  position: absolute;
  top: 37vh;
  font-size: 40px;
  z-index: 3;
  color: #fff;
  cursor: pointer;
`;

export {
  NavMenu,
  NavLogo,
  NavContainer,
  ListTotalTitle,
  MenuTitle,
  MenuNavList,
  NavListUl,
  NavListContent,
  Slider,
  BannerImg,
  BannerBtn,
};
