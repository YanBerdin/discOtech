/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import './StylesCarousel.scss';

function StylesCarousel({ styles }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? styles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === styles.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="Carousel">
      <h4 className="Carousel-Title">Parcourir les styles :</h4>
      <div className="carousel">
        <button type="button" className="carousel__nav carousel__nav--prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel__track">
          {styles.map((style, index) => (
            <div className={`carousel__style ${index === activeIndex ? 'active' : ''}`} key={style.id}>
              <img className="carousel__image" src={style.image} alt={style.title} />
              <h3 className="carousel__title">{style.title}</h3>
            </div>
          ))}
        </div>
        <button type="button" className="carousel__nav carousel__nav--next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default StylesCarousel;
