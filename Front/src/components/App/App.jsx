// Dépendances
import { Route, Routes } from 'react-router-dom';

// Fichiers JSX
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import HomePage from '../HomePage/HomePage';

import NavBar from '../NavBar/NavBar';

// Fichier Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
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

      {/* <Footer /> */}
    </div>
  );
}

export default App;
