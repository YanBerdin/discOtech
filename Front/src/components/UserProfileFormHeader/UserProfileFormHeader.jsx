import User from '../../assets/WelcomeUser.png';
import './UserProfileFormHeader.scss';

function UserProfileFormHeader() {
  return (
    <div className="Header-Container">
      <img className="Header-UserImg" src={User} alt="Logo de personnage" />
      <p className="Header-Title">Bienvenue</p>
    </div>
  );
}
export default UserProfileFormHeader;
