export const SAVE_LOGIN_SUCCESSFUL = 'SAVE_LOGIN_SUCCESSFUL';

export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = (newEmail) => ({
  type: SET_EMAIL,
  payload: {
    email: newEmail,
  },
});

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = (newPassword) => ({
  type: SET_PASSWORD,
  payload: {
    password: newPassword,
  },
});

export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const setFirstName = (newFirstName) => ({
  type: SET_FIRSTNAME,
  payload: {
    firstname: newFirstName,
  },
});
// Champ controllé avec useSelector => Maintenant avec useState
// export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
// export const updateFirstname = (newFirstName) => ({
//   type: UPDATE_FIRSTNAME,
//   payload: {
//     firstname: newFirstName,
//   },
// });
export const SET_LASTNAME = 'SET_LASTNAME';
export const setLastName = (newLastName) => ({
  type: SET_LASTNAME,
  payload: {
    lastname: newLastName,
  },
});
// Champ controllé avec useSelector => Maintenant avec useState
// export const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
// export const updateLastName = (newLastName) => ({
//   type: UPDATE_LASTNAME,
//   payload: {
//     lastname: newLastName,
//   },
// });
export const SET_AVATAR = 'SET_AVATAR';
export const setAvatar = (newAvatar) => ({
  type: SET_AVATAR,
  payload: {
    avatar: newAvatar,
  },
});

export const SET_CLEAR_INPUT = 'SET_CLEAR_INPUT';
export const setClearInput = (clearInput) => ({
  type: SET_CLEAR_INPUT,
  payload: {
    clearInput: clearInput,
  },
});

export const saveLoginSuccessful = (firstname, lastname, token) => ({
  type: SAVE_LOGIN_SUCCESSFUL,
  payload: {
    firstname: firstname,
    lastname: lastname,
    token: token,
  },
});

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = (id) => ({
  type: ADD_FAVORITE,
  payload: id,
});

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export const SET_FAVORITES = 'SET_FAVORITES';
export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites,
});
