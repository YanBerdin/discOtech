/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import './SearchBar.scss';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const navigate = useNavigate();
  const location = useLocation();

  const getAlbums = () => {
    navigate(`/resultat-recherche/${search}`);
  };

  const handleFormSubmit = (event) => {
    console.log('Envoi de la recherche...');
    event.preventDefault();
    getAlbums();
  };

  const onWindowResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  window.addEventListener('resize', onWindowResize);
  window.addEventListener('load', onWindowResize);

  const isSearchResultPage = location.pathname.startsWith('/resultat-recherche');
  // Si l'url est resultat recherche alors isSearchResultPage

  if ((isMobile && isSearchResultPage) || !isMobile) {
    return (
      <div className={`SearchBar ${isSearchResultPage && isMobile ? 'Search-Result-Visible' : ''}`}>
        {/* si on est sur la bonne url et que nous sommes en mobile alors ajoute la classe */}
        <form className="SearchBar-Form" onSubmit={handleFormSubmit}>
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
}

export default SearchBar;
