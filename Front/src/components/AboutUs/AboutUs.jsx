/* eslint-disable max-len */
import Header from '../Header/Header';
import './AboutUs.scss';

function AboutUs() {
  return (
    <>
      <Header />
      <div className="Info">
        <h5> L’équipe de développement</h5>
      </div>
      <section className="AboutUs-Container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5 className="title">Eva Redon</h5>
              <h6>Scrum Master</h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Scrum Master</p>
              <p>
                Garant de la méthode du projet : Elle gère le respect des
                conventions définies dans le groupe.
              </p>
              <p>Tranche en cas de conflits fonctionnels (non techniques)</p>
              <p>
                S’assure que toutes les taches sont bien attribuées, suivies,
                accomplies.
              </p>
              <p>Assure la communication au sein du groupe</p>
              <p>Vérifie que toute l’équipe possède les bonnes informations.</p>
              <p>Gère l’outil de suivi du projet.</p>
              <p>Anime la réunion du matin et gère l’avancement du projet</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5 className="title">Sahra Marchand</h5>
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
              <h5 className="title">Gaetan Leborgne</h5>
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
              <h5 className="title">Romain Gradelet</h5>
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
              <h5 className="title">Yan Berdin</h5>
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
    </>
  );
}

export default AboutUs;
