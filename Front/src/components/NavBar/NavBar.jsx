import './NavBar.scss';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Accueil" className={activeLink === 'Accueil' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Accueil')}>Accueil</Nav.Link>
            <Nav.Link href="#Styles" className={activeLink === 'Styles' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Styles')}>Styles</Nav.Link>
            <Nav.Link href="#Favoris" className={activeLink === 'Favoris' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Favoris')}>Favoris</Nav.Link>
            <Nav.Link href="#A-Propos" className={activeLink === 'A.Propos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('A.Propos')}>A Propos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <a to="#connect">
              <button type="button" className="vvd"> S'inscrire
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" /></svg>
                </div>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
