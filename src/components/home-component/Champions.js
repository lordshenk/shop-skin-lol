import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import championsData from '../../assets/champions.js';
import lazyImg from '../../assets/lazy-img.png';
import Pagination from 'react-js-pagination';

function Champions(props) {
	const champions = championsData;
	const [ championsFilter, setChampionsFilter ] = useState([]);
	const [ activePage, setActivePage] = useState(1);
  const history = useHistory();
  let page = useParams().page;
  page = page ? Number(page) : 1;
  let pageChampions = championsFilter.length > 0 ? championsFilter.slice((page - 1)*20, page*20) : champions.slice((page - 1)*20, page*20) ;
	function handleInput(e) {
		if ( e.key === 'Enter') {
			let inputValue = e.target.value.toLowerCase();
			let filter = champions.filter( i => Object.keys(i)[0].toLowerCase().includes(inputValue));
			setActivePage(1);
    	history.replace(`/home/1`);
			setChampionsFilter(filter);
		}		
	}
  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    history.replace(`/home/${pageNumber}`);
  }

	return (
		<div className='champions'>
			<h1>Champions</h1><br/>
			<input type="text" placeholder='search champion' className='text-center' onKeyPress={handleInput}/>
			<div className='d-flex flex-wrap'>
				{pageChampions.map(( ele, ind) => (
					<div key={ind} className='champion d-flex justify-content-center mb-3 mb-md-5'>
						<Card 
							tag={Link} to={`/champion/${Object.keys(ele)[0].split(' ').join('')}`}
							className='justify-content-center align-items-center'
							title={Object.keys(ele)[0]}>
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
			<Pagination
        hideFirstLastPages
        activePage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={championsFilter.length ? championsFilter.length : champions.length}
        onChange={handlePageChange.bind(this)}
      />
		</div>
	);
}

export default Champions;
