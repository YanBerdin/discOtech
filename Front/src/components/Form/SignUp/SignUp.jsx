/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import : npm
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

// == Import : local
import inputFile from '../../../assets/form/input-file.svg';
import User from '../../../assets/form/form-icon.png';
import api from '../../../api/api';
import {
  setEmail, setPassword, setFirstName, setLastName, setAvatar,
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

  const values = [
    email, password, lastname, firstname,
  ];

  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    const validationErrors = Validation({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    });
    // Vérifiez s'il y a des erreurs
    if (Object.keys(validationErrors).length > 0) {
      // S'il y a des erreurs, affichez-les à l'utilisateur
      setErrors(validationErrors);
      return; // Arrêtez l'exécution de la fonction si des erreurs sont présentes
    }
    // Si aucune erreur, appelez l'API pour l'enregistrement de l'utilisateur
    api.post('/users/signup', {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      avatar: avatar,
    })
      .then((res) => {
        // Gérez les réponses de l'API ici
        if (res.status === 201) {
          console.log(email, password, lastname, firstname, avatar);
        } else if (res.status === 200) {
          alert('Cet utilisateur existe déjà');
        } else {
          alert('Erreur lors de l\'inscription');
        }
      })
      .catch((err) => {
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };
  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
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
          name="password"
          type="password"
          placeholder="Mot de passe*"
          required
          value={password}
          onChange={(event) => dispatch(setPassword(event.target.value))}
        />
        {errors.password && <p className="SignUp-Error">{errors.password}</p>}

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
