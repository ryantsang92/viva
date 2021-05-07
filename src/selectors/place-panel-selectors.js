/*
  Place data selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectPlacePanelData = (state) => {
  return state ? state.placePanelData : null;
};

export const selectPlaceData = (state) => {
  return selectPlacePanelData(state).placeData;
};
