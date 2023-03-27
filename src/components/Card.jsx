import React from 'react';
import styled from 'styled-components';

export const Card = ({ item }) => {
  console.log(item);
  return <CardBox key={item.id}>{item.title}</CardBox>;
};

const CardBox = styled.div`
  width: 245px;
  height: 210px;
  border: 1px solid;
`;
