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
/**
 * Component representing a favorite button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the album.
 * @returns {JSX.Element} The rendered favorite button.
 */
function FavoriteButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);
  const logged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the album is in the user's favorites
    setIsFavorite(favorites.some((fav) => fav.album?.id === id)); // Using 'some' here

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites, id]); // Depend only on 'favorites' and 'id'

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!logged) {
      navigate('/connexion');
      return;
    }

    if (isFavorite) {
      api
        .delete(`/favorites/albums/${id}`)
        .then((response) => {
          console.log('Album removed from favorites:', response.data);
          dispatch(removeFavorite(id));
        })
        .catch((error) => {
          console.error('Error removing album from favorites:', error);
        })
        .finally(() => {
          setIsFavorite(false); // Update state after removing favorite
        });
    } else {
      api
        .post(`/favorites/albums/${id}`)
        .then((response) => {
          console.log('Album added to favorites:', response.data);
          dispatch(addFavorite(response.data));
        })
        .catch((error) => {
          console.error('Error adding album to favorites:', error);
        })
        .finally(() => {
          setIsFavorite(true); // Update state after adding favorite
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
