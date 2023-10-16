// = Import : npm
import { Link, useLocation } from 'react-router-dom';

// = Import : local
import AppLogo from '../../assets/Logo-round.png';
import facebook from '../../assets/social/icone-facebook.png';
import linkedin from '../../assets/social/icone-linkedin.png';
import twitter from '../../assets/social/icone-twitter.png';
import instagram from '../../assets/social/icone-instagram.png';

// = Import : style
import './Footer.scss';

// = Component
function Footer() {
  const location = useLocation();
  const isSearchResultPage = location.pathname.startsWith('/resultat-recherche');

  if (isSearchResultPage) {
    return null;
  }

  return (
    <footer className="Footer">

      <div className="Footer-Container">
        <img
          src={AppLogo}
          className="Footer-AppLogo"
          alt="Logo de l'application en forme de disque "
        />
        {/* </div> */}
        <section className="Footer-Links">
          <div className="Footer-About">
            <p className="Footer-Title">A propos</p>
            <Link className="Footer-NavLink" to="equipe-dev">
              L'équipe de développement
            </Link>
            <Link className="Footer-NavLink" to="le-projet">
              Descriptif du projet
            </Link>
          </div>
        </section>

        <section className="Footer-Links">
          <div className="Footer-Useful">
            <p className="titre">Liens utiles</p>
            <Link className="Footer-NavLink" to="/conditions-generales-utilisation">
              Conditions générales d'utilisation
            </Link>
            <Link className="Footer-NavLink" to="/mentions-legales">Mentions Légales</Link>
          </div>
        </section>

        <section className="Footer-Social">
          <div className="Footer-Networks">
            <Link className="NavLink" to="https://fr-fr.facebook.com/">
              <img
                src={facebook}
                className="Footer-NetworkLogo"
                alt="Logo facebook"
              />
            </Link>

            <Link className="Footer-NavLink" to="https://www.instagram.com/">
              <img
                src={instagram}
                className="Footer-NetworkLogo"
                alt="Logo instagram"
              />
            </Link>
          </div>

          <div className="Footer-Networks">
            <Link className="Footer-NavLink" to="https://www.linkedin.com/">
              <img
                src={linkedin}
                className="Footer-NetworkLogo"
                alt="Logo linkedin"
              />
            </Link>

            <Link className="Footer-NavLink" to="https://twitter.com/explore">
              <img
                src={twitter}
                className="Footer-NetworkLogo"
                alt="Logo twitter"
              />
            </Link>
          </div>
        </section>
      </div>
      <div className="Footer-Copyright">
        <p>Copyright DiscO'Tech - Radium - O'clock - 2023</p>
      </div>
    </footer>
  );
}

// = Export :
export default Footer;
