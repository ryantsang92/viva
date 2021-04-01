/*
  Location selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { selectVideosByHashtag } from "./video-selectors";

export const selectLocationData = (state) => {
  return state ? state.locationData : null;
};

export const selectLocationIsFetching = (state) => {
  return selectLocationData(state).isFetching;
};

export const selectLocationError = (state) => {
  return selectLocationData(state).error;
};

export const selectLocationById = (state, id) => {
  const locationData = selectLocationData(state);
  return locationData
    ? locationData.locations.find((location) => location.id === id)
    : null;
};

export const selectSelectedLocation = (state) => {
  const locationData = selectLocationData(state);
  return locationData ? locationData.selectedLocation : null;
};

export const selectLocationsByHashtag = (state, hashtag) => {
  const selectedVideos = selectVideosByHashtag(state, hashtag);
  let combinedHashtags = [];
  let locationIds = [];
  if (selectedVideos) {
    selectedVideos.forEach((video) => combinedHashtags.push(video.location_id));
    locationIds = [].concat.apply([], combinedHashtags);
  }
  return state
    ? state.locationData.locations.filter((location) =>
        locationIds.includes(location.id)
      )
    : null;
};
