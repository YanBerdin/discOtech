/* eslint-disable no-alert */
/* eslint-disable no-console */
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import videoBg from '../../assets/retro.mp4';

function Header() {
  return (
    <div className="Header">
      <div className="Header-Overlay" />
      <video className="Header-Video" src={videoBg} autoPlay loop muted />
      <div className="Header-Content">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-3 md:text-center Header-Disco">
          DISCO'TECH
        </h1>
        <p className="mb-2 md:text-center md:text-lg md:text-100 text-white Header-Description">
          C'est comme Spotify en moins bien, Discogs en mieux et pas du tout comme Youtube.
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
export default Header;
