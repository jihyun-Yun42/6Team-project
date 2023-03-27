import React, { useState } from 'react';
import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const Banner = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };
  const [index, setIndex] = useState(0);

  const images = [
    './assets/IMG_0488.JPG',
    './assets/IMG_0489.JPG',
    './assets/IMG_0491.JPG',
  ];

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  setTimeout(() => {
    setIndex((index + 1) % images.length);
  }, 5000);

  return (
    // <Slider {...settings} style={{ overflow: 'hidden', paddingTop: '130px' }}>
    //   <div>
    //     <BannerImg src="./assets/IMG_0488.JPG" />
    //   </div>
    //   <div>
    //     <BannerImg src="./assets/IMG_0489.JPG" />
    //   </div>
    //   <div>
    //     <BannerImg src="./assets/IMG_0491.JPG" />
    //   </div>
    // </Slider>
    <Slider>
      <div style={{ transition: 'all 0.3s ease-out' }}>
        <BannerImg src={images[index]} />
        <BannerBtn onClick={prevImage} style={{ left: 0 }}>
          <VscChevronLeft />
        </BannerBtn>
        <BannerBtn onClick={nextImage} style={{ right: 0 }}>
          <VscChevronRight />
        </BannerBtn>
      </div>
    </Slider>
  );
};

const Slider = styled.div`
  /* max-width: 1200px; */
  position: relative;
`;
const BannerImg = styled.img`
  margin-top: 130px;
  width: 100%;
  float: left;
  /* margin-top: 5px; */
  max-height: 100%;
  z-index: 2;
  transform: translateX(1000);
  transition: all 0.3s ease-out;
`;

const BannerBtn = styled.button`
  border: 0px;
  background-color: transparent;
  position: absolute;
  top: 31vh;
  font-size: 40px;
  z-index: 3;
  color: #fff;
`;
export default Banner;
