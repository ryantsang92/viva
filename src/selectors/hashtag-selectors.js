/*
  Hashtag selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectHashtagData = (state) => {
  return state?.hashtagData;
};

export const selectHashtagIsFetching = (state) => {
  return selectHashtagData(state)?.isFetching;
};

export const selectHashtagError = (state) => {
  return selectHashtagData(state)?.error;
};

export const selectSelectedHashtag = (state) => {
  return selectHashtagData(state)?.selectedHashtag;
};
