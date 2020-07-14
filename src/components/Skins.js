import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';
import rp from '../assets/rp.png';


function Skins({items}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map( (item, ind) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={ind}
      >
        <img src={item.linkImg} alt='' />
        <CarouselCaption 
          captionText={item.name} 
          captionHeader={item.skin} />
        <Button className='buy-btn'>
          <span>{ind % 2 === 0 ? 299 : (ind % 3 === 0 ? 599 : 210)}</span>
          <img src={rp} alt=""/>
        </Button>
      </CarouselItem>
    );
  });

  return (
  	<div className='skins'>
  		<h1>Trending</h1>
	    <Carousel
	      activeIndex={activeIndex}
	      next={next}
	      previous={previous}
	      interval={ false }
	    >
	      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
	      {slides}
	      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
	      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
	    </Carousel>
    </div>
  );
}

export default Skins;
