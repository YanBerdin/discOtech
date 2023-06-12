// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import FormField from '../FormField/FormField';
import FormHeader from '../FormHeader/FormHeader';
import './Login.scss';

// == Component
function Login({ email, password }) {
  return (
    <form className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <FormHeader />

        {/* Login Input : Mail Adress */}
        <FormField name="email" placeholder="Adresse e-mail" value={email} />

        {/* Login Input : Password Adress */}
        <FormField
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={password}
        />

        {/* Link to SignUp Form */}
        <p className="Login-Link">
          Pas encore inscrit ? Rejoins nous <Link to="/inscription">ici</Link>
        </p>
      </div>

      {/* Login Button */}
      <button className="Login-Button" id="button" type="submit">
        Me connecter
      </button>
    </form>
  );
}
export default Login;
