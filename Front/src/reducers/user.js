import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_LASTNAME,
  SET_FIRSTNAME,
  SET_AVATAR,
  SET_CLEAR_INPUT,
  // SET_CONNECTED_USER,
  // SET_LOGGED_OUT,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  lastname: '',
  firstname: '',
  avatar: '',
  // isLogged: false,
  // userName: '',
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
      }; case SET_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload.firstname,
      }; case SET_AVATAR:
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
      //     case SET_CONNECTED_USER:
    //       return {
    //         ...state,
    //         isLogged: action.payload.isLogged.logged,
    //         userName: action.payload.isLogged.pseudo,
    //       };
    //     case SET_LOGGED_OUT:
    //       return {
    //         ...state,
    //         isLogged: action.payload.loggedOut,
    //       };
    default:
      return state;
  }
};

export default reducer;
