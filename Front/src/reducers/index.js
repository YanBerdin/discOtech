// ici le "chef des reducers", celui qui affecte chaque tiroir à un reducer
// (qui donne les noms aux tiroirs)
import { combineReducers } from 'redux';

// on importe les reducers
import albumsReducer from './albums';
import userReducer from './user';

// lien entre les tiroirs et les reducers
const rootReducer = combineReducers({
  // nom du tiroir : nom du reducer qui s'en occupe
  albums: albumsReducer,
  user: userReducer,
});

export default rootReducer;
