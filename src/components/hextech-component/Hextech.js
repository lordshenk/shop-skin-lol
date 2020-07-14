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
			<h1>Hextech Crafting</h1>
			<img src={hextech} alt=""/>
		</div>
	)
}

export default Hextech;