import styled from 'styled-components';

const Map = styled.div`
  width: 100%;
  height: 750px;
  z-index: 1;
`;

const Store = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 10px;
`;
const StoreSearchBox = styled.div`
  width: 400px;
  background-color: white;
  position: absolute;
  height: 640px;
  top: 20%;
  right: 0;
  z-index: 2;
`;
const StoreListBox = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 5%;
  background-color: #f5eadc;
  height: 100%;
  box-sizing: border-box;
`;
const ListTitle = styled.div`
  height: 50px;
`;

const StoreBox = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 5%;
`;
const PlaceName = styled.span`
  font-size: 20px;
`;

const PlaceAddress = styled.div`
  color: #939191;
  font-family: 'IBMPlexSansKR-Regular';
  margin-top: 10px;
`;

const TitleLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;

export {
  Map,
  Store,
  StoreSearchBox,
  StoreListBox,
  ListTitle,
  StoreBox,
  PlaceName,
  PlaceAddress,
  TitleLink,
};
