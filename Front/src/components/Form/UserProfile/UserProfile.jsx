/* eslint-disable no-console */

// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import favoritesAlbumsData from '../../../data/data';
import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';
import UserProfileForm from './UserProfileForm/UserProfileForm';

function UserProfile() {
  return (
    <div className="UserProfileContainer">
      <UserProfileForm />
      <h2 className="HomePage-Title">Mes Favoris &#x2661;</h2>
      <div className="HomePage-Container">
        {favoritesAlbumsData.slice(0, 4).map((album) => (
          <AlbumCard
            className="HomePage-Card"
            key={album.id}
            albumname={album.name}
            artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
            image={album.image}
          />
        ))}
      </div>
      <Link className="HomePage-Link" to="/favoris">
        Voir plus
      </Link>
    </div>
  );
}

// == Export
export default UserProfile;
