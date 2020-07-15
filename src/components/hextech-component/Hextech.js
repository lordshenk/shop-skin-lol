import React from 'react';
import './Hextech.css';
import Menu from '../Menu.js';
import Carousel from './Carousel.js';

function Hextech() {
	return (
		<div className='hextech d-flex flex-column align-items-center justify-content-center'>
			<Menu />
			<div className='circle'>
				<Carousel />
			</div>
		</div>
	)
}

export default Hextech;