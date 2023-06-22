import { Link } from 'react-router-dom';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';

import './SearchResult.scss';

function SearchResult({ albums }) {
  return (
    <div className="SearchResult">
      <div className="SearchResult-Container">
        {albums && albums.map((album) => (
          <Link to={`/albums/${album.id}`} key={album.id}>
            <AlbumCard
              className="SearchResult-Card"
              albumname={album.name}
              artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
              image={album.image}
              id={album.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
