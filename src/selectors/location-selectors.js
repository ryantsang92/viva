/*
  Location selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { selectVideos, selectVideosByHashtag } from "./video-selectors";

export const selectLocationData = (state) => {
  return state ? state.locationData : null;
};

export const selectLocations = (state, hashtag = null, city = null) => {
  const selectedVideos = selectVideos(state, hashtag, city);
  // let returnData = selectLocationData(state).locations;

  let combinedHashtags = [];
  let locationIds = [];
  if (selectedVideos) {
    selectedVideos.forEach((video) => combinedHashtags.push(video.location_id));
    locationIds = [].concat.apply([], combinedHashtags);
  }
  return state.locationData.locations
    ? state.locationData.locations.filter((location) =>
        locationIds.includes(location.id)
      )
    : null;
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

export const selectSelectedCity = (state) => {
  return state ? state.locationData.selectedCity : null;
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

export const selectLocationByVideo = (state, video) => {
  return state.locationData.locations
    ? state.locationData.locations.filter(
        (location) => location.id === video.location_id
      )[0]
    : null;
};
