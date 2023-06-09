// Dépendances
import { Route, Routes } from 'react-router-dom';

// Fichiers JSX
import Login from '../Login/Login';
import SignUpForm from '../SignUpForm/SignUpForm';

// Fichier Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Je suis rendu quand on est sur /, sinon non</div>} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
