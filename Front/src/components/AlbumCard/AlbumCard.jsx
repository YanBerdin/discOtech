import './AlbumCard.scss';

function AlbumCard() {
  return (
    <div className="AlbumCard">
      <div className="AlbumCard-Picture" />
      <div className="AlbumCard-Description">
        <h3>Album Title</h3>
        <p>Artist Name</p>
      </div>
      <button type="submit" className="AlbumCard-Button">
        <div className="AlbumCard-Arrow" />
      </button>
    </div>
  );
}
export default AlbumCard;
