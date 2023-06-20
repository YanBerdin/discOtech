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
import UserProfile from '../Form/UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';

// Fichier Styles
import './App.scss';

function App() {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');

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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              albums={albums}
              setSearch={setSearch}
              getAlbums={getAlbums}
              search={search}
            />
          )}
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" />
        <Route path="/favoris" element={<Favorites albums={albums} />} />
        <Route path="/a-propos" />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route
          path="/condition-generales-utilisation"
          element={<TermsofService />}
        />
        <Route path="/equipe-dev" />
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
