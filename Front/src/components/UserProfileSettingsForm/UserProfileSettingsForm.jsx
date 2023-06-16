// == Import : npm
// import { Link } from 'react-router-dom';
// == Import : local
import UserProfileFormField from '../UserProfileFormField/UserProfileFormField';
import UserProfileFormHeader from '../UserProfileFormHeader/UserProfileFormHeader';
import './UserProfileSettingsForm.scss';

// == Component
function UserProfileSettingsForm({ pseudonym, email, password }) {
  return (
    <form className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <UserProfileFormHeader />

        {/* Login Input : Pseudo Adress */}
        <UserProfileFormField name="pseudonym" placeholder="Mon pseudonyme                  &#128393;" value={pseudonym} />

        {/* Login Input : Mail Adress */}
        <UserProfileFormField name="email" placeholder="Adresse e-mail                      &#128393;" value={email} />

        {/* Login Input : Password Adress */}
        <UserProfileFormField
          name="password"
          type="password"
          placeholder="Mot de passe                        &#128393;"
          value={password}
        />
      </div>
    </form>
  );
}

export default UserProfileSettingsForm;
