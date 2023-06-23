import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';
import api from '../../../api/api';

import './SearchResult.scss';

function SearchResult() {
  const { search } = useParams();

  const [albums, setAlbums] = useState([]);

  console.log(search);
  useEffect(() => {
    api
      .post('/albums/search', { search: search })
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        console.error(err);
      });
  }, [search]);
  return (
    <div className="SearchResult">
      <h2>Résultats de recherche pour "{search}"</h2>
      <div className="SearchResult-Container">
        {albums && albums.map((album) => (
          <Link to={`/albums/${album.id}`} key={album.id}>
            <AlbumCard
              className="SearchResult-Card"
              albumname={album.name}
              artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
              image={album.image}
              id={album.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
