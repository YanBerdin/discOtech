# `DiscO'Tech` :man_dancing:

## About
The project consists in creating an online platform allowing the referencing of all musical genres
The main goal is to provide users with a friendly and attractive interface to explore music discs

built with **React.js**

## Demo
This project hosted at : [https://discotech-git-master-yanberdins-projects.vercel.app/](https://discotech-git-master-yanberdins-projects.vercel.app/)

BackOffice App/API (Symfony) : [https://github.com/YanBerdin/api-discOtech](https://github.com/YanBerdin/api-discOtech)


### `Intégration interactive, dynamique et responsive de notre maquette`

L'application a été conçue pour être responsive. Elle s'adapte à différentes tailles d'écran pour offrir une expérience utilisateur optimale sur les appareils mobiles et les ordinateurs de bureau.

### `CRUD de données depuis notre API externe`

L'application utilise Axios pour récupérer des données depuis l'API externe. Mise en place de mesures de sécurité pour protéger la connexion de l'utilisateur à l'API, notamment en utilisant des tokens JWT.

### `Réponse aux problématiques SEO`

Bien que l'application n'ait pas été développée avec du Server Side Rendering (SSR), les problématiques SEO sont prises en compte en utilisant des balises HTML sémantiques, en assurant un contraste élevé des couleurs, et en utilisant des balises d'ancrage informatives.

### `Accessibilité`

- Utilisation de balises HTML sémantiques
- Balises d'ancrage (liens) informatives
- Attributs alt pour les images
- Contraste élevé des couleurs
- Tailles de police flexibles
- Étiquettes pour les éléments de formulaire
- Test avec des outils d'assistance

### `React Libraries`

- **Axios** : Utilisé pour effectuer des requêtes API
- **Bootstrap** : Utilisé pour l'intégration graphique en HTML et CSS
- **NPM** : Gestionnaire de paquets JavaScript
- **React-router-dom** : Utilisé pour gérer le routage
- **Redux** : Gestion d'état centralisée des données
- **Slick-carousel** : Bibliothèque de composants pour créer des carrousels d'images
- **Vite** : Serveur de développement et outil de build
- **PropTypes** : Vérification du type de données des props

## `Sécurité`

### `Protection contre les failles XSS : attaque Cross-Site Scripting`

- Validation des données provenant de l’utilisateur et du serveur (réponses aux requêtes AJAX). Même principe de double-validation que côté serveur.
- Sécurisation des formulaires et méthodes d’écriture de données par token de synchronisation (aléatoire & à usage unique), dont l’accès est protégé par CORS.

### `Sécurisation de la connexion de l’utilisateur à l’API`

- Création d'une variable de connexion à l’API dans le fichier ‘.env’
  - Évite d’exposer l’URL et de versionner sans que chaque commit ne modifie l’URL de connexion
  - Chacun peut définir son environnement selon son utilisation Dev/Prod

### `CORS`

- Approche par token
- Utilisation d'Axios pour ajouter un Interceptor et récupérer / envoyer le JWT
- Le token JWT est récupéré dans le localstorage et envoyé à chacune de nos requêtes à l’API évitant de passer l’id de l’utilisateur connecté qui est déjà identifié dans le token.
- On reproche parfois à cette solution ses risques de sécurités. En effet en cas de failles XSS, le localStorage est accessible et donc le token récupérable par un pirate. Toutefois en cas de failles XSS, le state et toutes les données saisies sont récupérables tout autant. C’est d’ailleurs pourquoi ni Password ni Login en clair ne sont stockés dans le state.

### `Gestion de la déconnexion`

Pour gérer la déconnexion il suffit d’oublier le token côté front-end. Le supprimer du state ou de la configuration d’Axios lorsque l’utilisateur émet l’intention de se déconnecter.

### `Protection contre les attaques CSRF (Cross-Site Request Forgery)`

Notre API REST n'utilise pas de cookies / sessions car elle doit rester stateless. Sans vol de cookies ou de session l’attaque CSRF est très improbable.

## `Documentation`

[Home](https://link-to-home-doc)
[Global](https://link-to-global-doc)
[AboutUs](https://link-to-aboutus-doc)
[AlbumCard](https://link-to-albumcard-doc)
[AlbumPage](https://link-to-albumpage-doc)
[App](https://link-to-app-doc)
[BottomNavigation](https://link-to-bottomnavigation-doc)
[FavoriteButton](https://link-to-favoritebutton-doc)
[FavoriteCard](https://link-to-favoritecard-doc)
[Favorites](https://link-to-favorites-doc)
[Footer](https://link-to-footer-doc)
[Header](https://link-to-header-doc)
[HomePage](https://link-to-homepage-doc)
[LayoutWithHeader](https://link-to-layoutwithheader-doc)
[LayoutWithoutHeader](https://link-to-layoutwithoutheader-doc)
[LegalNotices](https://link-to-legalnotices-doc)
[Loading](https://link-to-loading-doc)
[Login](https://link-to-login-doc)
[NavBar](https://link-to-navbar-doc)
[Page404](https://link-to-page404-doc)
[ReturnButton](https://link-to-returnbutton-doc)
[Search](https://link-to-search-doc)
[SearchBar](https://link-to-searchbar-doc)
[SearchResult](https://link-to-searchresult-doc)
[SignUp](https://link-to-signup-doc)
[StylesCarousel](https://link-to-stylescarousel-doc)
[StylesPage](https://link-to-stylespage-doc)
[StylesResult](https://link-to-stylesresult-doc)
[TermsofService](https://link-to-termsofservice-doc)
[UserProfile](https://link-to-userprofile-doc)
[UserProfileForm](https://link-to-userprofileform-doc)
[addFavorite](https://link-to-addfavorite-doc)
[api](https://link-to-api-doc)
[reducer](https://link-to-reducer-doc)
[removeFavorite](https://link-to-removefavorite-doc)
[rootReactElement](https://link-to-rootreactelement-doc)
[rootReducer](https://link-to-rootreducer-doc)
[saveLoginSuccessful](https://link-to-saveloginsuccessful-doc)
[setAvatar](https://link-to-setavatar-doc)
[setClearInput](https://link-to-setclearinput-doc)
[setEmail](https://link-to-setemail-doc)
[setFavorites](https://link-to-setfavorites-doc)
[setFirstName](https://link-to-setfirstname-doc)
[setLastName](https://link-to-setlastname-doc)
[setPassword](https://link-to-setpassword-doc)



## :gear: hecklist Run

### `Prerequisites`
Make sure you have the following installed Node.js.

### `Getting Started`
Follow the steps below to get started with this template:

Clone this repository

### `Navigate to the project directory:`
```bash
cd discOtech/Front
```

### `Install the dependencies using npm or Yarn:`
```bash
npm install
# or
yarn install
```

### :hammer: Configuration

**Warning** : Only after Back is launch, create a file .env as the `.env.example`.
You need to use your `LASTNAME` and `FIRSTNAME` to create your base url in `.env`

```bash
VITE_API_BASE_URL=http://[firstname]-[lastname]-server.eddi.cloud/projet-disc-otech-back/Back/public/api
```


### `Start the development server:`

Runs the app in the development mode. Open [http://localhost:8000].

The page will reload when you make changes. You may also see any lint errors in the console.
```bash
npm run dev
```


### :nerd_face: `CREDIT`
FrontEnd Team:

- Eva Redon (https://github.com/evaredon)

- Sahra Marchand (https://github.com/sahramarchand)

- Yan Berdin (https://github.com/YanBerdin)

BackEnd Team:

- Gaëtan Leborgne (https://github.com/GaetanLeborgne)

- Romain Gradelet (https://github.com/Romain-GRADELET)
