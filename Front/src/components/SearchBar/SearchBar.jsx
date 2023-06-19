import './SearchBar.scss';

function SearchBar() {
  return (
    <form
      className="SearchBar-Form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className="SearchBar-Input"
        type="search"
        placeholder="Votre recherche..."
        aria-label="Search"
        onChange={(event) => {
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
