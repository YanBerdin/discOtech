// == Import : npm
/* eslint-disable */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// == Import : local
import FormHeader from '../FormHeader/FormHeader';
import './Login.scss';
import { setEmail, setPassword } from '../../actions/user';

// == Component
function Login() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state);
  const { password } = useSelector((state) => state);

  const handleLogin = () => {
    axios
      .post('http://romain-gradelet.vpnuser.lan:8000/api/login_check', {
        username: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 && response.data.token) {
          const { token } = response.data;
          localStorage.setItem('token', token);
        } else {
          alert('Identifiants incorrects. Veuillez réessayer.');
        }
      })
      .catch((err) => {
        console.error("Une erreur s'est produite lors de la connexion :", err);
        alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <form className="Login-Form" onSubmit={handleSubmit}>
      <div className="Login-Card">
        <FormHeader />

        <div className="Field">
          <input
            className="Field-Input"
            name="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(event) => dispatch(setEmail(event.target.value))}
          />
        </div>

        <div className="Field">
          <input
            className="Field-Input"
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => dispatch(setPassword(event.target.value))}
          />
        </div>

        <p className="Login-Link">
          Pas encore inscrit ? Rejoignez-nous <Link to="/inscription">ici</Link>
        </p>
      </div>

      <button className="Login-Button" id="button" type="submit">
        Me connecter
      </button>
    </form>
  );
}

export default Login;
