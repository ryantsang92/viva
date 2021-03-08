/*
  Hashtag selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const getHashtags = (state) => {
  return state ? state.hashtags : null;
};
export const getHashtagsPending = (state) => state.pending;
export const getHashtagsError = (state) => state.error;
