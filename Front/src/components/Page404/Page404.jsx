import './Page404.scss';
import { Link } from 'react-router-dom';

/**
 * Renders the Page404 component.
 *
 * @returns {JSX.Element} The rendered Page404 component.
 */
function Page404() {
  return (
    <div className="Page404-Container">

      <h2 className="Page404-OOps">OOps !</h2>

      <h2 className="Page404-Txt">On dirait que la page n'existe pas...</h2>

      <div className="Page404-Flex">
        <div className="Page404-Music">
          <span className="Page404-icon">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
              <ellipse transform="rotate(-21.283 49.994 75.642)" cx="50" cy="75.651" rx="19.347" ry="16.432" fill="black" />
              <path fill="black" d="M58.474 7.5h10.258v63.568H58.474z" />
            </svg>
          </span>
          <span className="Page404-icon">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
              <ellipse transform="rotate(-21.283 49.994 75.642)" cx="50" cy="75.651" rx="19.347" ry="16.432" fill="black" />
              <path fill="black" d="M58.474 7.5h10.258v63.568H58.474z" />
            </svg>
          </span>
          <span className="Page404-icon">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
              <ellipse transform="rotate(-21.283 49.994 75.642)" cx="50" cy="75.651" rx="19.347" ry="16.432" fill="black" />
              <path fill="black" d="M58.474 7.5h10.258v63.568H58.474z" />
            </svg>
          </span>
        </div>
        <div className="Page404-Loader" />
        <Link to="/">
          <button type="button" className="Page404-comic-btn">Accueil</button>
        </Link>
      </div>
    </div>
  );
}
export default Page404;
