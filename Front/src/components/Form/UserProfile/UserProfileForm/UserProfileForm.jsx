/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// == Import : npm
import api from '../../../../api/api';

// == Import : local
import {
  setEmail, setPassword, setLastName, setNewFirstnameInput, // setFirstName
} from '../../../../actions/user';
import User from '../../../../assets/WelcomeUser.png';
import './UserProfileForm.scss';

// == Component
function UserProfileForm() {
  const dispatch = useDispatch();

  const {
    email, password, firstname, lastname, detail,
  } = useSelector((state) => state.user);
  // const { avatar } = useSelector((state) => state.user);
  // Fonctionne
  const handleLastName = () => {
    api
      .patch('/users/edit/lastname', {
        lastname: lastname,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(lastname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`lastname:${lastname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handleFirstName = () => {
    api
      .patch('/users/edit/firstname', {
        firstname: firstname,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(firstname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`firstname:${firstname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };
  // Fonctionne
  const handleEmail = () => { // Fonctionne
    api
      .patch('/users/edit/email', {
        email: email,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(email);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`email:${email}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };
  // Fonctionne
  const handlePassword = () => {
    api
      .patch('/users/edit/password', {
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(password);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`password:${password}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };
  useEffect(() => {
    // Effectuez ici votre requête API pour récupérer le prénom de l'utilisateur
    // par exemple, en utilisant fetch() ou une librairie comme axios
    api
      .get('/users/edit/detail', {
        detail: detail,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  }, [detail]);

  return (
    <section className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Modifier mon profil{ firstname }</p>
        </div>
        {/* Login Input : Nom */}
        <form className="Field" onSubmit={handleLastName}>
          <input
            required
            className="Field-Input"
            type="text"
            name="lastname"
            placeholder="Nom"
            value={lastname || ''} // Warning:`value` prop on `input` should not be null
            onChange={(event) => dispatch(setLastName(event.target.value))}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
        {/* Login Input : Prénom */}
        <form className="Field" onSubmit={handleFirstName}>
          <input
            required
            className="Field-Input"
            name="firstname"
            type="text"
            placeholder="Prénom"
            value={firstname || ''} // Warning:`value` prop on `input` should not be null.
            onChange={(event) => dispatch(setNewFirstnameInput(event.target.value))}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>

        {/* Login Input : Mail Adress */}
        <form className="Field" onSubmit={handleEmail}>
          <input
            required
            className="Field-Input"
            name="email"
            type="email"
            placeholder="Adresse e-mail"
            value={email || ''} // Warning:`value` prop on `input` should not be null.
            onChange={(event) => dispatch(setEmail(event.target.value))}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>

        {/* Login Input : Password Adress */}
        <form className="Field" onSubmit={handlePassword}>
          <input
            required
            className="Field-Input"
            name="password"
            type="text"
            placeholder="Mot de passe"
            value={password || ''} // Warning:`value` prop on `input` should not be null.
            onChange={(event) => dispatch(setPassword(event.target.value))}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
      </div>
    </section>
  );
}

export default UserProfileForm;
