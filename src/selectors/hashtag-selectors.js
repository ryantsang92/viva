/*
  Hashtag selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectHashtagData = (state) => {
  return state ? state.hashtagData : null;
};

export const selectHashtagIsFetching = (state) => {
  return selectHashtagData(state).isFetching;
};

export const selectHashtagError = (state) => {
  return selectHashtagData(state).error;
};
