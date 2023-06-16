import AlbumCard from '../HomePage/AlbumCard/AlbumCard';
import FavoritesAlbums from '../../data/data';
import './Favorites.scss';

function Favorites() {
  return (
    <>
      <div>
        <form className="Favorites-SearchBar-Form">
          {/* <img className="loupe" src={search} alt="icone de loupe" /> */}
          <input className="Favorites-SearchBar-Input" type="search" placeholder="Votre recherche..." aria-label="Search" />
          <button className="Favorites-SearchBar-Button" type="submit">
            Rechercher
          </button>
        </form>
      </div>
      <section className="Favorites-Container">
        <h4> Mes Favoris :</h4>
      </section>
      <div className="HomePage-Container">
        {FavoritesAlbums.map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
            image={album.image}
          />
        ))}
      </div>
    </>
  );
}
export default Favorites;
