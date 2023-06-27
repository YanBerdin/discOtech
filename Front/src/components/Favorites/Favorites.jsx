// == Import : npm
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// == Import : local
import api from '../../api/api';
import FavoriteCard from './FavoriteCard/FavoriteCard';
import { setFavorites } from '../../actions/user';
import Loading from '../Loading/Loading';

// == Import : style
import './Favorites.scss';

// == Component
function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);
  const [loading, setLoading] = useState(true);

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
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getFavorites();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Favorites">
      <header className="Favorites-Title">
        <h2>Mes Favoris &#x2661;</h2>
      </header>
      <div className="Favorites-Box">
        <div className="Favorites-Container">
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
      </div>
    </div>
  );
}

// == Export
export default Favorites;
