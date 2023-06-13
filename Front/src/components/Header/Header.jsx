/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import './Header.scss';

import SearchBar from '../SearchBar/SearchBar';

import videoBg from '../../assets/videoBg.mp4';

function Header() {
  return (
    <div className="Header">
      <div className="Header-Overlay" />
      <video className="Header-Video" src={videoBg} autoPlay loop muted />
      <div className="Header-Content">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-3 md:text-center">
          DISC'OTECH</h1>
        <p className="mb-2 md:text-center md:text-lg md:text-100 text-white Header-Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores.
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
export default Header;
