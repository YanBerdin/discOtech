/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

// == Import : npm
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// == Import : style
import './SearchBar.scss';

// == Component
function SearchBar() {
  // define editable state of every options of select
  const [search, setSearch] = useState('');
  const [selectValue, setSelectValue] = useState('albums');

  // define editable state of mobile, to display or not some parts of the app
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

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

  const onWindowResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  window.addEventListener('resize', onWindowResize);
  window.addEventListener('load', onWindowResize);

  // if url = resultat-recherche, then isSearchResultPage
  const isSearchResultPage = location.pathname.startsWith('/resultat-recherche');

  if ((isMobile && isSearchResultPage) || !isMobile) {
    return (
      <div className={`SearchBar ${isSearchResultPage && isMobile ? 'Search-Result-Visible' : ''}`}>
        {/* si on est sur la bonne url et que nous sommes en mobile alors ajoute la classe */}
        <h2 className={`SearchBar ${isSearchResultPage && isMobile ? 'Search-Result-Visible' : ''}`}>Recherche</h2>
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
}

// == Export
export default SearchBar;
