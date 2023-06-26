/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import './SearchBar.scss';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchBar() {
  // stock in state every options of select
  const [search, setSearch] = useState('');
  const [selectValue, setSelectValue] = useState('albums');

  const navigate = useNavigate();
  const location = useLocation();

  // onClick event on select to update the selected value in state
  const handleClick = (e) => {
    setSelectValue(e.target.value);
    console.log(e.target.value);
  };
  // if selected value = type => navigate to :
  const getResults = () => {
    if (selectValue === 'albums') {
      navigate(`/resultat-recherche/albums/${search}`);
    } else if (selectValue === 'artists') {
      navigate(`/resultat-recherche/artists/${search}`);
    }
  };
  
  const isMobile = window.innerWidth <= 767; // Si en dessous ou egal a 767 px alors isMobile

  const isSearchResultPage = location.pathname.startsWith('/resultat-recherche');
  // Si l'url est resultat recherche alors isSearchResultPage

  if (isMobile && isSearchResultPage) {
    return (
      <div className={`SearchBar ${isSearchResultPage && isMobile ? 'Search-Result-Visible' : ''}`}>
        {/* si on est sur la bonne url et que nous sommes en mobile alors ajoute la classe */}
      <form
        className="SearchBar-Form"
        onSubmit={(event) => {
          console.log('Envoi de la recherche...');
          event.preventDefault();
          getResults();
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

        <div>
          <select
            className="SearchBar-Select"
            value={selectValue}
            onChange={handleClick}
          >
            <option className="SearchBar-Options" value="albums">albums</option>
            <option className="SearchBar-Options" value="artists">artists</option>
          </select>
        </div>

        <button className="SearchBar-Button" type="submit">
          &#x1F50E;
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
