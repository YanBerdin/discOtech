// = Import : npm
import { Link } from 'react-router-dom';

// = Import : local
import user from '../../assets/nav/user-icon.svg';
import home from '../../assets/nav/home-icon.svg';
import search from '../../assets/nav/search.svg';
import heart from '../../assets/nav/heart-icon.svg';

// = Import : Style
import './BottomNavigation.scss';

/**
 * Component representing the bottom navigation bar.
 *
 * @component
 * @returns {JSX.Element} The rendered bottom navigation bar.
 */
function BottomNavigation() {
  return (
    <div className="BottomNavigation">
      <Link to="/" className="BottomNavigation-Link">
        <img src={home} alt="Icone de l'accueil" className="BottomNavigation-Icone" />
      </Link>
      <Link to="resultat-recherche" className="BottomNavigation-Link">
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
