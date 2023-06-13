import './SearchBar.scss';
// import search from '../../assets/search.svg';

function SearchBar() {
  return (
    <form className="SearchBar-Form">
      {/* <img className="loupe" src={search} alt="icone de loupe" /> */}
      <input className="SearchBar-Input" type="search" placeholder="Votre recherche..." aria-label="Search" />
      <button className="SearchBar-Button" type="submit">
        Rechercher
      </button>
    </form>
  );
}
export default SearchBar;
