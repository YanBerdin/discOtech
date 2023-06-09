// import React from "react";
import { NavLink } from 'react-bootstrap';
import './Footer.scss';
import Logo from '../../assets/Logo.png';
// import {BrowserRouteur} from `react-routeur-dom`;

function Footer() {
  return (
    <footer>
      <section className="footerContainer">
        <img src={Logo} className="Logo" alt="Logo de cette app" />

        <div className="apropos">
          <p>A propos</p>
          <NavLink>L'équipe de developpement</NavLink>
          <NavLink>Nous contacter</NavLink>
          <NavLink>Descriptif du projet</NavLink>
        </div>
        <div className="liens-utiles">
          <p>Liens utiles</p>
          <NavLink>Conditions générales d'utilisation</NavLink>
          <NavLink>Mentions Légales</NavLink>
        </div>
        <div className="reseaux-sociaux">
          <img
            className="icon-reseaux"
            src="https://e7.pngegg.com/pngimages/288/247/png-clipart-youtube-graphy-social-media-computer-icons-facebook-youtube-text-trademark.png"
            alt="Logo facebook"
          />
        </div>
      </section>
      <div>
        <p>Copyright DiscO'Tech - Radium - O'clock - 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
