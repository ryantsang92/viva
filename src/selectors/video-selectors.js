/*
  Video selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectVideos = (state) => {
  return state ? state.Videos : null;
};

export const selectVideosIsFetching = (state) => {
  return state ? state.isFetching : null;
};

export const selectVideosError = (state) => {
  return state ? state.error : null;
};
