// = Import : npm
import { useLocation } from 'react-router-dom';

// = Import : JSX
import SearchBar from '../SearchBar/SearchBar';
import videoBg from '../../assets/background/retro.mp4';

// = Import : Style
import './Header.scss';

// = Header Component
function Header() {
// if page url contains...
  const location = useLocation();
  const isConnexionPage = location.pathname.startsWith('/connexion');
  const isInscriptionPage = location.pathname.startsWith('/inscription');
  const isAlbumPage = location.pathname.startsWith('/albums');
  const isProfilage = location.pathname.startsWith('/profil');

  // ... header is not display
  if ((isConnexionPage || isInscriptionPage || isAlbumPage || isProfilage)) {
    return null;
  }

  // for the other pages, header is displayed
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
