/*
  Video selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectVideoData = (state) => {
  return state ? state.videoData : null;
};

export const selectVideos = (state, hashtag = null, city = null, location = null) => {
  console.log(location);
  let returnData = selectVideoData(state).videos;

  if (hashtag) {
    returnData = returnData.filter((video) =>
      video.hash_ids ? video.hash_ids.includes(hashtag.id) : null
    );
  }
  if (city) {
    returnData = returnData.filter((video) => video.metro === city || null);
  }
  if (location) {
    console.log(returnData);
    returnData = returnData.filter((video) => video.location_id === location.id || null);
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

export const selectVideosByHashtag = (state, hashtag) => {
  return state
    ? state.videoData.videos.filter((video) =>
        video.hash_ids ? video.hash_ids.includes(hashtag.id) : null
      )
    : null;
};
