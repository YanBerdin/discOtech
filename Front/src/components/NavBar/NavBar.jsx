import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.scss';
import logo from '../../assets/Logo-round.png';
import user from '../../assets/user-icon.svg';
import home from '../../assets/home-icon.svg';
import style from '../../assets/style-icon.svg';
import heart from '../../assets/heart-icon.svg';
import about from '../../assets/about-icon.svg';

function NavBar() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand
          className={`logo-img ${toggleOpen ? 'hidden' : ''}`}
          href="#accueil"
        >
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <NavDropdown
          title={(
            <img
              src={user}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Icone pour la page de connexion"
            />
  )}
          id="user-dropdown"
          className={`user-img ${toggleOpen ? 'hidden' : ''} dropdown-center`}
        >
          <NavDropdown.Item href="#connexion">Se connecter</NavDropdown.Item>
          <NavDropdown.Item href="#inscription">S'inscrire</NavDropdown.Item>
        </NavDropdown>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse
          className="navbar-white-text"
          id="responsive-navbar-nav"
        >
          <Nav className="justify-content-start">
            <Nav.Link href="#accueil">
              <img src={home} alt="Icone de l'accueil" className="nav-icon" />
              Accueil
            </Nav.Link>
            <Nav.Link href="#styles">
              <img
                src={style}
                alt="Icone de la page des styles"
                className="nav-icon"
              />
              Styles
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#favoris">
              <img
                src={heart}
                alt="Icone de la page des favoris"
                className="nav-icon"
              />
              Favoris
            </Nav.Link>
            <Nav.Link eventKey={2} href="#aPropos">
              <img
                src={about}
                alt="Icone de la page des favoris"
                className="nav-icon"
              />
              À propos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
