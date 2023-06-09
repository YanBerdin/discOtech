import './Login.scss';
import User from '../../assets/User.png';

function Login() {
  return (
    <form className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Login-Header">
          <img className="Login-UserImg" src={User} alt="Logo de personnage" />
          <p className="Login-Title">Connexion</p>
        </div>

        {/* Login Input : Mail Adress */}
        <div className="Login-InputContainer">
          <input placeholder="Adresse e-mail" id="email" className="Login-InputField" type="text" />
        </div>

        {/* Login Input : Password */}
        <div className="Login-InputContainer">
          <input placeholder="Mot de passe" id="password" className="Login-InputField" type="password" />
        </div>

        {/* Link to SignUp Form */}
        <p className="Login-SignUp">Pas encore inscrit ? Rejoins nous <a href="#">ici</a> </p>
      </div>
      {/* Login Button */}
      <button className="Login-Button" id="button" type="submit">Me connecter</button>

    </form>
  );
}
export default Login;
