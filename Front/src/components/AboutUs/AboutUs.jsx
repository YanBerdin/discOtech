/* eslint-disable max-len */

// == Import : local
import Sahra from '../../assets/about_us/dino_sahra.png';
import Eva from '../../assets/about_us/dino_eva.png';
import Gaetan from '../../assets/about_us/dino_gaetan.png';
import Romain from '../../assets/about_us/dino_romain.png';
import Yan from '../../assets/about_us/dino_yan.png';

// = Import : style
import './AboutUs.scss';

/**
 * Component representing the About Us section.
 * @component
 */
function AboutUs() {
  return (
    <div className="Info">
      <h2> L’équipe de développement</h2>
      <section className="AboutUs-Container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="Dino" src={Eva} alt="illustration_dinosaure" />
              <h5 className="title">Eva <br /> Redon</h5>
              <h6>Scrum Master</h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Scrum Master</p>
              <p>
                Eva veille au respect des
                conventions définies par l'équipe.
              </p>
              <p>Tranche en cas de conflits fonctionnels (non techniques)</p>
              <p>
                S’assure que toutes les taches sont bien attribuées, suivies,
                accomplies.
              </p>
              <p>Assure la communication au sein du groupe</p>
              <p>Anime le Daily Scrum et gère l’avancement du projet</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="Dino" src={Sahra} alt="illustration_dinosaure" />
              <h5 className="title">Sahra <br /> Marchand</h5>
              <h6>Lead Dev Front-End </h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Lead Dev Front-End</p>
              <p>
                Choisit les orientations importantes, choix techniques
                importants
              </p>
              <p>Référent des librairies et techno utilisées.</p>
              <p>
                Se documente sur les technos, leur sémantique, leur utilisation.
              </p>
              <p>Restitue ces informations à l’équipe.</p>
              <p>Veille au bon fonctionnement du projet</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="Dino" src={Gaetan} alt="illustration_dinosaure" />
              <h5 className="title">Gaetan  <br /> Leborgne</h5>
              <h6>Lead Dev Back-end</h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Lead Dev Back-end</p>
              <p>
                Choisit les orientations importantes, choix techniques
                importants
              </p>
              <p>Référent des librairies et techno utilisées.</p>
              <p>
                Se documente sur les technos, leur sémantique, leur
                utilisation.
              </p>
              <p>Restitue ces informations à l’équipe.</p>
              <p>Veille au bon fonctionnement du projet</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="Dino" src={Romain} alt="illustration_dinosaure" />
              <h5 className="title">Romain  <br /> Gradelet</h5>
              <h6>Git Master</h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Git Master</p>
              <p>Référent technique du versionning avec Git</p>
              <p>Garant du versionning de notre application</p>
              <p>gère les conflits</p>
              <p>valide et Merge les Pull Request.</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="Dino" src={Yan} alt="illustration_dinosaure" />
              <h5 className="title">Yan <br /> Berdin</h5>
              <h6>Product Owner</h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Product Owner</p>
              <p>
                Connait le produit et représente les intérêts et les besoins
                du client/des utilisateurs purement fonctionnels (non
                techniques).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// == Export
export default AboutUs;
