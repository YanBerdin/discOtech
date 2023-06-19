/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-alert */
// Dépendances
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Fichiers
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LegalNotices from '../Legal Notices/LegalNotices';
import TermsofService from '../Terms of Service/TermsofService';
import UserProfile from '../UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';
import { setAlbums } from '../../actions/albums';

// Fichier Styles
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.list);

  // Au premier rendu du composant App, je souhaite récupérer la liste des albums
  useEffect(() => {
    axios.get('http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api/albums')
      .then((res) => {
        console.log(`state albums depuis App ${albums}`);
        dispatch(setAlbums(res.data));
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
            <HomePage />
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
      <Footer />albums
    </div>
  );
}

export default App;
