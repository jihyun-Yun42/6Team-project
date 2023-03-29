import React, { useEffect, useRef, useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import * as Home from './StyledHome';

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

  return (
    <Home.Slider>
      <Home.BannerImg src={images[index.current]} />
      <Home.BannerBtn onClick={prevImage} style={{ left: 0 }}>
        <VscChevronLeft />
      </Home.BannerBtn>
      <Home.BannerBtn onClick={nextImage} style={{ right: 0 }}>
        <VscChevronRight />
      </Home.BannerBtn>
    </Home.Slider>
  );
};

export default Banner;
