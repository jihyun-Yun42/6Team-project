import React from 'react';
import Banner from '../components/Banner';
import GlobalStyle from '../components/GlobalStyle';
import Nav from '../components/Nav';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Banner />
      </div>
    </>
  );
}

export default Home;
