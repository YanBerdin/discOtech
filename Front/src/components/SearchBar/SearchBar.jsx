import './SearchBar.scss';

function SearchBar({ search, setSearch, getAlbums }) {
  return (
    <form
      className="SearchBar-Form"
      onSubmit={(event) => {
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
