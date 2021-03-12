/*
  Video selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectVideoData = (state) => {
  return state ? state.videoData : null;
};

export const selectVideosIsFetching = (state) => {
  return state ? state.isFetching : null;
};

export const selectVideosError = (state) => {
  return state ? state.error : null;
};
