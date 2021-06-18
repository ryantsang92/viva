/*
  Video selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { shuffleArray } from "../common/common-functions";

export const selectVideoData = (state) => {
  return state ? state.videoData : null;
};

export const selectVideos = (
  state,
  hashtag = null,
  city = null,
  shuffle = false
) => {
  let returnData = selectVideoData(state).videos;

  if (shuffle && !hashtag) {
    shuffleArray(returnData);
  }

  if (hashtag) {
    returnData = returnData.filter((video) =>
      video.hash_ids ? video.hash_ids.includes(hashtag.id) : null
    );
  }
  if (city) {
    returnData = returnData.filter((video) => video.metro === city.name.replace(/\s/g, "") || null);
  }

  return returnData;
};

export const selectVideoIsLoading = (state) => {
  return selectVideoData(state).isLoading;
};

export const selectVideoError = (state) => {
  return selectVideoData(state).error;
};

export const selectSelectedVideo = (state) => {
  return selectVideoData(state).selectedVideo;
};
