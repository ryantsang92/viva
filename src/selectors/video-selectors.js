/*
  Video selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { shuffleArray } from "../common/common-functions";
import { selectLocations } from "./location-selectors";

export const selectVideoData = (state) => {
  return state?.videoData;
};

export const selectVideos = (
  state,
  category = null,
  shuffle = false
) => {
  let returnData = selectVideoData(state)?.videos;

  if (shuffle && !category) {
    shuffleArray(returnData);
  }

  if (category) {
    const locations = selectLocations(state, category);
    returnData = returnData?.filter((video) =>
      locations.some((location) => location.id === video.location_id)
    );
  }
  return returnData;
};

export const selectVideoIsLoading = (state) => {
  return selectVideoData(state)?.isLoading;
};

export const selectVideoError = (state) => {
  return selectVideoData(state)?.error;
};

export const selectSelectedVideo = (state) => {
  return selectVideoData(state)?.selectedVideo;
};
