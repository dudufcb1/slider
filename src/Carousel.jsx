import { shortList, list, longList } from './data';
import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ changeCarousel, setChangeCarousel }) => {
  //Personas en el array
  const [people, setPeople] = useState(list);

  //Persona mostrada actualmente
  const [currentPerson, setCurrentPerson] = useState(0);

  //Funcion para cambiar el
  const changeCarouselX = () => {
    setChangeCarousel(!changeCarousel);
  };

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = (oldPerson - 1 + people.length) % people.length;
      // 0 - 1 = -1 + 4  = 3 = 0 - 1 - 2- 3-
      //00-1=-1+12=11%12=11
      return newPerson;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = (oldPerson + 1) % people.length;
      //3+1=4%4=0
      //0+1=1%4=1
      return newPerson;
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [currentPerson]);
  return (
    <>
      <section className="buttons ">
        <button className="btn" onClick={changeCarouselX}>
          Mostrar versión slick-slider
        </button>
      </section>
      <section className="slider-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              className="slide"
              style={{
                transform: `translateX(${
                  100 * (personIndex - currentPerson)
                }%)`,
                //100*(0-0)=0 //Default, actual
                //100*(1-0)=100 -> translateX(100%)
                //100*(2-0)=200 -> translateX(200%)
                //100*(3-0)=300 -> translateX(300%)

                //100*(0-1=-1)= -> translateX(-100%)
                //100*(1-1=0)= -> translateX(0%)
                //100*(2-1=1)= -> translateX(100%)
                //100*(3-1=2)= -> translateX(200%)

                opacity: personIndex === currentPerson ? 1 : 0,
                visibility:
                  personIndex === currentPerson ? 'visible' : 'hidden',
              }}
              key={id}
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" type="button" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" type="button" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </>
  );
};

export default Carousel;
