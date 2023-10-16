/* eslint-disable no-console */
/* eslint-disable no-alert */

// = Import : npm
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import api from '../../api/api';

// = Import : local
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import Footer from '../Footer/Footer';
import LegalNotices from '../LegalNotices/LegalNotices';
import TermsofService from '../TermsofService/TermsofService';
import Favorites from '../Favorites/Favorites';
import AlbumPage from '../AlbumPage/AlbumPage';
import AboutUs from '../AboutUs/AboutUs';
import UserProfile from '../Form/UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';
import StylesPage from '../StylesPage/StylesPage';
import SearchResult from '../SearchBar/SearchResult/SearchResult';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import Page404 from '../Page404/Page404';

import { saveLoginSuccessful } from '../../actions/user';

// == Import : style
import './App.scss';
import StylesResult from '../StylesPage/StylesResult/StylesResult';
import LayoutWithHeader from '../../layout/LayoutWithHeader';
import LayoutWithoutHeader from '../../layout/LayoutWithoutHeader';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

// == App Component
function App() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const [showToast, setShowToast] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [ourfavorites, setOurFavorites] = useState([]);
  const [latest, setLatest] = useState([]);
  const [search, setSearch] = useState('');
  const [styles, setStyles] = useState([]);
  const navigate = useNavigate();
  // for HomePage, get suggestions albums from api
  useEffect(() => {
    api.get('/albums/random')
      .then((res) => {
        setSuggestions(res.data);
      })
      .catch(() => {
        navigate('/*');
      });
  }, [navigate]);
  useEffect(() => {
    api.get('/albums/ourfavorites')
      .then((res) => {
        setOurFavorites(res.data);
      })
      .catch(() => {
        navigate('/*');
      });
  }, [navigate]);
  useEffect(() => {
    api.get('/albums/latest')
      .then((res) => {
        setLatest(res.data);
      })
      .catch(() => {
        navigate('/*');
      });
  }, [navigate]);
  // for HomePage, get styles from api
  useEffect(() => {
    api.get('/styles')
      .then((res) => {
        setStyles(res.data);
      })
      .catch(() => {
        navigate('/*');
      });
  }, [navigate]);
  // save token in localstorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(saveLoginSuccessful());
    }
  }, [dispatch]);
  // if user logged, show the toast (notification)
  useEffect(() => {
    if (logged) {
      setShowToast(true);
    }
  }, [logged]);

  // eslint-disable-next-line max-len
  if (suggestions.length === 0 || ourfavorites.length === 0 || styles.length === 0 || latest.length === 0) {
    return <Loading />;
  }
  return (
    <div className="App">
      {/* Components available on every page */}
      {/* <NavBar />
      <Header /> */}
      {/* URL routes for each component */}
      <Routes>

        <Route path="/" element={<LayoutWithHeader />}>
          <Route
            path=""
            element={(
              <HomePage
                suggestions={suggestions}
                latest={latest}
                styles={styles}
                ourfavorites={ourfavorites}
                setSearch={setSearch}
                search={search}
              />
            )}
          />
          <Route path="styles" element={<StylesPage styles={styles} />} />
          <Route path="le-projet" />
          <Route path="styles/:name" element={<StylesResult />} />
        </Route>

        <Route path="/" element={<LayoutWithoutHeader />}>
          <Route path="resultat-recherche" element={<><SearchBar /><SearchResult /></>} />
          <Route path="resultat-recherche/:type/:search" element={<><SearchBar /><SearchResult /></>} />
          <Route path="conditions-generales-utilisation" element={<TermsofService />} />
          <Route path="mentions-legales" element={<LegalNotices />} />
          <Route path="connexion" element={<Login />} />
          <Route path="albums/:id" element={<AlbumPage />} />
          <Route path="inscription" element={<SignUp />} />
          <Route path="profil" element={<UserProfile />} />
          <Route path="favoris" element={<Favorites />} />
          <Route path="equipe-dev" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Route>

      </Routes>
      {/* Toast notification for connexion */}
      <Toast show={showToast} onClose={() => setShowToast(false)} style={{ position: 'fixed', left: '20px', bottom: '80px' }} delay={3000} autohide>
        <Toast.Body style={{ color: 'black' }}>
          Vous êtes bien connecté.
        </Toast.Body>
      </Toast>
      {/* Navigation for mobile users */}
      <BottomNavigation />
      <Footer />
    </div>
  );
}
// == Export
export default App;
