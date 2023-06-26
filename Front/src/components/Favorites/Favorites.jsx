import { useEffect, useState } from 'react';
import AlbumCard from '../HomePage/AlbumCard/AlbumCard';
// import favoritesAlbums from '../../data/data';
import './Favorites.scss';

import api from '../../api/api';

function Favorites() {
  const [albums, setAlbums] = useState([]);

  const getAlbums = () => {
    api
      .get('/favorites')
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        console.error(err);
      });
  };
  useEffect(getAlbums);

  return (
    <>
      <header className="Favorites-Title">
        <h2>Mes Favoris :</h2>
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
