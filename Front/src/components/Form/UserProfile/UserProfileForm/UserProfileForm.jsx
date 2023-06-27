/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// == Import : npm
import api from '../../../../api/api';

// == Import : local
import {
  setEmail,
  setPassword,
} from '../../../../actions/user';
import User from '../../../../assets/WelcomeUser.png';
import './UserProfileForm.scss';

// == Component
function UserProfileForm() {
  const dispatch = useDispatch();
  const {
    email, password,
  } = useSelector(
    (state) => state.user,
  );
  // const { avatar } = useSelector((state) => state.user);
  const [currentFirstname, setCurrentFirstname] = useState(null);
  const [currentLastname, setCurrentLastname] = useState(null);
  // const [currentEmail, setCurrentEmail] = useState(null);

  // Fonctionne
  const handleLastName = (evt) => {
    evt.preventDefault();

    api
      .patch('/users/edit/lastname', {
        lastname: currentLastname,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(currentLastname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`lastname:${currentLastname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handleFirstName = (evt) => {
    evt.preventDefault();

    api
      .patch('/users/edit/firstname', {
        firstname: currentFirstname,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(currentFirstname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`firstname:${currentFirstname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };
  // OK
  const handleEmail = () => {
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
    api.get('/users/detail')
      .then((res) => {
        console.log(res.data);
        setCurrentFirstname(res.data.firstname);
        console.log(currentFirstname);
        setCurrentLastname(res.data.lastname);
        console.log(currentLastname);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Modifier mon profil</p>
        </div>
        {/* Login Input : Nom */}
        <form className="Field" onSubmit={handleLastName}>
          <input
            required
            className="Field-Input"
            type="text"
            name="Nom"
            placeholder={currentLastname}
            value={currentLastname || ''} // Warning:`value` prop on `input` should not be null
            onChange={(event) => setCurrentLastname(event.target.value)}
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
            placeholder={currentFirstname}
            value={currentFirstname || ''} // Warning:`value` prop on `input` should not be null.
            onChange={(event) => setCurrentFirstname(event.target.value)}
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
