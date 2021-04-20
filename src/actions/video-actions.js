/*
  Video actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_VIDEO_IS_LOADING = "FETCH_VIDEO_IS_LOADING";
export const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
export const FETCH_VIDEO_ERROR = "FETCH_VIDEO_ERROR";
export const SAVE_SELECTED_VIDEO = "SAVE_SELECTED_VIDEO";
export const CLEAR_SELECTED_VIDEO = "CLEAR_SELECTED_VIDEO";

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

export const fetchVideos = () => {
  return fetchEndpoint(endpoint.VIDEO_URL);
};

const fetchIsLoading = () => {
  return {
    type: FETCH_VIDEO_IS_LOADING,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_VIDEO_SUCCESS,
    payload,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_VIDEO_ERROR,
    error: error,
  };
};

export const saveSelectedVideo = (data) => {
  return {
    type: SAVE_SELECTED_VIDEO,
    data,
  };
};

export const clearSelectedVideo = () => {
  return {
    type: CLEAR_SELECTED_VIDEO,
  };
};
