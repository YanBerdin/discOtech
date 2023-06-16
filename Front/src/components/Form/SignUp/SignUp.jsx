/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import FormHeader from '../FormHeader/FormHeader';
import inputFile from '../../../assets/input-file.svg';
import './SignUp.scss';

// == Composant
function SignUp({
  email, password, lastname, firstname,
}) {
  return (
    <form className="SignUp-Form" action="">
      <div className="SignUp-Card">
        {/* SignUp Header : Title and Image */}
        <FormHeader />

        {/* SignUp Input : Avatar */}
        <div className="SignUp-InputContainer-UserIdentity">
          <input className="SignUp-AvatarInput" id="file" type="file" />
          <label className="SignUp-Avatar" htmlFor="file">
            <img src={inputFile} alt="Icone dl" />
          </label>

          <div className="SignUp-InputContainer-User">
            {/* SignUp Input : Last Name */}
            <input className="Field-Input" name="lastname" placeholder="Nom" value={lastname} />
            {/* SignUp Input : First Name */}
            <input className="Field-Input" name="firstname" placeholder="Prénom" value={firstname} />
          </div>
        </div>

        <div className="SignUp-InputContainer-Website">
          {/* SignUp Input : Mail Adress */}
          <input className="Field-Input" name="email" placeholder="Adresse e-mail" value={email} />
          {/* SignUp Input : Password */}
          <input
            className="Field-Input"
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
          />
          {/* SignUp Input : Password Confirm */}
          <input
            className="Field-Input"
            name="password"
            type="password"
            placeholder="Confirmation du mot de passe"
            value={password}
          />
        </div>

        {/* Link to Login Form */}
        <p className="SignUp-Login">
          Déjà inscrit ? Connecte toi <Link to="/connexion">ici</Link>
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
