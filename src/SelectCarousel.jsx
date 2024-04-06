import React, { useState } from 'react';
import Carousel from './Carousel';
import SlickCarousel from './SlickCarousel';

const SelectCarousel = () => {
  const [changeCarousel, setChangeCarousel] = useState(false);

  if (!changeCarousel) {
    return (
      <>
        <Carousel
          changeCarousel={changeCarousel}
          setChangeCarousel={setChangeCarousel}
        />
      </>
    );
  } else {
    return (
      <SlickCarousel
        changeCarousel={changeCarousel}
        setChangeCarousel={setChangeCarousel}
      />
    );
  }
};

export default SelectCarousel;
