/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import './SearchBar.scss';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../api/api';
import SearchResult from './SearchResult/SearchResult';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getAlbums = () => {
    api
      .post('/albums/search', { search: search })
      .then((res) => {
        setAlbums(res.data);
        navigate('/resultat-recherche');
      })
      .catch((err) => {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        console.error(err);
      });
  };

  useEffect(() => {
    if (location.pathname !== '/resultat-recherche') {
      setSearch('');
      setAlbums([]);
    }
  }, [location]);

  return (
    <>
      <div className="SearchBar">
        <form
          className="SearchBar-Form"
          onSubmit={(event) => {
            console.log('Envoi de la recherche...');
            event.preventDefault();
            getAlbums();
          }}
        >
          <input
            className="SearchBar-Input"
            type="search"
            placeholder="Votre recherche..."
            aria-label="Search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              console.log(event.target.value);
            }}
          />
          <button className="SearchBar-Button" type="submit">
            Rechercher
          </button>
        </form>
      </div>
      <SearchResult albums={albums} />
    </>
  );
}

export default SearchBar;
