/* eslint-disable max-len */
import Header from '../Header/Header';
import './AboutUs.scss';

function AboutUs() {
  return (
    <>
      <Header />
      <section className="AboutUs-Container">
        <h4> L’équipe de développement</h4>
        <h5>Product Owner : Yan Berdin</h5>
        <p>
          Connait le produit et représente les intérêts et les besoins du
          client/des utilisateurs purement fonctionnels (non techniques).
        </p>
        <p>Tranche en cas de conflits fonctionnels (non techniques)</p>
        <h5>Scrum Master : Eva Redon</h5>
        <p>
          Garant de la méthode du projet : gère le respect des conventions
          définies dans le groupe.
        </p>
        <p>
          S’assure que toutes les taches sont bien attribuées, suivies,
          accomplies.
        </p>
        <p>
          Assure la communication au sein du groupe : Vérifie que toute l’équipe
          possède les bonnes informations Gère l’outil de suivi du projet.
        </p>
        <p>Anime la réunion du matin et gère l’avancement du projet</p>
        <h5>
          Lead Dev Front & Lead Dev Back Front : Sahra Marchand Back : Gaëtan Leborgne
        </h5>
        <p>Choisit les orientations importantes, choix techniques importants</p>
        <p>Veille au bon fonctionnement du projet</p>
        <h5>Git Master Romain Gradelet</h5>
        <p>Référent technique du versionning avec Git</p>
        <p>
          Garant du versionning de notre application, gère les conflits, valide
          et Merge les Pull Request.
        </p>
        <h5>
          Référent technique : Techno Front : Sahra Marchand Back : Gaëtan Leborgne
        </h5>
        <p>Référent des librairies et techno utilisées.</p>
        <p>Se documente sur les technos, leur sémantique, leur utilisation.</p>
        <p>Restitue ces informations à l’équipe.</p>
      </section>
    </>
  );
}

export default AboutUs;
