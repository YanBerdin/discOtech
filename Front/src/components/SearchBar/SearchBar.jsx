/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import './SearchBar.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const getAlbums = () => {
    navigate(`/resultat-recherche/${search}`);
  };

  return (
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
  );
}

export default SearchBar;
