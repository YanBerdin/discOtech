/* eslint-disable no-alert */
/* eslint-disable no-console */

// == Import : npm
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// == Import : local
import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';

// == Import : syle
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.scss';

// == Compoentn
function HomePage({
  suggestions, styles, latest, ourfavorites,
}) {
// responsive style settings for carousel
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1228,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <StylesCarousel styles={styles} />

      <h2 className="HomePage-Title">Dernières sorties :</h2>
      <div className="Carousel">
        <Slider {...settings}>
          {latest.map((album) => (
            <div className="Carousel-Container" key={album.id}>
              <Link to={`/albums/${album.id}`} key={album.id}>
                <AlbumCard
                  className="HomePage-Card"
                  albumname={album.name}
                  artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="HomePage-Title">Nos Suggestions :</h2>
      <div className="Carousel">
        <Slider {...settings}>
          {suggestions.map((album) => (
            <div className="Carousel-Container" key={album.id}>
              <Link to={`/albums/${album.id}`} key={album.id}>
                <AlbumCard
                  className="HomePage-Card"
                  albumname={album.name}
                  artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="HomePage-Title">Nos préférés :</h2>
      <div className="Carousel">
        <Slider {...settings}>
          {ourfavorites.map((album) => (
            <div className="Carousel-Container" key={album.id}>
              <Link to={`/albums/${album.id}`} key={album.id}>
                <AlbumCard
                  className="HomePage-Card"
                  albumname={album.name}
                  artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HomePage;
