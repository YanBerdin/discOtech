// Dépendances
import { Route, Routes } from 'react-router-dom';

// Fichiers JSX
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LegalNotices from '../Legal Notices/LegalNotices';
import TermsofService from '../Terms of Service/TermsofService';

// Fichier Styles
import './App.scss';
import HomePage from '../HomePage/HomePage';

function App() {
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
        <Route path="/favoris" />
        <Route path="/a-propos" />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/condition-generales-utilisation" element={<TermsofService />} />
        <Route path="/equipe-dev" />
        <Route path="/le-projet" />
        <Route path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
