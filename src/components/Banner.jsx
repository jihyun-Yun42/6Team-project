import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const Banner = () => {
  const index = useRef(0);
  const [num, setNum] = useState(index.current);

  const images = [
    './assets/IMG_0488.JPG',
    './assets/IMG_0489.JPG',
    './assets/IMG_0491.JPG',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      index.current = (index.current + 1) % images.length;
      setNum(!num);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [num]);

  const nextImage = () => {
    index.current = (index.current + 1) % images.length;
    setNum(!num);
  };

  const prevImage = () => {
    index.current = (index.current + images.length - 1) % images.length;
    setNum(!num);
  };

  console.log(index.current);
  return (
    <Slider>
      <div>
        <BannerImg src={images[index.current]} />
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
export default Banner;
