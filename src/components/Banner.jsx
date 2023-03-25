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
    <Slider {...settings} style={{ overflow: 'hidden', paddingTop: '125px' }}>
      <div>
        <BannerImg src="./assets/IMG_0488.JPG" />
      </div>
      <div>
        <BannerImg src="./assets/IMG_0489.JPG" />
      </div>
      <div>
        <BannerImg src="./assets/IMG_0491.JPG" />
      </div>
    </Slider>
  );
};

const BannerImg = styled.img`
  width: 100%;
  float: left;
  max-height: 100%;
`;
export default Banner;
