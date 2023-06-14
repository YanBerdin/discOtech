/* eslint-disable no-console */
/* eslint-disable no-alert */
// == Import : npm
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// == Import : local
// import FormField from '../FormField/FormField';
import FormHeader from '../FormHeader/FormHeader';
import './Login.scss';

// == Component
function Login() {
  // ? stocking state of email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setIsLogged] = useState(false);

  // ? function for the home page redirection
  const navigate = useNavigate();

  // ? API connexion
  const handleLogin = () => {
    axios
      .post({/* api link goes here */}, {
        username: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 && response.data.token) {
          const { token } = response.data;
          setIsLogged(true);

          // Stocker le jeton dans le localStorage lors de la connexion
          localStorage.setItem('token', token);
          navigate('/');
        } else {
          alert('Identifiants incorrects. Veuillez réessayer.');
        }
      })
      .catch((err) => {
        console.err('Une erreur s\'est produite lors de la connexion:', err);
        alert('Une erreur s\'est produite lors de la connexion. Veuillez réessayer plus tard.');
      });
  };

  // ? behavior of the submitted form : log in
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, 'form submitted');
    handleLogin(email, password);
    setIsLogged(true);
    navigate('/');
  };

  return (
    <form className="Login-Form" onSubmit={handleSubmit}>
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <FormHeader />

        {/* Login Input: Mail Address */}
        <div className="Field">
          <input
            className="Field-Input"
            name="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        {/* Login Input: Password Address */}
        <div className="Field">
          <input
            className="Field-Input"
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {/* Link to SignUp Form */}
        <p className="Login-Link">
          Pas encore inscrit ? Rejoignez-nous <Link to="/inscription">ici</Link>
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
