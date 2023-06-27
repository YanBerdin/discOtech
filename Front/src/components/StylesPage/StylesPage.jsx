/* eslint-disable no-console */

// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import ReturnButton from '../ReturnButton/ReturnButton';

// == Import : style
import './StylesPage.scss';

// == Styles Page Component
function StylesPage({ styles }) {
  return (
    <>
      <div className="StylesPage-Return">
        <ReturnButton />
      </div>
      <h2 className="StylesPage-Title">Parcourir les styles :</h2>
      <div className="StylesPage">
        {/* Mapping loop to display all styles (clickable with Link of React Router) */}
        {styles.map((style) => (
          <Link to={`/styles/${style.name}`}>
            <div className="StylesPage-Container" key={style.id}>
              <div
                className="StylesPage-Cards"
                style={{ backgroundImage: `url(${style.image})` }}
              >
                <h3 className="StylesPage-StyleName"> {style.name} </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

// == Export
export default StylesPage;
