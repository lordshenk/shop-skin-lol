import React from 'react';
import 'reactstrap';
import './Hextech.css';
import Menu from '../Menu.js';
import Footer from '../Footer.js';
import hextech from '../../assets/hextech.png';

function Hextech() {
	return (
		<div className='hextech'>
			<Menu />
			<img src={hextech} alt=""/>
			{/*<Footer />*/}
		</div>
	)
}

export default Hextech;