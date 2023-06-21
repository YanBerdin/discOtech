/* eslint-disable no-alert */
/* eslint-disable no-console */

import './Header.scss';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import videoBg from '../../assets/retro.mp4';
import api from '../../api/api';

function Header({ search, setSearch, setAlbums }) {
  // Au premier rendu du composant App, je souhaite récupérer la liste des albums
  const getAlbums = () => {
    api
      .post('/albums/search', { search: search })
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        console.error(err);
      });
  };
  useEffect(getAlbums, [search, setAlbums]);

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
      <SearchBar
        search={search}
        setSearch={setSearch}
        getAlbums={getAlbums}
      />
    </div>
  );
}
export default Header;
