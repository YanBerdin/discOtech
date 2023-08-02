/* eslint-disable max-len */

// == Import : npm
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// == Import local
import api from '../../api/api';
import { addFavorite, removeFavorite } from '../../actions/user';

// == Import : style
import './FavoriteButton.scss';

// == Component
function FavoriteButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);
  const logged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('FAVORITE', favorites);
    setIsFavorite(favorites.find((fav) => fav.album?.id === id));
  }, [favorites, id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!logged) {
      navigate('/connexion');
    }

    if (isFavorite) {
      api
        .delete(`/favorites/albums/${id}`)
        .then((response) => {
          console.log('Album retiré des favoris :', response.data);
          dispatch(removeFavorite(id));
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de l'album des favoris :", error);
        })
        .finally(() => {
          setIsFavorite(false); // Mettre à jour l'état après la suppression du favori
        });
    } else {
      api
        .post(`/favorites/albums/${id}`)
        .then((response) => {
          console.log('Album ajouté aux favoris :', response.data);
          dispatch(addFavorite(response.data));
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout de l'album aux favoris :", error);
        })
        .finally(() => {
          setIsFavorite(true); // Mettre à jour l'état après l'ajout du favori
        });
    }
  };

  return (
    <button
      type="button"
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
      onClick={handleFavoriteClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFavorite ? 'rgb(177, 139, 189)' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21.35l-1.64-1.48C5.4 15.85 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.35-8.36 11.37L12 21.35z" />
      </svg>
    </button>
  );
}

// == Export
export default FavoriteButton;
