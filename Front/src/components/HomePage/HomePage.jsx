/* eslint-disable no-alert */
/* eslint-disable no-console */
import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import Header from '../Header/Header';

import './HomePage.scss';

function HomePage({
  search, albums, setSearch, getAlbums, styles,
}) {
  console.log(`valeur de search dans HomePage : ${search}`);
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
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
