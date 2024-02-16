// == Import npm :
import Accordion from 'react-bootstrap/Accordion';

// == Import : style
import './LegalNotices.scss';

// == Component
/**
 * Component for displaying legal notices and personal data information.
 *
 * @returns {JSX.Element} The LegalNotices component.
 */
function LegalNotices() {
  return (
    <Accordion className="Accordion-Container" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header># Mentions légales & Données personnelles / RGPD</Accordion.Header>
        <Accordion.Body>
          Conformément aux dispositions des [articles 6 et 19 de la loi pour la
          Confiance dans l'Économie
          Numérique](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000043982464/),
          nous vous informons que :
          ## Identité et coordonnées de l'éditeur Ce site
          est édité par XXXXXX (votre nom, ou le nom de votre client si c'est une
          mission de presta). - Adresse : XXXXXX - email : XXXXXX Responsable de la
          publication : - XXXXXX (nom/prénom), XXXXXX (fonction dans l'entreprise) -
          email : XXXXXX ## Identité et coordonnées de l'hébergeur Ce site et sa
          base de données sont hébergés en France (remplacer si pays différent) sur
          les serveurs de l'hébergeur XXXXXX : - XXXXXX - Adresse : XXXXXX - XXXXXX
          - Tél. : XXXXXX - Site web : XXXXXX ## Données personnelles & RGPD ###
          Objet du traitement (finalité et base légale) L'entreprise XXXXXX, dont
          les coordonnées sont disponibles ci-dessus, collecte et traite des données
          personnelles afin de ... (expliquer la ou les finalités du ou des
          traitements) La collecte et le traitement des données effectué par
          l'entreprise XXXXXX a pour base légale [les articles 6.1.a, 6.1.b, 6.1.c,
          6.1.d, 6.1.e et 6.1.f du Réglement Européen pour la Protection des Données
          (RGPD)](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2#Article6)
          (ne garder que les articles appropriés en fonction des traitements
          effectués). ### Catégories de données Les données à caractère personnel
          collectées sont les suivantes (EXEMPLE, SITE ECOMMERCE, À ADAPTER) : -
          Identité : civilité, nom, prénom, adresse électronique (email), code
          interne de traitement permettant l'identification de l'utilisateur. -
          Données relatives aux achats : numéro de transaction, date, produits
          achetés, montant payé, etc. ### Conditions de la collecte et durée de
          conservation des données Les données à caractère personnel sont collectés
          dans les cas suivants, et pour les durées indiquées (EXEMPLE, À ADAPTER) :
          - Identité : dès la création d'un compte utilisateur sur le site, et
          jusqu'à ce que le-dit compte utilisateur soit supprimé. - Données
          relatives aux achats : dès le premier achat et jusqu'à la suppression du
          compte utilisateur associé. ### Destinataires des données (À ADAPTER SELON
          CONTEXTE) Les employés de l'entreprise XXXXXX sont destinataires de
          l'ensemble des catégories de données à caractère personnel collectées. Les
          données collectées ne sont en aucun cas transmises à des tiers. ### Vos
          droits Conformément aux [articles 16, 17, 18 et 20 du Réglement Européen
          pour la Protection des Données
          (RGPD)](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article16),
          toute personne concernée par la collecte et le traitement de données
          effectué par l'entreprise XXXXXX peut exercer ses droits : - Droit de
          rectification : les données personnelles peuvent être rectifiées sur
          simple demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous) ou
          directement depuis l'espace membre du site (SI IMPLÉMENTÉ !). - Droit à
          l'effacement (droit à l'oubli) : les données personnelles peuvent être
          définitivement effacées sur simple demande par mail au DPO de l'entreprise
          XXXXXX (voir ci-dessous) ou directement depuis l'espace membre du site (SI
          IMPLÉMENTÉ !). - Droit à la limitation du traitement des données : sur
          simple demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous),
          vous pouvez limiter certains traitements effectués sur vos données (À
          ADAPTER SELON CONTEXTE). - Droit à la portabilité des données : sur simple
          demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous) ou
          directement depuis l'espace membre du site (SI IMPLÉMENTÉ !), toutes les
          données à caractère personnel concernant un utilisateur lui seront
          transmises au format CSV. ### Délégué à la Protection des Données (DPO) &
          Responsable du traitement Tout utilisateur du site XXXXXX peut accéder aux
          données le concernant, les rectifier ou les faire effacer. Les
          utilisateurs disposent également d'un droit à la portabilité et d’un droit
          à la limitation du traitement des données (consultez le site
          [cnil.fr](https://www.cnil.fr/) pour plus d’informations sur vos droits).
          Pour exercer ces droits ou pour toute question sur le traitement de vos
          données dans ce dispositif, vous pouvez contacter notre DPO : - Par voie
          électronique : dpo@mon-entreprise.fr - Par courrier postal : XXXXXX
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

// == Export
export default LegalNotices;
