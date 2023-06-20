import {
  SET_ALBUMS,
} from '../actions/albums';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        list: action.payload.albums,

      };
    default:
      return state;
  }
};

export default reducer;
