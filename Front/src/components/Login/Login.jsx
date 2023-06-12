// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import Field from './Field/Field';
import FormButton from './FormButton/FormButton';

import User from '../../assets/User.png';
import './Login.scss';

// == Component
function Login({
  email,
  password,
}) {
  return (
    <form className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Login-Header">
          <img className="Login-UserImg" src={User} alt="Logo de personnage" />
          <p className="Login-Title">Connexion</p>
        </div>

        {/* Login Input : Mail Adress */}
        <Field
          name="email"
          placeholder="Adresse e-mail"
          value={email}
        />

        {/* Login Input : Password Adress */}
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={password}
        />

        {/* Link to SignUp Form */}
        <p className="Login-SignUp">
          Pas encore inscrit ? Rejoins nous <Link to="/inscription">ici</Link>
        </p>
      </div>

      {/* Login Button */}
      <FormButton />
    </form>
  );
}
export default Login;
