import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Button
} from 'reactstrap';
import rpImg from '../../assets/rp.png';
import hextech1 from '../../assets/hextech1.png';
import hextech2 from '../../assets/hextech2.png';
import hextech4 from '../../assets/hextech4.webp';
import hextech5 from '../../assets/hextech5.png';
import hextech6 from '../../assets/hextech6.png';
import hextech7 from '../../assets/hextech7.png';

const items = [ hextech4, hextech2, hextech6, hextech5, hextech1, hextech7 ];

function HextechCarousel() {
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
  
  const slides = items.map((item, ind) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item} alt='' />
        <Button className='buy-btn'>
	        <span>{(ind + 1)*29}</span>
	        <img src={rpImg} alt=""/>
	      </Button>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HextechCarousel;