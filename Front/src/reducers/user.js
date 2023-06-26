import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_LASTNAME,
  SET_FIRSTNAME,
  SET_AVATAR,
  SET_CLEAR_INPUT,
  SAVE_LOGIN_SUCCESSFUL,
  SET_NEW_FIRSTNAME_INPUT,
  // Change UserProfile
  // CHANGE_LASTNAME,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
} from '../actions/user';

export const initialState = {
  email: null,
  password: null,
  lastname: null,
  firstname: null,
  avatar: '',
  logged: false,
  token: null,
  // userName: '',
  // newFirstname: '',
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload.lastname,
      };
    case SET_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload.firstname,
      };
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload.avatar,
      };
    case SET_CLEAR_INPUT:
      return {
        ...state,
        email: action.payload.clearInput,
        password: action.payload.clearInput,
      };
    case SAVE_LOGIN_SUCCESSFUL:
      return {
        ...state,
        logged: true,
        nickname: action.payload.nickname,
        token: action.payload.token,

        // pour la sécurité : on efface les identifiants dès qu'on a plus besoin
        email: '',
        password: '',
      };
      // case CHANGE_FIRSTNAME:
      //   return {
      //     ...state,
      //     firstname: state.newFirstname,
      //     newFirstname: '',
      //   };

    case SET_NEW_FIRSTNAME_INPUT:
      return {
        ...state,
        firstname: action.payload.firstname,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.album.id !== action.payload),
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
// case SET_NEW_LASTNAME_INPUT:
//   return {
//     ...state,
//     newLastname: action.payload.value,
//   };
// default:
//   return state;
// }
};

export default reducer;
