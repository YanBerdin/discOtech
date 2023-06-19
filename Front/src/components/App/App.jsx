/* eslint-disable no-console */
/* eslint-disable no-alert */
// Dépendances
import { Route, Routes } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from 'react';

// Fichiers JSX
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LegalNotices from '../Legal Notices/LegalNotices';
import TermsofService from '../Terms of Service/TermsofService';
import Favorites from '../Favorites/Favorites';
import AlbumPage from '../AlbumPage/AlbumPage';
import UserProfile from '../UserProfile/UserProfile';

// Fichier Styles
import './App.scss';
import HomePage from '../HomePage/HomePage';

function App() {
  const [albums, setAlbums] = useState([]);

  // Au premier rendu du composant App, je souhaite récupérer la liste des albums
  useEffect(() => {
    axios.get('http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/albums')
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        alert('Erreur !');
        console.log('Erreur, l\'API ne fonctionne plus. Rechargez plus tard.');
        console.err(err);
      });
  }, [albums]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage albums={albums} />}
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" />
        <Route path="/favoris" element={<Favorites albums={albums} />} />
        <Route path="/a-propos" />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/condition-generales-utilisation" element={<TermsofService />} />
        <Route path="/equipe-dev" />
        <Route path="/le-projet" />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
