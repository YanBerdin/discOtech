import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.scss';

import api from '../../api/api';
import FavoriteCard from './FavoriteCard/FavoriteCard';
import { setFavorites } from '../../actions/user';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);

  useEffect(() => {
    const getFavorites = () => {
      api
        .get('/favorites')
        .then((res) => {
          dispatch(setFavorites(res.data));
        })
        .catch((err) => {
          console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
          console.error(err);
        });
    };
    getFavorites();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <header className="Favorites-Title">
        <h2>Mes Favoris :</h2>
      </header>
      <div className="HomePage-Container">
        {favorites.map((favorite) => (
          <Link to={`/albums/${favorite.album?.id}`} key={favorite.id}>
            <FavoriteCard
              albumname={favorite.album?.name}
              artistfullname={favorite.album?.artist?.fullname ?? 'Artiste inconnu'}
              image={favorite.album?.image}
              id={favorite.album?.id}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Favorites;
