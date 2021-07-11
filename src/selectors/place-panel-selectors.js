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
  return selectPlacePanelData(state)?.videos;
};

export const selectPlaceImages = (state) => {
  return selectPlacePanelData(state)?.images;
};

export const selectPlaceImagePanelOpen = (state) => {
  return selectPlacePanelData(state)?.imagePanelOpen;
};

export const selectPlaceVideoPanelOpen = (state) => {
  return selectPlacePanelData(state)?.videoPanelOpen;
};