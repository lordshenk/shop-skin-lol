import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Menu from '../Menu.js';
import Footer from '../Footer.js';
import ScrollTopOnMount from '../ScrollTopOnMount.js';
import { Container, Row, Col, Table } from 'reactstrap';
import avts from './Avt.js';
import mark from "../../assets/mark.webp";
import rp from '../../assets/rp.png';
import { trendSkins as history } from '../../assets/champions.js';

function Profile(props) {
	return (
		<div className="profile" style={{backgroundImage: `url(${history[0].linkImg})`}}>
			<ScrollTopOnMount />
			<Menu />
			<div
				className='details d-flex flex-column align-items-center'
				>
				<Container>
					<Row>
						<Col xs="12">
							<div className="info d-flex align-items-center">
								<img src={avts[Math.floor(Math.random()*avts.length)]} alt="avatar"/>
								<div>
									<p>Anonymous</p>
									<p><img src={mark} alt="ingame"/> lordshenk</p>
									<div className='d-flex '><img src={rp} alt="rp"/><p>9999</p></div>
								</div>
							</div>
						</Col>
						<Col xs="12" className='history'>
							<p>History</p>
							<Table striped>
								<thead>
									<tr>
										<th>Skin</th>
										<th>Time</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									{history.map( (ele, ind) => (
										<tr key={ind}>
											<td>{ele.skin}</td>
											<td>Today</td>
											<td>699</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	)
}

export default Profile;