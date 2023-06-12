import './SearchBar.scss';
// import search from '../../assets/search.svg';

function SearchBar() {
  return (
    <form className="form-search">
      {/* <img className="loupe" src={search} alt="icone de loupe" /> */}
      <input className="input" type="search" placeholder="Votre recherche..." aria-label="Search" />
      <button className="btn" type="submit">
        Chercher
      </button>
    </form>
  );
}
export default SearchBar;
