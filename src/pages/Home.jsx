import React from 'react';
import Banner from '../components/Banner';
import GlobalStyle from '../components/GlobalStyle';
import Nav from '../components/Nav';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Banner />
    </>
  );
}

export default Home;
