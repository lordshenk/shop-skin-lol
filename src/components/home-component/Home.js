import React from 'react';
import './Home.css';
import Menu from '../Menu.js';
import Skins from '../Skins.js';
import Champions from './Champions.js';
import Footer from '../Footer.js';
import { trendSkins } from '../../assets/champions';

const items = [...trendSkins];

function Home() {
  return(
    <div className='home'>
    	<Menu />
    	<div className='title d-flex flex-column justify-content-center align-items-center'>
    	 <p>LOL SKIN</p>
    	 <p>With more than 900 champions, 
    	 	you’ll find the perfect match for your style.</p>
    	</div>
      <Skins items={items}/>
      <Champions />
      <Footer />
    </div>
  )
}

export default Home;