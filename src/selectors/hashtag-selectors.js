/*
  Hashtag selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectHashtagData = (state) => {
  if (state.hashtagData !== undefined) {
    return state.hashtagData;
  } else {
    return null;
  }
  // return state ? state.hashtagData : null;
};

export const selectHashtagsIsFetching = (state) => {
  return selectHashtagData(state).isFetching;
};

export const selectHashtagsError = (state) => {
  return selectHashtagData(state).error;
};
