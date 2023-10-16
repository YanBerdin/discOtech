/* eslint-disable no-alert */
/* eslint-disable no-console */
// import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// == Import : npm
import api from '../../../../api/api';

// == Import : local
import User from '../../../../assets/form/form-icon.png';

// == Import : style
import './UserProfileForm.scss';

// == Component
function UserProfileForm() {
  const [currentFirstname, setCurrentFirstname] = useState('');
  const [currentLastname, setCurrentLastname] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLastName = (evt) => {
    evt.preventDefault();
    api
      .patch('/users/edit/lastname', {
        lastname: currentLastname,
      })
      .then((res) => {
        if (res.status === 200) {
          setCurrentLastname(res.data.lastname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
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
          setCurrentFirstname(res.data.firstname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`firstname:${currentFirstname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handleEmail = (evt) => {
    evt.preventDefault();
    api
      .patch('/users/edit/email', {
        email: currentEmail,
      })
      .then((res) => {
        if (res.status === 200) {
          setCurrentEmail(res.data.email);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`email:${currentEmail}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handlePassword = (evt) => {
    evt.preventDefault();
    api
      .patch('/users/edit/password', {
        password: currentPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          setCurrentPassword(res.data.password);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  useEffect(() => {
    api.get('/users/detail')
      .then((res) => {
        setCurrentPassword(res.data.password);
        setCurrentEmail(res.data.email);
        setCurrentLastname(res.data.lastname);
        setCurrentFirstname(res.data.firstname);
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
        {/* Login Input : Lastname */}
        <form className="Field" onSubmit={handleLastName}>
          <input
            required
            className="Field-Input"
            type="text"
            name="Nom"
            placeholder={currentLastname}
            value={currentLastname}
            onChange={(event) => setCurrentLastname(event.target.value)}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
        {/* Login Input : FirstName */}
        <form className="Field" onSubmit={handleFirstName}>
          <input
            required
            className="Field-Input"
            name="firstname"
            type="text"
            placeholder={currentFirstname}
            value={currentFirstname}
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
            // placeholder={currentEmail}
            value={currentEmail}
            onChange={(event) => setCurrentEmail(event.target.value)}
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
            type="password"
            placeholder="Mot de passe"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            autoComplete="off"
          />
          <input
            required
            className="Field-Input"
            name="confirmPassword"
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="off"
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
      </div>
    </section>
  );
}

// == Export
export default UserProfileForm;
