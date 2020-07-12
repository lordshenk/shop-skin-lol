import React from 'react';
import logo from '../assets/logo-2.png';

function Footer(props) {
	function handleClick() {
		document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
	}
	return(
		<div className='footer d-flex flex-column align-items-center'>
			<div onClick={handleClick} className='d-flex align-items-end'>
				<img src="https://img.icons8.com/ios-glyphs/50/000000/league-of-legends.png"/>
				<p>Shop Skin Lol</p>
			</div>
			<p>Developed by <a href="https://github.com/lordshenk" target='_blank'>Lordshenk</a></p>
		</div>
	)
}

export default Footer;