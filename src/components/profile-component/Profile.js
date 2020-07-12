import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu.js';
import Footer from '../Footer.js';
import { trendSkins } from '../../assets/champions';
import { Container, Row, Col } from 'reactstrap';
import avts from './Avt.js';
import mark from "../../assets/mark.webp";
import rp from '../../assets/rp.png';

function Profile(props) {
	let x;
	return (
		<div className="profile">
			<Menu />
			<div
				className='details d-flex flex-column align-items-center'
				style={{backgroundImage: `url(${trendSkins[0].linkImg})`}}>
				<Container>
					<Row>
						<Col md='6'>
							<div className="info d-flex align-items-center">
								<img src={avts[Math.floor(Math.random()*avts.length)]} alt="avatar"/>
								<div>
									<p>Anonymous</p>
									<p><img src={mark} alt="ingame"/> lordshenk</p>
									<div className='d-flex '><img src={rp} alt="rp"/><p>{x ? 1000 : 9999}</p></div>
								</div>
							</div>
						</Col>
						<Col md='6'>
							<div className="info d-flex align-items-center">
								<img src={avts[Math.floor(Math.random()*avts.length)]} alt="avatar"/>
								<div>
									<p>Anonymous</p>
									<p><img src={mark} alt="ingame"/> lordshenk</p>
									<div className='d-flex '><img src={rp} alt="rp"/><p>{x ? 1000 : 9999}</p></div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</div>
	)
}

export default Profile;