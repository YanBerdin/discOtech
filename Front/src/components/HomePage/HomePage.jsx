// == Imports : local
import Header from '../Header/Header';
import AlbumCard from './AlbumCard/AlbumCard';
import albumsData from '../../data/data';

import './HomePage.scss';

// == Component
function HomePage() {
  return (
    <>
      <Header />
      <h4 className="HomePage-Suggestions">Nos Suggestions :</h4>
      <div className="HomePage-Container">
        {albumsData.map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist.fullname}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
