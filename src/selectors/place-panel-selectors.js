/*
  Place data selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectPlacePanelData = (state) => {
  return state?.placePanelData;
};

export const selectPlaceData = (state) => {
  return selectPlacePanelData(state)?.placeData;
};

export const selectPlaceVideosData = (state) => {
  return selectPlaceData(state)?.videos;
};
