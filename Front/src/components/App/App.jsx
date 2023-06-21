/* eslint-disable no-console */
/* eslint-disable no-alert */
// Dépendances
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import api from '../../api/api';

// Fichiers JSXimport { useState } from 'react';
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LegalNotices from '../LegalNotices/LegalNotices';
import TermsofService from '../TermsofService/TermsofService';
import Favorites from '../Favorites/Favorites';
import AlbumPage from '../AlbumPage/AlbumPage';
import AboutUs from '../AboutUs/AboutUs';
import UserProfile from '../Form/UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';
import StylesPage from '../StylesPage/StylesPage';
import StyleAlbumsPage from '../StyleAlbumsPage/StyleAlbumsPage';

import { saveLoginSuccessful } from '../../actions/user';

// Fichier Styles
import './App.scss';
import Header from '../Header/Header';

function App() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const [showToast, setShowToast] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');
  const [styles, setStyles] = useState([]);

  // Au premier rendu du composant App, je souhaite récupérer la liste des styles
  useEffect(() => {
    api.get('/styles')
      .then((res) => {
        setStyles(res.data);
      })
      .catch((err) => {
        alert('Erreur !');
        console.log('Erreur, l\'API ne fonctionne plus. Rechargez plus tard.');
        console.err(err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(saveLoginSuccessful());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (logged) {
      setShowToast(true);
    }
  }, [logged]);

  return (
    <div className="App">
      <NavBar />
      <Header search={search} setSearch={setSearch} setAlbums={setAlbums} />
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              albums={albums}
              styles={styles}
              setSearch={setSearch}
              search={search}
            />
)}
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles/:idStyle" element={<StyleAlbumsPage />} />
        <Route path="/styles" element={<StylesPage styles={styles} />} />
        <Route path="/favoris" element={<Favorites albums={albums} />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/equipe-dev" element={<AboutUs />} />
        <Route path="/condition-generales-utilisation" element={<TermsofService />} />
        <Route path="/le-projet" />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/*" />
      </Routes>
      <Toast show={showToast} onClose={() => setShowToast(false)} style={{ position: 'fixed', left: '20px', bottom: '20px' }} delay={3000} autohide>
        <Toast.Body style={{ color: 'black' }}>
          Vous êtes bien connecté.
        </Toast.Body>
      </Toast>
      <Footer />
    </div>
  );
}

export default App;
