// import Login from '../Form/Login/Login';
// import 'Front/src/assets/font-awesome-4.7.0';
import './UserProfile.scss';
import favoritesAlbumsData from '../../data/data';
import AlbumCard from '../HomePage/AlbumCard/AlbumCard';
import UserProfileSettingsForm from '../UserProfileSettingsForm/UserProfileSettingsForm';

function UserProfile() {
  return (
    <div className="UserProfileContainer">
      <UserProfileSettingsForm className="UserLogin" />
      <div />
      <div className="Titre">
        <h2>Favoris</h2>
      </div>
      <section className="SmartphoneContainer">
        <div className="HomePage-Container">
          {favoritesAlbumsData.slice(0, 4).map((album) => (
            <AlbumCard
              className="HomePage-Card"
              key={album.id}
              albumsname={album.name}
              artistfullname={album.artist.fullname}
              image={album.image}
            />
          ))}
        </div>
      </section>
      <section className="PcContainer">
        <div className="HomePage-Container">
          {favoritesAlbumsData.slice(0, 10).map((album) => (
            <AlbumCard
              className="HomePage-Card"
              key={album.id}
              albumsname={album.name}
              artistfullname={album.artist.fullname}
              image={album.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
