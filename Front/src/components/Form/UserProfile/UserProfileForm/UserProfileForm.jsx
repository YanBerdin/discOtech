/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
// == Import : npm
import api from '../../../../api/api';
// == Import : local
import User from '../../../../assets/WelcomeUser.png';
import './UserProfileForm.scss';
// import { changeFirstname } from '../../../../actions/user';

// == Component
function UserProfileForm() {
  const { firstname } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // Champ controllé des inputs
  const firstnameInputValue = useSelector(
    (state) => state.user.firstnameInputValue,
  );
  const lastnameInputValue = useSelector(
    (state) => state.user.lastnameInputValue,
  );
  const emailInputValue = useSelector((state) => state.user.emailInputValue);
  const passwordInputValue = useSelector(
    (state) => state.user.passwordInputValue,
  );
  console.log({ firstnameInputValue });
  console.log({ lastnameInputValue });
  console.log({ emailInputValue });
  console.log({ passwordInputValue });

  const handleChangeFirstname = () => {
    api
      .post('/users/edit/firstname', {
        firstname: firstnameInputValue,
      })
      .then((res) => {
        if (res.status === 201) {
          // console.log(firstname);
        } else if (res.status === '200') {
          alert('Cet utilisateur existe déjà');
        } else {
          alert('Erreur lors de l\'inscription');
        }
      })
      .catch((err) => {
        // eslint-disable-next-line max-len
        // console.log(`email:${email} password:${password} lastname:${lastname} firstname:${firstname}, avatar:${avatar}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };
  const handleChangeFirstnameSubmit = (event) => {
    event.preventDefault();
    handleChangeFirstname();
  };
  return (
    <section className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Bienvenue {firstname} Modifier mon profil</p>
        </div>
        {/* Login Input : Nom */}
        <form className="Field">
          <input
            required
            className="Field-Input"
            type="text"
            name="lastname"
            placeholder="Nom"
            value={lastnameInputValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
        {/* Login Input : Prénom */}
        <form className="Field" onSubmit={handleChangeFirstnameSubmit}>
          <input
            required
            className="Field-Input"
            name="firstname"
            type="text"
            placeholder="Prénom"
            value={firstnameInputValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
            // {(event) => dispatch(changeFirstname(event.target.value))}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>

        {/* Login Input : Mail Adress */}
        <form className="Field">
          <input
            required
            className="Field-Input"
            name="email"
            type="email"
            placeholder="Adresse e-mail"
            value={emailInputValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>

        {/* Login Input : Password Adress */}
        <form className="Field">
          <input
            required
            className="Field-Input"
            name="password"
            type="text"
            placeholder="Mot de passe"
            value={passwordInputValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
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
