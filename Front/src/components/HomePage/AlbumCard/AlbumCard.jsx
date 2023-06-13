// == Imports : local
import './AlbumCard.scss';

// == Component :
function AlbumCard({ albumname, artistfullname }) {
  return (
    <div className="AlbumCard">
      <div className="AlbumCard-Description">
        <p className="AlbumCard-Title">{albumname}</p>
        <p>{artistfullname}</p>
      </div>
    </div>
  );
}
export default AlbumCard;
