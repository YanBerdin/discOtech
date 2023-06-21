/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Link } from 'react-router-dom';

import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import './HomePage.scss';

function HomePage({
  albums, styles,
}) {
  return (
    <>
      <StylesCarousel styles={styles} />
      <h2 className="HomePage-Title">Nos Suggestions :</h2>
      <div className="HomePage-Container">
        {albums.map((album) => (
          <Link to={`/albums/${album.id}`}>
            <AlbumCard
              className="HomePage-Card"
              key={album.id}
              albumname={album.name}
              artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
              image={album.image}
              id={album.id}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
