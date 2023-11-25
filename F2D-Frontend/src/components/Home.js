import React from 'react';
import home_img from "../image/image1.png";

import "../style/home.css";
import About from './About';
const Home = () => {
  return (
<>

    <div className='home-container'>
      <div className="home-text">
        <p>Empowering Farmers, Connecting Consumers.</p>
      </div>
    </div>
    <About/>
    </>
  )
}

export default Home
