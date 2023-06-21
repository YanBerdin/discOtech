// == Imports : local
import './AlbumCard.scss';

// == Component :
function AlbumCard({
  albumname, artistfullname, image, id,
}) {
  return (
    <div className="AlbumCard" style={{ backgroundImage: `linear-gradient(0deg, #00000070 28%, #00000000 33%), url(${image})` }}>
      <div className="AlbumCard-Description">
        <p className="AlbumCard-Title" id={id}>{albumname}</p>
        <p>{artistfullname}</p>
      </div>
    </div>
  );
}

export default AlbumCard;
