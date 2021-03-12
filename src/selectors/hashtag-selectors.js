/*
  Hashtag selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectHashtagData = (state) => {
  return state ? state.hashtagData : null;
};

export const selectHashtagsIsFetching = (state) => {
  return selectHashtagData(state).isFetching;
};

export const selectHashtagsError = (state) => {
  return selectHashtagData(state).error;
};
