import React from 'react';
import './Champion.css';
import { useParams } from 'react-router-dom';
import Menu from '../Menu.js';
import Skins from '../Skins.js';
import ScrollTopOnMount from '../ScrollTopOnMount.js';
import champions from '../../assets/champions.js';

function Champion() {
	const { name } = useParams();
	const items = [];
	const champion = champions.find( i => Object.keys(i)[0].split(' ').join('') === name);
	for ( let i in champion[Object.keys(champion)[0]].name) {
		const name = Object.keys(champion)[0];
		if ( i > 0) {
			const skin = champion[Object.keys(champion)[0]].name[i];
			const linkImg = champion[Object.keys(champion)[0]].img[i];
			items.push({ name, skin, linkImg});
		}
	}
	return(
		<div className="champ">
			<ScrollTopOnMount />
			<Menu />
			<Skins items={items}/>
		</div>
	)
}

export default Champion;