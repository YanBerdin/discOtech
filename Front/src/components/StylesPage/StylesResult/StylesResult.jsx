import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../../api/api';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';

function StylesResult() {
  const [albums, setAlbums] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/albums');
        setAlbums(response.data);
      } catch (error) {
        alert('Erreur !');
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        console.error(error);
      }
    };

    fetchData();
  }, [name]);

  // Filtrer les albums en fonction du style sélectionné
  const filteredAlbums = albums.filter((album) => album.style.some((style) => style.name === name));
  // console.log(filteredAlbums);

  return (
    <div className="SearchResult">
      <h2>Albums avec le style "{name}" :</h2>
      <div className="SearchResult-Parent">
        <div className="SearchResult-Box">
          {filteredAlbums.map((album) => (
            <Link to={`/albums/${album.id}`} key={album.id}>
              <AlbumCard
                className="SearchResult-Card"
                artistfullname={album.artist.fullname}
                albumname={album.name}
                image={album.image}
                id={album.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StylesResult;
