import './NavBar.scss';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import home from '../../assets/home-icon.svg';
import style from '../../assets/style-icon.svg';
import heart from '../../assets/heart-icon.svg';
import about from '../../assets/about-icon.svg';
import user from '../../assets/user-icon.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleNavToggle = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <Navbar
      expand="md"
      className={`${scrolled ? 'scrolled' : ''} ${navExpanded ? 'nav-expanded' : ''}`}
      onToggle={handleNavToggle}
    >
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#Accueil"
              className={
                activeLink === 'Accueil' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Accueil')}
            >
              <img className="nav-icon" src={home} alt="Icone de l'accueil" />
              Accueil
            </Nav.Link>
            <Nav.Link
              href="#Styles"
              className={
                activeLink === 'Styles' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Styles')}
            >
              <img className="nav-icon" src={style} alt="Icone de la page style" />
              Styles
            </Nav.Link>
            <Nav.Link
              href="#Favoris"
              className={
                activeLink === 'Favoris' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Favoris')}
            >
              <img className="nav-icon" src={heart} alt="Icone de la page favoris" />
              Favoris
            </Nav.Link>
            <Nav.Link
              href="#A-Propos"
              className={
                activeLink === 'A.Propos' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('A.Propos')}
            >
              <img className="nav-icon" src={about} alt="Icone de la page à propos" />
              A Propos
            </Nav.Link>
            <Nav.Link
              href="#Utilisateur"
              className={
    activeLink === 'Utilisateur' ? 'active navbar-link user-link' : 'navbar-link user-link'
  }
              onClick={() => onUpdateActiveLink('Utilisateur')}
            >
              <img className="user-img" src={user} alt="Icone de la page à propos" />
            </Nav.Link>

          </Nav>
          <span className="navbar-text">
            <a to="#connect">
              <button type="button" className="vvd">
                S'inscrire
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    />
                  </svg>
                </div>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
      <CSSTransition
        in={!navExpanded}
        timeout={200}
        classNames="user-icon-animation"
        unmountOnExit
      >
        <Nav.Link className="user-logo" href="/">
          <img src={user} alt="Logo pour la connexion de l'utilisateur" />
        </Nav.Link>
      </CSSTransition>
    </Navbar>
  );
}

export default NavBar;
