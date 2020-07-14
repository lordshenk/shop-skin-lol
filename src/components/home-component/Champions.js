import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import champions from '../../assets/champions.js';
import lazyImg from '../../assets/lazy-img.png';

function Champions(props) {
	const [ isEnter, setIsEnter ] = useState(false);
	const [ championsFilter, setChampionsFilter ] = useState([]);
	function handleInput(e) {
		if ( e.key === 'Enter') {
			let inputValue = e.target.value.toLowerCase();
			let filter = champions.filter( i => Object.keys(i)[0].toLowerCase().includes(inputValue));
			setChampionsFilter(filter);
		}		
	}
	return (
		<div className='champions'>
			<h1>Champions</h1><br/>
			<input type="text" placeholder='search champion' className='text-center' onKeyPress={handleInput}/>
			<div className='d-flex flex-wrap'>
				{championsFilter.length === 0 ? champions.map(( ele, ind) => (
					<div key={ind} className='champion d-flex justify-content-center mb-3 mb-md-5'>
						<Card tag={Link} to={`/champion/${Object.keys(ele)[0].split(' ').join('')}`} className='justify-content-center align-items-center'>
							<Lazyload
								height={200} offset={100} once={true}
								placeholder={<CardImg top width='100%' src={lazyImg} alt='champion' />}>
								<CardImg top width='100%' src={ele[Object.keys(ele)[0]].img[0]} alt='champion' />
							</Lazyload>
							<CardBody>
								<CardTitle>{Object.keys(ele)[0]}</CardTitle>
							</CardBody>
						</Card>
					</div>
				)) : championsFilter.map(( ele, ind) => (
					<div key={ind} className='champion d-flex justify-content-center mb-3 mb-md-5'>
						<Card tag={Link} to={`/champion/${Object.keys(ele)[0].split(' ').join('')}`} className='justify-content-center align-items-center'>
							<Lazyload
								height={200} offset={100} once={true}
								placeholder={<CardImg top width='100%' src={lazyImg} alt='champion' />}>
								<CardImg top width='100%' src={ele[Object.keys(ele)[0]].img[0]} alt='champion' />
							</Lazyload>
							<CardBody>
								<CardTitle>{Object.keys(ele)[0]}</CardTitle>
							</CardBody>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}

export default Champions;
