import User from '../../../assets/User.png';
import './FormHeader.scss';

function FormHeader() {
  return (
    <div className="Header-Container">
      <img className="Header-UserImg" src={User} alt="Logo de personnage" />
      <p className="Header-Title">Bienvenue</p>
    </div>
  );
}
export default FormHeader;
