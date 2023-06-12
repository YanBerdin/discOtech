// import React from "react";
import { NavLink } from 'react-bootstrap';
import './Footer.scss';
import Logo from '../../assets/Logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
// import {BrowserRouteur} from `react-routeur-dom`;

function Footer() {
  return (
    <footer>
      <section className="footerContainer">
        <div className="logoContainer">
          <img src={Logo} className="Logo" alt="Logo de cette app" />
        </div>
        <div className="apropos">
          <p>A propos</p>
          <NavLink className="AboutUs" to="equipe-dev">L'équipe de développement</NavLink>
          <NavLink className="AboutUs" to="le-projet">Descriptif du projet</NavLink>
        </div>
        <div className="liens-utiles">
          <p>Liens utiles</p>
          <NavLink to="conditions-generales-utilisation">Conditions générales d'utilisation</NavLink>
          <NavLink to="mentions-legales">Mentions Légales</NavLink>
        </div>
        <div className="reseaux-sociaux">
          <div className="icones">
            <img src={facebook} className="icon-reseaux" alt="Logo facebook" />
            <img src={instagram} className="icon-reseaux" alt="Logo facebook" />
          </div>
          <div className="icones">
            <img src={linkedin} className="icon-reseaux" alt="Logo facebook" />
            <img src={twitter} className="icon-reseaux" alt="Logo facebook" />
          </div>
        </div>
      </section>
      <div>
        <p>Copyright DiscO'Tech - Radium - O'clock - 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
