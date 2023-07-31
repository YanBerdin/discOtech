/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import : npm
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// == Import : local
import inputFile from '../../../assets/form/input-file.svg';
import User from '../../../assets/form/form-icon.png';
import api from '../../../api/api';
import {
  setEmail, setPassword, setFirstName, setLastName, setAvatar, saveLoginSuccessful, setClearInput,
} from '../../../actions/user';
import Validation from '../Validation';

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

  const values = {
    email: email,
    firstname: firstname,
    lastname: lastname,
  };

  const [errors, setErrors] = useState({});

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

          // Enregistrez l'utilisateur en tant que connecté s'il est enregistré avec succès
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
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      handleSignUp();
    }
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
            {errors.lastname && <p className="SignUp-Error">{errors.lastname}</p>}
            <input
              className="SignUp-InputField"
              name="firstname"
              placeholder="Prénom*"
              required
              value={firstname}
              onChange={(event) => dispatch(setFirstName(event.target.value))}
            />
            {errors.firstname && <p className="SignUp-Error">{errors.firstname}</p>}
          </div>
        </div>

        {/* SignUp Input : Mail Adress */}
        <input
          className="SignUp-InputField"
          name="email"
          placeholder="Adresse e-mail*"
          required
          value={email}
          onChange={(event) => dispatch(setEmail(event.target.value))}
        />
        {errors.email && <p className="SignUp-Error">{errors.email}</p>}

        {/* SignUp Input : Password */}
        <input
          className="SignUp-InputField"
          // name="password"
          type="password"
          placeholder="Mot de passe*"
          required
          minLength="12"
          pattern="[A-Za-z]{3}"
          value={password}
          onChange={(event) => dispatch(setPassword(event.target.value))}
        />
        {/* {errors.password && <p className="SignUp-Error">{errors.password}</p>} */}

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
