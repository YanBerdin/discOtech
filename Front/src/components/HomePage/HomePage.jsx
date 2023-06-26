/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Link } from 'react-router-dom';
/* eslint-disable jsx-a11y/alt-text */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import './HomePage.scss';

function HomePage({
  suggestions, styles, latest, ourfavorites,
}) {
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
