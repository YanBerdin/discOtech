/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import : npm
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// == Import : local
import inputFile from '../../../assets/form/input-file.svg';
import User from '../../../assets/form/form-icon.png';
import api from '../../../api/api';
import {
  setEmail, setPassword, setFirstName, setLastName, setAvatar, saveLoginSuccessful, setClearInput,
} from '../../../actions/user';

// == Import : style
import './SignUp.scss';

// == Composant
function SignUp() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const { password } = useSelector((state) => state.user);
  const { lastname } = useSelector((state) => state.user);
  const { firstname } = useSelector((state) => state.user);
  const { avatar } = useSelector((state) => state.user);
  const logged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  }, [logged, navigate]);

  const handleSignUp = () => {
    api
      .post('/users/signup', {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        avatar: avatar,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(email, password, lastname, firstname, avatar);
          api
            .post('/login_check', {
              email: email,
              password: password,
            })
            .then((response) => {
              if (response.status === 200) {
                console.log(email, password);

                if (response.data.token) {
                  localStorage.setItem('token', response.data.token);
                }

                dispatch(setClearInput(''));
                dispatch(saveLoginSuccessful());

                navigate('/');
              } else {
                alert('Identifiants incorrects. Veuillez réessayer.');
              }
            })
            .catch((err) => {
              console.log(email, password);
              console.error("Une erreur s'est produite lors de la connexion :", err);
              alert(
                "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.",
              );
            });
        } else if (res.status === 200) {
          alert('Cet utilisateur existe déjà');
        } else {
          alert("Erreur lors de l'inscription");
        }
      })
      .catch((err) => {
        console.error(
          `email:${email} password:${password} lastname:${lastname} firstname:${firstname}, avatar:${avatar}`,
        );
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handleValidation = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  return (
    <form className="SignUp-Form" onSubmit={handleValidation}>
      <div className="SignUp-Card">
        {/* Header */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Inscription</p>
        </div>

        <div className="SignUp-UserTop">
          {/* SignUp Input : Avatar */}
          <input
            className="SignUp-AvatarInput"
            type="text"
            value={avatar}
            onChange={(event) => dispatch(setAvatar(event.target.value))}
          />
          <label className="SignUp-Avatar" htmlFor="file">
            <img className="SignUp-AvatarImg" src={inputFile} alt="Icone dl" />
          </label>
          {/* SignUp Input : Username */}
          <div className="SignUp-Username">
            <input
              className="SignUp-InputField"
              name="lastname"
              placeholder="Nom*"
              required
              value={lastname}
              onChange={(event) => dispatch(setLastName(event.target.value))}
            />
            <input
              className="SignUp-InputField"
              name="firstname"
              placeholder="Prénom*"
              required
              value={firstname}
              onChange={(event) => dispatch(setFirstName(event.target.value))}
            />
          </div>
        </div>

        {/* SignUp Input : Mail Adress */}
        <input
          className="SignUp-InputField"
          name="email"
          type="email"
          placeholder="Adresse e-mail*"
          value={email}
          required
          pattern="^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$"
          onChange={(event) => dispatch(setEmail(event.target.value))}
        />

        {/* SignUp Input : Password */}
        <input
          className="SignUp-InputField"
          name="password"
          type="password"
          placeholder="Mot de passe*"
          value={password}
          required
          pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{12,255}"
          onChange={(event) => dispatch(setPassword(event.target.value))}
        />

        {/* Link to Login Form */}
        <p className="SignUp-Message">( * ) Champs requis.</p>
        <p className="SignUp-Link">
          Pas encore parmi nous ? <br /><Link to="/connexion">Connectez-vous ici</Link>
        </p>
      </div>
      {/* SignUp Button */}
      <button className="SignUp-Button" id="button" type="submit">
        M'inscrire
      </button>
    </form>
  );
}

// == Export
export default SignUp;
