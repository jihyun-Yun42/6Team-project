import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ overflow: 'hidden', paddingTop: '125px' }}>
      <Slider {...settings}>
        <div>
          <BannerImg src="./assets/IMG_0488.JPG" />
        </div>
        <div>
          <BannerImg src="./assets/IMG_0489.JPG" />
        </div>
        <div>
          <BannerImg src="./assets/IMG_0491.JPG" />
        </div>
        {/* <BannerImg src="./assets/IMG_0488.JPG" />
        <BannerImg src="./assets/IMG_0489.JPG" />
        <BannerImg src="./assets/IMG_0491.JPG" /> */}
      </Slider>
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
