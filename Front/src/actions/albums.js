export const SET_ALBUMS = 'SET_ALBUMS';
export const setAlbums = (data) => ({
  type: SET_ALBUMS,
  payload: {
    albums: data,
  },
});
