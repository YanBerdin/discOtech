// = Import : Dependencies
import { Link } from 'react-router-dom';

// = Import : JSX
import user from '../../assets/user-icon.svg';
import home from '../../assets/home-icon.svg';
import search from '../../assets/search.svg';
import heart from '../../assets/heart-icon.svg';

// = Import : Style
import './BottomNavigation.scss';

// = Bottom Navigation Component
function BottomNavigation() {
  return (
    <div className="BottomNavigation">
      <Link to="/" className="BottomNavigation-Link">
        <img src={home} alt="Icone de l'accueil" className="BottomNavigation-Icone" />
      </Link>
      <Link to="/resultat-recherche" className="BottomNavigation-Link">
        <img src={search} alt="Icone de la page recherche" className="BottomNavigation-Icone" />
      </Link>
      <Link to="/favoris" className="BottomNavigation-Link">
        <img src={heart} alt="Icone de la page favoris" className="BottomNavigation-Icone" />
      </Link>
      <Link to="/profil" className="BottomNavigation-Link">
        <img src={user} alt="Icone de la page profil" className="BottomNavigation-Icone" />
      </Link>
    </div>
  );
}

// = Export :
export default BottomNavigation;
