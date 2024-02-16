export const SAVE_LOGIN_SUCCESSFUL = 'SAVE_LOGIN_SUCCESSFUL';
/**
 * Enregistre le succès de la connexion.
 *
 * @param {string} firstname - Le prénom de l'utilisateur connecté.
 * @param {string} token - Le jeton d'authentification de l'utilisateur connecté.
 * @returns {Object} - L'action de sauvegarde du succès de la connexion.
 */
export const saveLoginSuccessful = (firstname, token) => ({
  type: SAVE_LOGIN_SUCCESSFUL,
  payload: {
    firstname: firstname,
    token: token,
  },
});

export const SET_EMAIL = 'SET_EMAIL';
/**
 * Sets the email address for the user.
 *
 * @param {string} newEmail - The new email address.
 * @returns {Object} - The action object with the type and payload.
 */
export const setEmail = (newEmail) => ({
  type: SET_EMAIL,
  payload: {
    email: newEmail,
  },
});

export const SET_PASSWORD = 'SET_PASSWORD';
/**
 * Sets the password for the user.
 *
 * @param {string} newPassword - The new password to set.
 * @returns {Object} - The action object with the type and payload.
 */
export const setPassword = (newPassword) => ({
  type: SET_PASSWORD,
  payload: {
    password: newPassword,
  },
});

export const SET_FIRSTNAME = 'SET_FIRSTNAME';
/**
 * Sets the first name of the user.
 *
 * @param {string} newFirstName - The new first name.
 * @returns {Object} - The action object with the type and payload.
 */
export const setFirstName = (newFirstName) => ({
  type: SET_FIRSTNAME,
  payload: {
    firstname: newFirstName,
  },
});

export const SET_LASTNAME = 'SET_LASTNAME';
/**
 * Sets the last name of the user.
 *
 * @param {string} newLastName - The new last name.
 * @returns {object} - The action object with the type and payload.
 */
export const setLastName = (newLastName) => ({
  type: SET_LASTNAME,
  payload: {
    lastname: newLastName,
  },
});

export const SET_AVATAR = 'SET_AVATAR';
/**
 * Sets the avatar for the user.
 *
 * @param {string} newAvatar - The new avatar URL.
 * @returns {Object} - The action object with the type and payload.
 */
export const setAvatar = (newAvatar) => ({
  type: SET_AVATAR,
  payload: {
    avatar: newAvatar,
  },
});

export const SET_CLEAR_INPUT = 'SET_CLEAR_INPUT';
/**
 * Sets the clearInput value in the Redux store.
 *
 * @param {boolean} clearInput - The value to set for clearInput.
 * @returns {object} - The action object with type and payload.
 */
export const setClearInput = (clearInput) => ({
  type: SET_CLEAR_INPUT,
  payload: {
    clearInput: clearInput,
  },
});

export const ADD_FAVORITE = 'ADD_FAVORITE';
/**
 * Ajoute un favori.
 *
 * @param {number} id - L'identifiant du favori à ajouter.
 * @returns {Object} - L'action d'ajout de favori.
 */
export const addFavorite = (id) => ({
  type: ADD_FAVORITE,
  payload: id,
});

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

/**
 * Removes a favorite item.
 *
 * @param {number} id - The ID of the item to be removed.
 * @returns {object} - The action object with the type and payload.
 */
export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export const SET_FAVORITES = 'SET_FAVORITES';
/**
 * Sets the user's favorites.
 *
 * @param {Array} favorites - The favorites to be set.
 * @returns {Object} - The action object with type and payload.
 */
export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites,
});
