/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import inputFile from '../../../assets/input-file.svg';
import User from '../../../assets/WelcomeUser.png';
import './SignUp.scss';

// == Composant
function SignUp({
  email, password, lastname, firstname,
}) {
  return (
    <form className="SignUp-Form" action="">
      <div className="SignUp-Card">
        {/* Header */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Inscription</p>
        </div>

        <div className="SignUp-UserTop">
          {/* SignUp Input : Avatar */}
          <input className="SignUp-AvatarInput" id="file" type="file" />
          <label className="SignUp-Avatar" htmlFor="file">
            <img src={inputFile} alt="Icone dl" />
          </label>
          {/* SignUp Input : Username */}
          <div className="SignUp-Username">
            <input className="SignUp-InputField" name="lastname" placeholder="Nom" value={lastname} />
            <input className="SignUp-InputField" name="firstname" placeholder="Prénom" value={firstname} />
          </div>
        </div>

        {/* SignUp Input : Mail Adress */}
        <input className="SignUp-InputField" name="email" placeholder="Adresse e-mail" value={email} />
        {/* SignUp Input : Password */}
        <input
          className="SignUp-InputField"
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={password}
        />
        {/* SignUp Input : Password Confirm */}
        <input
          className="SignUp-InputField"
          name="password"
          type="password"
          placeholder="Confirmation mot de passe"
          value={password}
        />

        {/* Link to Login Form */}
        <p className="SignUp-Link">
          Déjà inscrit ? <br /> Connecte toi <Link to="/connexion">ici</Link>
        </p>
      </div>
      {/* SignUp Button */}
      <button className="SignUp-Button" id="button" type="submit">
        M'inscrire
      </button>
    </form>
  );
}
export default SignUp;
