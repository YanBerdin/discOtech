// == Imports : local
import FavoriteButton from '../../FavoriteButton/FavoriteButton';
import './FavoriteCard.scss';

// == Component :
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
