// == Imports : local
import Header from '../Header/Header';
import AlbumCard from './AlbumCard/AlbumCard';

import './HomePage.scss';

// == Component
function HomePage() {
  return (
    <><Header />
      <h4 className="HomePage-Suggestions"> Nos Suggestions : </h4>
      <div className="HomePage-Container">
        <AlbumCard className="HomePage-Card" />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    </>

  );
}
export default HomePage;
