/*
  Video actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_VIDEO_IS_LOADING = "FETCH_VIDEO_IS_LOADING";
export const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
export const FETCH_VIDEO_ERROR = "FETCH_VIDEO_ERROR";

const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const fetchEndpoint = (url) => {
  const fetchFunction = () => {
    return fetch(url, requestOptions).then((response) =>
      Promise.all([response, response.json()])
    );
  };

  return (dispatch) => {
    dispatch(fetchIsLoading());
    return fetchFunction().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchSuccess(json));
      } else {
        dispatch(fetchError());
      }
    });
  };
};

export const fetchHashtags = () => {
  return fetchEndpoint(endpoint.HASHTAG_URL);
};

export const fetchVideos = () => {
  return fetchEndpoint(endpoint.VIDEO_URL);
};

export const fetchLocations = () => {
  return fetchEndpoint(endpoint.LOCATION_URL);
};

export const fetchIsLoading = () => {
  return {
    type: FETCH_VIDEO_IS_LOADING,
  };
};

export const fetchSuccess = (payload) => {
  return {
    type: FETCH_VIDEO_SUCCESS,
    payload,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_VIDEO_ERROR,
    error: error,
  };
};
