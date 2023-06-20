/* eslint-disable no-console */
/* eslint-disable no-alert */
// Dépendances
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

// Fichier Styles
import './App.scss';

function App() {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');
  const [styles, setStyles] = useState([]);

  // Au premier rendu du composant App, je souhaite récupérer la liste des albums
  const getAlbums = () => {
    api
      .post('/albums/search', { search: search })
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
        console.error(err);
      });
  };
  useEffect(getAlbums, [search]);

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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              albums={albums}
              styles={styles}
              setSearch={setSearch}
              getAlbums={getAlbums}
              search={search}
            />
)}
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" element={<StylesPage styles={styles} />} />
        <Route path="/favoris" />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" />
        <Route path="/favoris" element={<Favorites albums={albums} />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/equipe-dev" element={<AboutUs />} />
        <Route path="/condition-generales-utilisation" element={<TermsofService />} />
        <Route path="/le-projet" />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
