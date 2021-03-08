/*
  Hashtag selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectHashtags = (state) => {
  return state ? state.hashtags : null;
};
export const selectHashtagsIsFetching = (state) => {
  return state ? state.isFetching : null;
};
export const selectHashtagsError = (state) => {
  return state ? state.error : null;
};
