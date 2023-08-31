// = Import : local
import SearchBar from '../SearchBar/SearchBar';
import synthwave from '../../assets/background/synthwave1.jpg';

// = Import : style
import './Header.scss';

// = Header Component
function Header() {
  return (
    <div className="Header">
      <div className="Header-Overlay" />
      <img className="Header-Image" alt="Background Synthwave" src={synthwave} />
      <div className="Header-Content">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-3 md:text-center Header-Disco">
          DISCO'TECH
        </h1>
        <p className="mb-2 md:text-center md:text-lg md:text-100 text-white Header-Description">
          C'est comme Spotify en moins bien, Discogs en mieux et pas du tout
          comme Youtube.
        </p>
      </div>
      <SearchBar />
    </div>
  );
}

// = Export
export default Header;
