// = Import : npm
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// = Import : Styles
import './StylesCarousel.scss';
import Style from '../../../assets/Styles.jpg';

// = Import : Carousel Component
function StylesCarousel({ styles }) {
  return (
    <>
      {/* <h2 className="Carousel-Title">Découvrez nos styles :</h2> */}
      <div className="Carousel-Styles">
        <img className="Carousel-Banner" src={Style} alt="Lofi Style Title" />
        <div className="Carousel">
          {/* Mapping loop to display all styles (clickable with Link of React Router) */}
          {styles.slice(0, 9).map((style) => (
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
                <p className="Carousel-More">➤</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StylesCarousel;
