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

export const selectLocationsByHashtag = (state, hashtag) => {
  const selectedVideos = selectVideosByHashtag(state, hashtag);
  let combinedHashtags = [];
  let locationIds = [];
  if (selectedVideos) {
    selectedVideos.forEach((video) => combinedHashtags.push(video.location_id));
    locationIds = [].concat.apply([], combinedHashtags);
  }
  console.log(
    state.locationData.locations.filter((location) =>
      locationIds.includes(location.id)
    )
  );
  return state
    ? state.locationData.locations.filter((location) =>
        locationIds.includes(location.id)
      )
    : null;
};
