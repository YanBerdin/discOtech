/* eslint-disable no-console */
import './SearchBar.scss';

function SearchBar({ setSearch, search, getAlbums }) {
  console.log(`valeur de search dans SearchBar : ${search}`);

  return (
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
      <button
        className="SearchBar-Button"
        type="submit"
      >
        Rechercher
      </button>
    </form>
  );
}
export default SearchBar;
