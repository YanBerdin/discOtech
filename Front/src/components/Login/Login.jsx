import './Login.scss';
import User from '../../assets/User.png';

function Login() {
  return (
    <form className="Login-Form" action="">
      <img className="Login-UserImg" src={User} alt="Logo de personnage" />
      <p className="Login-Header">Connexion</p>
      <div className="Login-InputContainer">
        <input placeholder="Adresse e-mail" id="email" className="Login-InputField" type="text" />
      </div>

      <div className="Login-InputContainer">
        <input placeholder="Mot de passe" id="password" className="Login-InputField" type="password" />
      </div>

      <button className="Login-Button" id="button" type="submit">Me connecter</button>
      <div className="Login-SignUp">
        <p>Pas encore inscrit ? Rejoins nous <a href="#">ici</a> </p>

      </div>
    </form>
  );
}
export default Login;
