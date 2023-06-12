// Dépendances
import { Route, Routes } from 'react-router-dom';

// Fichiers JSX
import Login from '../Form/Login/Login';
import SignUp from '../Form/SignUp/SignUp';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

// Fichier Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<div>Je suis rendu quand on est sur /, sinon non</div>} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
