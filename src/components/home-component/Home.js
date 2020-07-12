import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu.js';
import Trending from './Trending.js';
import Champions from './Champions.js';
import Footer from '../Footer.js';

function Home() {
  return(
    <div className='home'>
    	<Menu />
    	<div className='title d-flex flex-column justify-content-center align-items-center'>
    	 <p>LOL SKIN</p>
    	 <p>With more than 900 champions, 
    	 	you’ll find the perfect match for your style.</p>
    	</div>
      <Trending />
      <Champions />
      <Footer />
    </div>
  )
}

export default Home;