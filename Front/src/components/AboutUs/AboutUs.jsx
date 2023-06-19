/* eslint-disable max-len */
import Header from '../Header/Header';
import './AboutUs.scss';

function AboutUs() {
  return (
    <>
      <Header />
      <section className="AboutUs-Container">
        <h5> L’équipe de développement</h5>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5 className="title">Eva Redon</h5>
              <h6>Scrum Master</h6>
            </div>
            <div className="flip-card-back">
              <p className="title">Scrum Master</p>
              <p>
                Garant de la méthode du projet : Elle gère le respect des conventions
                définies dans le groupe.
              </p>
              <p>Tranche en cas de conflits fonctionnels (non techniques)</p>
              <p>
                S’assure que toutes les taches sont bien attribuées, suivies,
                accomplies.
              </p>
              <p>
                Assure la communication au sein du groupe : Vérifie que toute l’équipe
                possède les bonnes informations.
              </p>
              <p>Gère l’outil de suivi du projet.</p>
              <p>Anime la réunion du matin et gère l’avancement du projet</p>
            </div>
          </div>
        </div>
        <h6>Scrum Master : Eva R.</h6>
        <p>
          Garant de la méthode du projet : Elle gère le respect des conventions
          définies dans le groupe.
        </p>
        <p>Tranche en cas de conflits fonctionnels (non techniques)</p>
        <p>
          S’assure que toutes les taches sont bien attribuées, suivies,
          accomplies.
        </p>
        <p>
          Assure la communication au sein du groupe : Vérifie que toute l’équipe
          possède les bonnes informations.
        </p>
        <p>Gère l’outil de suivi du projet.</p>
        <p>Anime la réunion du matin et gère l’avancement du projet</p>
        <h6>Lead Dev : Sahra M. (Front) & Gaëtan L. (Back)</h6>
        <p>Choisit les orientations importantes, choix techniques importants</p>
        <p>Veille au bon fonctionnement du projet</p>
        <h6>Git Master : Romain G.</h6>
        <p>Référent technique du versionning avec Git</p>
        <p>
          Garant du versionning de notre application, gère les conflits, valide
          et Merge les Pull Request.
        </p>
        <h6>Référent technique : Sahra M. (Front) & Gaëtan L. (Back)</h6>
        <p>Référent des librairies et techno utilisées.</p>
        <p>Se documente sur les technos, leur sémantique, leur utilisation.</p>
        <p>Restitue ces informations à l’équipe.</p>
        <h6>Product Owner : Yan B.</h6>
        <p>
          Connait le produit et représente les intérêts et les besoins du
          client/des utilisateurs purement fonctionnels (non techniques).
        </p>
      </section>
    </>
  );
}

export default AboutUs;
