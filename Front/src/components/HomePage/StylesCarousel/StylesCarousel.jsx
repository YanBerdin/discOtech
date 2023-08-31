// = Import : npm
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// = Import : Styles
import './StylesCarousel.scss';
import Eye from '../../../assets/nav/eye-seemore.png';

// = Import : Carousel Component
function StylesCarousel({ styles }) {
  return (
    <>
      <h2 className="Carousel-Title">Découvrez nos styles :</h2>
      <div className="Carousel">
        {/* Mapping loop to display all styles (clickable with Link of React Router) */}
        {styles.slice(0, 8).map((style) => (
          <Link to={`/styles/${style.name}`}>
            <div className="Carousel-Container" key={style.id}>
              <div
                className="Carousel-Cards"
                style={{ backgroundImage: `url(${style.image})` }}
              />
              <h3 className="Carousel-StyleName"> {style.name} </h3>
            </div>
          </Link>
        ))}
        <Link to="styles/">
          <div className="Carousel-Container">
            <div className="Carousel-Cards">
              <img className="Carousel-More" src={Eye} alt="Eye Logo" />
              <p className="Carousel-More">Voir plus</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default StylesCarousel;
