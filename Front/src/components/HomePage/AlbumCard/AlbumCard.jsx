// == Imports : style
import './AlbumCard.scss';

// == Component :
/**
 * Renders an album card component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.albumname - The name of the album.
 * @param {string} props.artistfullname - The full name of the artist.
 * @param {string} props.image - The URL of the album image.
 * @param {string} props.id - The unique identifier of the album.
 * @returns {JSX.Element} The album card component.
 */
function AlbumCard({
  albumname, artistfullname, image, id,
}) {
  return (
    <div className="AlbumCard" style={{ backgroundImage: `linear-gradient(0deg, #00000060 18%, #00000000 33%), url(${image})` }}>
      <div className="AlbumCard-Description">
        <p className="AlbumCard-Title" id={id}>{albumname}</p>
        <p className="AlbumCard-Artist">{artistfullname}</p>
      </div>
    </div>
  );
}

export default AlbumCard;
