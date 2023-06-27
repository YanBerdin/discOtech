// = Import : JSX
import SearchBar from '../SearchBar/SearchBar';
import videoBg from '../../assets/retro.mp4';

// = Import : Style
import './Header.scss';

// = Header Component
function Header() {
  return (
    <div className="Header">
      <div className="Header-Overlay" />
      {/* calling an autoplayed and loop video for background, which is muted  */}
      <video className="Header-Video" src={videoBg} autoPlay loop muted />
      <div className="Header-Content">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-3 md:text-center Header-Disco">
          DISCO'TECH
        </h1>
        <p className="mb-2 md:text-center md:text-lg md:text-100 text-white Header-Description">
          C'est comme Spotify en moins bien, Discogs en mieux et pas du tout
          comme Youtube.
        </p>
      </div>
      {/* calling the search bar component */}
      <SearchBar />
    </div>
  );
}

// = Export
export default Header;
