/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import './SearchBar.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  // stock in state every options of select
  const [search, setSearch] = useState('');
  const [selectValue, setSelectValue] = useState('albums');

  const navigate = useNavigate();

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

  return (
    <div className="SearchBar">
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
