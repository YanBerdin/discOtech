/* eslint-disable jsx-a11y/alt-text */
import './StylesCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function StylesCarousel({ styles }) {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
            <div className="Carousel-Cards" style={{ backgroundImage: `url(${style.image})` }}>
              <h3 className="Carousel-StyleName"> {style.name} </h3>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default StylesCarousel;
