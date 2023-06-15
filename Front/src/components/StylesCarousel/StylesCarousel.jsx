/* eslint-disable jsx-a11y/alt-text */
import './StylesCarousel.scss';

function StylesCarousel() {
  return (
    <div className="Carousel">
      <h4 className="Carousel-Title">Parcourir les styles :</h4>
      <div className="carousel">
        <div className="carousel__track">
          {cards.map((card) => (
            <div className="carousel__card" key={card.id}>
              <img className="carousel__image" src={card.image} alt={card.title} />
              <h3 className="carousel__title">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StylesCarousel;
