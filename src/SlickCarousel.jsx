import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { shortList, list, longList } from './data';

/* https://react-slick.neostack.com/ url de la extensión*/

const SlickCarousel = ({ changeCarousel, setChangeCarousel }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: true,
  };
  const changeCarouselX = () => {
    setChangeCarousel(!changeCarousel);
  };
  return (
    <>
      <section className="buttons ">
        <button className="btn" onClick={changeCarouselX}>
          Mostrar slider manual
        </button>
      </section>
      <section className="slick-container">
        <Slider {...settings}>
          {list.map((person) => {
            const { id, image, name, title, quote } = person;
            return (
              <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h5 className="name">{name}</h5>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SlickCarousel;
