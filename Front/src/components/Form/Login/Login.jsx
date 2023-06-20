// == Import : npm
/* eslint-disable */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/api';

// == Import : local
import { setEmail, setPassword, setClearInput } from '../../../actions/user';
import User from '../../../assets/WelcomeUser.png';
import './Login.scss'

// == Component
function Login() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const { password } = useSelector((state) => state.user);

  const handleLogin = () => {
    api
      .post('/login_check', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(email, password)

          // if(res.data.token) {
          //   localStorage.setItem('token', token);
          // }
          dispatch(setClearInput(""));
        } else {
          alert('Identifiants incorrects. Veuillez réessayer.');
        }
      })
      .catch((err) => {
        console.log(email, password)
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
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Connexion</p>
        </div>

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
          Pas encore parmi nous ? <br /><Link to="/inscription">Inscrivez-vous ici</Link>
        </p>
      </div>

      <button className="Login-Button" id="button" type="submit">
        Me connecter
      </button>
    </form>
  );
}

export default Login;
