/*
  Location selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectLocationData = (state) => {
  return state ? state.locationData : null;
};

export const selectLocationIsFetching = (state) => {
  return selectLocationData(state).isFetching;
};

export const selectLocationError = (state) => {
  return selectLocationData(state).error;
};
