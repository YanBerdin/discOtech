// Dépendances
import { Route, Routes } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from 'react';

// Fichiers JSX
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import LegalNotices from '../LegalNotices/LegalNotices';
import TermsofService from '../TermsofService/TermsofService';
import AlbumPage from '../AlbumPage/AlbumPage';
import UserProfile from '../UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';
import StylesPage from '../StylesPage/StylesPage';

// Fichier Styles
import './App.scss';

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

  const [styles, setStyles] = useState([]);
  // Au premier rendu du composant App, je souhaite récupérer la liste des albums
  useEffect(() => {
    axios.get('http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/styles')
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
            />
)}
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" element={<StylesPage styles={styles} />} />
        <Route path="/favoris" />
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
