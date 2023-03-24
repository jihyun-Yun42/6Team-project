import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  setTimeout(() => {}, 5000);
  return (
    <div style={{ overflow: 'hidden' }}>
      <MainBanner>
        <BannerImgBox>
          <BannerImg src="./assets/IMG_0488.JPG" />
        </BannerImgBox>
        <BannerImgBox>
          <BannerImg src="./assets/IMG_0489.JPG" />
        </BannerImgBox>
        <BannerImgBox>
          <BannerImg src="./assets/IMG_0491.JPG" />
        </BannerImgBox>
        {/* <BannerImg src="./assets/IMG_0488.JPG" />
        <BannerImg src="./assets/IMG_0489.JPG" />
        <BannerImg src="./assets/IMG_0491.JPG" /> */}
      </MainBanner>
    </div>
  );
};

const MainBanner = styled.div`
  padding-top: 125px;
  width: 300vw;
  transition: transform 0.5s;
  transform: translate(-100vw);
`;

const BannerImgBox = styled.div`
  width: 100vw;
  float: left;
`;

const BannerImg = styled.img`
  width: 100%;
  /* background-size: cover; */
  /* width: 100vw; */
  float: left;
  /* max-height: 100%; */
  /* vertical-align: top; */
`;
export default Banner;
