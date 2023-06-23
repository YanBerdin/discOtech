/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';
import api from '../../../api/api';

import './SearchResult.scss';

function SearchResult() {
  const { search, type } = useParams();
  const [results, setResults] = useState([]);

  console.log(`search:${search}, type:${type}`);

  useEffect(() => {
    const fetchResults = () => {
      api
        .post(`/${type}/search`, { search: search })
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
          console.error(error);
        });
    };

    fetchResults();
  }, [search, type]);
  return (
    <div className="SearchResult">
      <h2>Résultats de recherche pour "{search}" : </h2>
      <div className="SearchResult-Container">

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

        {type === 'artists' && results.map((result) => {
          console.log(results);

            <Link to={`/${type}/${result.albums.id}`} key={result.albums.id}>
              <AlbumCard
                className="SearchResult-Card"
                albumname={result.albums.name}
                artistfullname={result.fullname}
                image={result.albums.image}
                id={result.albums.id}
              />
            </Link>;
        })}
      </div>
    </div>
  );
}

export default SearchResult;
