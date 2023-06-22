import AlbumCard from '../HomePage/AlbumCard/AlbumCard';
// import favoritesAlbums from '../../data/data';
import './Favorites.scss';

function Favorites({ albums }) {
  return (
    <>
      <header className="Favorites-Title">
        <h4>Mes Favoris :</h4>
      </header>
      <div className="HomePage-Container">
        {albums.map((album) => (
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
