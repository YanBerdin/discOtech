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

export const saveLoginSuccessful = (firstname, token) => ({
  type: SAVE_LOGIN_SUCCESSFUL,
  payload: {
    firstname: firstname,
    token: token,
  },
});

export const CHANGE_FIRSTNAME = 'CHANGE_FIRSTNAME';
export const changeFirstname = (firstnameInputValue) => ({
  type: CHANGE_FIRSTNAME,
  payload: {
    firstname: firstnameInputValue,
  },
});
