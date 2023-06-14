import {
//   SET_CLEAR_INPUT,
//   SET_CONNECTED_USER,
  SET_EMAIL,
  //   SET_LOGGED_OUT,
  SET_PASSWORD,
} from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  changeField: '',
  userName: '',
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
        password: action.payload.newPassword,
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
    //     case SET_CLEAR_INPUT:
    //       return {
    //         ...state,
    //         email: action.payload.clearInput,
    //         password: action.payload.clearInput,
    //       };
    default:
      return state;
  }
};

export default reducer;
