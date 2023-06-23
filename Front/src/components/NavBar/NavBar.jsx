import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const logged = useSelector((state) => state.user.logged);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('token');

    window.location = '/';
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`navbar-white-text ${scrollPosition > 35 ? 'bg' : ''} ${toggleOpen ? 'mobile-open' : ''}`}
    >
      <Container>
        <Navbar.Brand
          className={`logo-img ${toggleOpen ? 'hidden' : ''}`}
          href="/"
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
          {logged ? (
            <>
              <NavDropdown.Item as={Link} to="/user-profile">Mon profil</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogoutClick}>Se déconnecter</NavDropdown.Item>
            </>
          ) : (
            <>
              <NavDropdown.Item as={Link} to="/connexion">Se connecter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inscription">S'inscrire</NavDropdown.Item>
            </>
          )}
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
            <Link to="/" className="nav-link">
              <img src={home} alt="Icone de l'accueil" className="nav-icon" />
              Accueil
            </Link>
            <Link to="/styles" className="nav-link">
              <img
                src={style}
                alt="Icone de la page des styles"
                className="nav-icon"
              />
              Styles
            </Link>
          </Nav>
          <Nav>
            <Link to="/favoris" className="nav-link">
              <img
                src={heart}
                alt="Icone de la page des favoris"
                className="nav-icon"
              />
              Favoris
            </Link>
            <Link to="/a-propos" className="nav-link">
              <img
                src={about}
                alt="Icone de la page des favoris"
                className="nav-icon"
              />
              À propos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
