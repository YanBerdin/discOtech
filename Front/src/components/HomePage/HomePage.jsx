// == Imports : local
import Header from '../Header/Header';
import StylesCarousel from '../StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';
import albumsData from '../../data/data';

import './HomePage.scss';

// == Component
function HomePage() {
  return (
    <>
      <Header />
      <StylesCarousel />
      <h4 className="HomePage-Title">Nos Suggestions :</h4>
      <div className="HomePage-Container">
        {albumsData.map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist.fullname}
            image={album.image}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
