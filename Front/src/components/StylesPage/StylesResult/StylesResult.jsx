// == Import : npm
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// == Import : local
import api from '../../../api/api';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';

// == Component
function StylesResult() {
  // define an editable state for albums
  const [albums, setAlbums] = useState([]);
  // return an object of the dynamic params (style name) from current url, matching with route path
  const { name } = useParams();

  // fetching data and update DOM
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/albums');
        setAlbums(response.data);
      } catch (error) {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
      }
    };

    fetchData();
  }, [name]);

  // filtered albums by selected style
  const filteredAlbums = albums.filter((album) => album.style.some((style) => style.name === name));

  return (
    <div className="SearchResult">
      <h2>{filteredAlbums.length} albums avec le style "{name}" :</h2>
      <div className="SearchResult-Parent">
        <div className="SearchResult-Box">
          {/* Map Loop on the founded albums to display them, make them clickable  */}
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

// == Export
export default StylesResult;
