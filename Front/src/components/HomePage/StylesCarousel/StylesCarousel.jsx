// = Import : npm
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// = Import : Styles
import './StylesCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Renders a carousel component displaying different styles.
 *
 * @component
 * @param {Object[]} styles - An array of style objects.
 * @returns {JSX.Element} The StylesCarousel component.
 */
function StylesCarousel({ styles }) {
  // style for slick slider
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {styles.map((style) => (
          <div className="Carousel-Container" key={style.id}>
            <Link to={`/styles/${style.name}`}>
              <div className="Carousel-Cards" style={{ backgroundImage: `url(${style.image})` }}>
                <h3 className="Carousel-StyleName"> {style.name} </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default StylesCarousel;
