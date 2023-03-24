import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <MainBanner>
      <div>
        <img src="../assets/IMG_0488.JPG" />
      </div>
      <div>
        <img src="../assets/IMG_0489.JPG" />
      </div>
      <div>
        <img src="../assets/IMG_0491.JPG" />
      </div>
    </MainBanner>
  );
};

const MainBanner = styled.div`
  padding-top: 130px;
  width: 300vw;
`;

export default Banner;
