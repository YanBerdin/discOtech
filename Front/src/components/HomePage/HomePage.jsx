/* eslint-disable no-alert */
/* eslint-disable no-console */

// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import StylesCarousel from './StylesCarousel/StylesCarousel';
import AlbumCard from './AlbumCard/AlbumCard';

// == Import : syle
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.scss';

// == Compoentn
function HomePage({
  suggestions, styles, latest, ourfavorites,
}) {
  return (
    <>
      <StylesCarousel styles={styles} />

      <div className="HomePage">

        <section className="HomePage-Header">
          <h2 className="HomePage-Title">Dernières sorties :</h2>
          <Link to="/*">
            <p className="HomePage-More">Voir plus</p>
          </Link>
        </section>

        <div className="HomePage-Gallery">
          {latest.slice(0, 10).map((album) => (
            <div className="HomePage-Container" key={album.id}>
              <Link to={`/albums/${album.id}`} key={album.id}>
                <AlbumCard
                  className="HomePage-Card"
                  albumname={album.name}
                  artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            </div>
          ))}
        </div>

        <section className="HomePage-Header">
          <h2 className="HomePage-Title">Nos Suggestions :</h2>
          <Link to="/*">
            <p className="HomePage-More">Voir plus</p>
          </Link>
        </section>

        <div className="HomePage-Gallery">
          {suggestions.slice(0, 10).map((album) => (
            <div className="HomePage-Container" key={album.id}>
              <Link to={`/albums/${album.id}`} key={album.id}>
                <AlbumCard
                  className="HomePage-Card"
                  albumname={album.name}
                  artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            </div>
          ))}
        </div>

        <section className="HomePage-Header">
          <h2 className="HomePage-Title">Nos préférés :</h2>
          <Link to="/*">
            <p className="HomePage-More">Voir plus</p>
          </Link>
        </section>

        <div className="HomePage-Gallery">
          {ourfavorites.slice(0, 10).map((album) => (
            <div className="HomePage-Container" key={album.id}>
              <Link to={`/albums/${album.id}`} key={album.id}>
                <AlbumCard
                  className="HomePage-Card"
                  albumname={album.name}
                  artistfullname={album.artist?.fullname ?? 'Artiste inconnu'}
                  image={album.image}
                  id={album.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default HomePage;
