// == Import : npm
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// == Import : local
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';
import api from '../../../api/api';

// == Import : style
import './SearchResult.scss';
import Loading from '../../Loading/Loading';

// == Component
function SearchResult() {
  const { search, type } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data and update DOM
  useEffect(() => {
    const fetchResults = () => {
      api
        .post(`/${type}/search`, { search: search })
        .then((response) => {
          console.log('RESPONSE', response.data);
          setResults(response.data);
        })
        .catch((error) => {
          console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchResults();
  }, [search, type]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="SearchResult">
      <h2>{results.length} albums trouvés pour "{search}" </h2>
      <div className="SearchResult-Box">
        {type === 'albums' && results.map((result) => (
          <Link to={`/${type}/${result.id}`} key={result.id}>
            <AlbumCard
              className="SearchResult-Card"
              albumname={result.name}
              artistfullname={result.artist?.fullname ?? 'Artiste inconnu'}
              image={result.image}
              id={result.id}
            />
          </Link>
        ))}

        {type === 'artists' && results.map((result) => (
          <>
            {result.albums.map((album) => (
              <Link to={`/albums/${album.id}`} key={result.id}>
                <AlbumCard
                  className="SearchResult-Card"
                  artistfullname={result?.fullname ?? 'Artiste inconnu'}
                  key={album.id}
                  albumname={album.name}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

// == Export
export default SearchResult;
