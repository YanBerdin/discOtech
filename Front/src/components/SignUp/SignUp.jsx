/* eslint-disable jsx-a11y/label-has-associated-control */
// Dépendances :
import { Link } from 'react-router-dom';

// Fichiers Style :
import User from '../../assets/User.png';
import './SignUp.scss';

function SignUp() {
  return (
    <form className="SignUp-Form" action="">

      <div className="SignUp-Card">
        {/* SignUp Header : Title and Image */}
        <div className="SignUp-Header">
          <img className="SignUp-UserImg" src={User} alt="Logo de personnage" />
          <p className="SignUp-Title">Inscription</p>
        </div>

        {/* SignUp Input : Avatar */}
        <div className="SignUp-InputContainer-UserIdentity">
          <input className="SignUp-AvatarInput" id="file" type="file" />
          <label className="SignUp-Avatar" htmlFor="file"><span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M17.1813 16.3254L15.3771 14.5213C16.5036 13.5082 17.379 12.9869 18.2001 12.8846C19.0101 12.7837 19.8249 13.0848 20.8482 13.8687C20.8935 13.9034 20.947 13.9202 21 13.9202V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V13.7522C3.06398 13.7522 3.12796 13.7278 3.17678 13.679L4.45336 12.4024C5.31928 11.5365 6.04969 10.8993 6.71002 10.4791C7.3679 10.0605 7.94297 9.86572 8.50225 9.86572C9.06154 9.86572 9.6366 10.0605 10.2945 10.4791C10.9548 10.8993 11.6852 11.5365 12.5511 12.4024L16.8277 16.679C16.9254 16.7766 17.0836 16.7766 17.1813 16.679C17.2789 16.5813 17.2789 16.423 17.1813 16.3254Z" opacity="0.1" /> <path strokeWidth="2" stroke="#ffffff" d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" /> <path strokeLinecap="round" strokeWidth="2" stroke="#ffffff" d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022" /> <path strokeLinecap="round" strokeWidth="2" stroke="#ffffff" d="M21.0002 13.6702C18.907 12.0667 17.478 12.2919 15.1982 14.3459" /> <path strokeWidth="2" stroke="#ffffff" d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" /> </g></svg></span></label>

          <div className="SignUp-InputContainer-User">
            {/* SignUp Input : Last Name */}
            <input type="text" name="" id="lastName" className="SignUp-InputField" placeholder="Nom" />

            {/* SignUp Input : First Name */}
            <input type="text" name="" id="firstName" className="SignUp-InputField" placeholder="Prénom" />
          </div>
        </div>

        <div className="SignUp-InputContainer-Website">
          {/* SignUp Input : Mail Adress */}
          <div className="SignUp-InputContainer">
            <input placeholder="Adresse e-mail" id="email" className="SignUp-InputField" type="text" />
          </div>

          {/* SignUp Input : Password */}
          <div className="SignUp-InputContainer">
            <input placeholder="Mot de passe" id="password" className="SignUp-InputField" type="text" />
          </div>

          {/* SignUp Input : Password Confirm */}
          <div className="SignUp-InputContainer">
            <input placeholder="Confirmation du Mot de passe" className="SignUp-InputField" type="password" id="confirmPassword" />
          </div>

        </div>

        {/* Link to Login Form */}
        <p className="SignUp-SignUp">
          Déjà inscrit ? Connecte toi <Link to="/connexion">ici</Link>
        </p>

      </div>
      {/* SignUp Button */}
      <button className="SignUp-Button" id="button" type="submit">
        Me connecter
      </button>
    </form>
  );
}
export default SignUp;
