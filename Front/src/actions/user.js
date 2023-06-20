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

export const SET_LASTNAME = 'SET_LASTNAME';
export const setLastName = (newLastName) => ({
  type: SET_LASTNAME,
  payload: {
    lastname: newLastName,
  },
});

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

// export const SET_CONNECTED_USER = 'SET_CONNECTED_USER';
// export const setConnectedUser = (connectedUser) => ({
//   type: SET_CONNECTED_USER,
//   payload: {
//     isLogged: connectedUser,
//   },
// });

// export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
// export const setLoggedOut = (loggedOut) => ({
//   type: SET_LOGGED_OUT,
//   payload: {
//     loggedOut: !loggedOut,
//   },
// });
