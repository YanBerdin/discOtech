import Header from '../Header/Header';
import StylesCarousel from '../StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';

import './HomePage.scss';

function HomePage({ albums, styles }) {
  return (
    <>
      <Header />
      <StylesCarousel styles={styles} />
      <h4 className="HomePage-Title">Nos Suggestions :</h4>
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
