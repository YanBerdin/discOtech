// Dépendances
import { Route, Routes } from 'react-router-dom';

// Fichiers JSX
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// Fichier Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<div>Je suis rendu quand on est sur /, sinon non</div>} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/styles" />
        <Route path="/favoris" />
        <Route path="/a-propos" />
        <Route path="/mentions-legales" />
        <Route path="/condition-generales-utilisation" />
        <Route path="/equipe-dev" />
        <Route path="/le-projet" />
        <Route path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
