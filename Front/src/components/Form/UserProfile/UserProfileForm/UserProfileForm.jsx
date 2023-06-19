// == Import : local
import User from '../../../../assets/WelcomeUser.png';
import './UserProfileForm.scss';

// == Component
function UserProfileForm() {
  return (
    <form className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Modifier mon profil</p>
        </div>

        {/* Login Input : Nom */}
        <div className="Field">
          <input
            className="Field-Input"
            name="lastname"
            placeholder="Nom"
          />
          <button className="Field-Button" type="submit">&#x1F589;</button>
        </div>
        {/* Login Input : Prénom */}
        <div className="Field">
          <input
            className="Field-Input"
            name="firstname"
            placeholder="Prénom"
          />
          <button className="Field-Button" type="submit">&#x1F589;</button>
        </div>

        {/* Login Input : Mail Adress */}
        <div className="Field">
          <input
            className="Field-Input"
            name="email"
            placeholder="Adresse e-mail"
          />
          <button className="Field-Button" type="submit">&#x1F589;</button>
        </div>

        {/* Login Input : Password Adress */}
        <div className="Field">
          <input
            className="Field-Input"
            name="password"
            placeholder="Mot de passe"
          />
          <button className="Field-Button" type="submit">&#x1F589;</button>
        </div>
      </div>
    </form>
  );
}

export default UserProfileForm;
