import React from 'react';
import Showcase from './Showcase';
import Celebrities from './Celebrities';
const Home = () => {
  return(
    <div className="container">
      <Showcase/>
      <Celebrities/>
    </div>
  )
}

export default Home;