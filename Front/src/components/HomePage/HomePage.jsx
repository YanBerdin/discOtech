/* eslint-disable no-alert */
/* eslint-disable no-console */
import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import Header from '../Header/Header';

import './HomePage.scss';

function HomePage({
  search, albums, setSearch, getAlbums, styles,
}) {
  const handleClick = (albumId) => {
    console.log('Album cliqué - ID:', albumId);
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} getAlbums={getAlbums} />
      <StylesCarousel styles={styles} />
      <h2 className="HomePage-Title">Nos Suggestions :</h2>
      <div className="HomePage-Container">
        {albums.map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
            image={album.image}
            onClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
