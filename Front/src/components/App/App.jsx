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

// Fichier Styles
import './App.scss';
import HomePage from '../HomePage/HomePage';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

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
          element={<HomePage />}
        />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" />
        <Route path="/favoris" element={<FavoriteButton />} />
        <Route path="/a-propos" />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/condition-generales-utilisation" element={<TermsofService />} />
        <Route path="/equipe-dev" />
        <Route path="/le-projet" />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
