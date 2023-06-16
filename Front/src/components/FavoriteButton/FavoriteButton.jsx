import { useState } from 'react';
import './FavoriteButton.scss';

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button type="button" className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={handleClick}>
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

export default FavoriteButton;
