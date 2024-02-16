// == Imports : local
import FavoriteButton from '../../FavoriteButton/FavoriteButton';

// == Import : style
import './FavoriteCard.scss';

/**
 * Component representing a favorite card.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.albumname - The name of the album.
 * @param {string} props.artistfullname - The full name of the artist.
 * @param {string} props.image - The URL of the image.
 * @param {string} props.id - The unique identifier of the favorite card.
 * @returns {JSX.Element} The rendered favorite card component.
 */
function FavoriteCard({
  albumname, artistfullname, image, id,
}) {
  return (
    <div className="FavoriteCard" style={{ backgroundImage: `linear-gradient(0deg, #00000070 18%, #00000000 39%), url(${image})` }}>
      <FavoriteButton
        className="FavoriteCard-Btn"
        id={id}
      />
      <div className="FavoriteCard-Description">
        <p className="FavoriteCard-Title" id={id}>{albumname}</p>
        <p className="FavoriteCard-Artist">{artistfullname}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;
