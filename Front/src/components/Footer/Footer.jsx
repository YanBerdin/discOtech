// import React from "react";
import { NavLink } from 'react-bootstrap';
import './Footer.scss';
// import {BrowserRouteur} from `react-routeur-dom`;

function Footer() {
  return (
    <footer className="test">
      <NavLink>A propos</NavLink>
      <NavLink>Liens utiles</NavLink>
      <NavLink>Suivez nous</NavLink>
      <p>Copyright DiscO'Tech - Radium - O'clock - 2023</p>
    </footer>
  );
}

export default Footer;
