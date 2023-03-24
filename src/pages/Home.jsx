import React from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import YouTube from 'react-youtube';

function Home() {
  return (
    <>
      <Nav />
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Banner />
        <YouTube
          videoId="85jrGITDPHc"
          opts={{
            width: '100%',
            height: '550',

            playerVars: {
              autoplay: 1, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
        />
      </div>
    </>
  );
}

export default Home;
