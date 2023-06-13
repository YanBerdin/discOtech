// = Import : npm
import { NavLink } from 'react-bootstrap';

// = Import : local
import './Footer.scss';
import AppLogo from '../../assets/Logo-round.png';
import facebook from '../../assets/iconeFacebook.png';
import linkedin from '../../assets/icone-linkedin.png';
import twitter from '../../assets/icone-twitter.png';
import instagram from '../../assets/icone-instagram.png';

// = Component
function Footer() {
  return (
    <footer className="Footer">

      <div className="Container">
        {/* <div className="Footer-Logo-Container"> */}
        <img
          src={AppLogo}
          className="Footer-AppLogo"
          alt="Logo de l'application en forme de disque "
        />
        {/* </div> */}
        <section className="Footer-Links">
          <div className="Footer-About">
            <p className="titre">A propos</p>
            <NavLink className="NavLink" to="equipe-dev">
              L'équipe de développement
            </NavLink>
            <NavLink className="NavLink" to="le-projet">
              Descriptif du projet
            </NavLink>
          </div>
        </section>

        <section className="Footer-Links">
          <div className="Footer-Useful">
            <p className="titre">Liens utiles</p>
            <NavLink className="NavLink" to="/conditions-generales-utilisation">
              Conditions générales d'utilisation
            </NavLink>
            <NavLink className="NavLink" to="/mentions-legales">Mentions Légales</NavLink>
          </div>
        </section>

        <section className="Footer-Social">
          <div className="Footer-Networks">
            <NavLink className="NavLink" to="https://fr-fr.facebook.com/">
              <img
                src={facebook}
                className="Footer-NetworkLogo"
                alt="Logo facebook"
              />
            </NavLink>

            <NavLink className="NavLink" to="https://www.instagram.com/">
              <img
                src={instagram}
                className="Footer-NetworkLogo"
                alt="Logo instagram"
              />
            </NavLink>
          </div>

          <div className="Footer-Networks">
            <NavLink className="NavLink" to="https://www.linkedin.com/">
              <img
                src={linkedin}
                className="Footer-NetworkLogo"
                alt="Logo linkedin"
              />
            </NavLink>

            <NavLink className="NavLink" to="https://twitter.com/explore">
              <img
                src={twitter}
                className="Footer-NetworkLogo"
                alt="Logo twitter"
              />
            </NavLink>
          </div>
        </section>
      </div>
      <div className="Copyright">
        <p>Copyright DiscO'Tech - Radium - O'clock - 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
