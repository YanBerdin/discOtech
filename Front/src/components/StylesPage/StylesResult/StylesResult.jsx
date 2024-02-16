// == Import : npm
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// == Import : local
import api from '../../../api/api';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';
import Loading from '../../Loading/Loading';

/**
 * Component that displays the search results for a specific style.
 *
 * @component
 * @returns {JSX.Element} The StylesResult component.
 */
function StylesResult() {
  const [isLoading, setIsLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/albums');
        setAlbums(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name]);

  const filteredAlbums = albums.filter((album) => album.style.some((style) => style.name === name));

  return (
    <div className="SearchResult">
      {/* Afficher le composant Loading si isLoading est true */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>{filteredAlbums.length} albums avec le style "{name}" :</h2>
          <div className="SearchResult-Parent">
            <div className="SearchResult-Box">
              {/* Map Loop on the founded albums to display them, make them clickable  */}
              {filteredAlbums.map((album) => (
                <Link to={`/albums/${album.id}`} key={album.id}>
                  <div className="SearchResult-CardWrapper">
                    <AlbumCard
                      className="AlbumCard"
                      artistfullname={album.artist.fullname}
                      albumname={album.name}
                      image={album.image}
                      id={album.id}
                    />
                  </div>

                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StylesResult;
