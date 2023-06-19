/* eslint-disable no-console */
/* eslint-disable no-alert */
// Dépendances
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Fichiers JSXimport { useState } from 'react';
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LegalNotices from '../Legal Notices/LegalNotices';
import TermsofService from '../Terms of Service/TermsofService';
import UserProfile from '../UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';

// Fichier Styles
import './App.scss';

function App() {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');

  // Au premier rendu du composant App, je souhaite récupérer la liste des albums
  const getAlbums = () => {
    axios.get(`http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/albums/search/?search=${search}`)
      .then((res) => {
        setAlbums(res.data);
        console.log(`valeur de search dans App ${search}`);
      })
      .catch((err) => {
        console.log('Erreur, l\'API ne fonctionne plus. Rechargez plus tard.');
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
        <Route path="/favoris" />
        <Route path="/a-propos" />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/condition-generales-utilisation" element={<TermsofService />} />
        <Route path="/equipe-dev" />
        <Route path="/le-projet" />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
