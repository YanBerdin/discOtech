import './StylesResult.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api/api';

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
    <div>
      <h2>Albums avec le style "{name}" :</h2>
      {filteredAlbums.map((album) => (
        <div key={album.id}>
          <h4>{album.title}</h4>
          <p>{album.artist.fullname}</p>
          <img src={album.image} alt={album.title} />
        </div>
      ))}
    </div>
  );
}

export default StylesResult;
