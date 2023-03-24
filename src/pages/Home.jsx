import React from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

function Home() {
  return (
    <>
      <Nav />
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Banner />
      </div>
    </>
  );
}

export default Home;
