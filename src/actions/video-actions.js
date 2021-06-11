/*
  Video actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_VIDEO_IS_LOADING = "FETCH_VIDEO_IS_LOADING";
export const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
export const FETCH_VIDEO_IS_LOADING_V2 = "FETCH_VIDEO_IS_LOADING_V2";
export const FETCH_VIDEO_SUCCESS_V2 = "FETCH_VIDEO_SUCCESS_V2";
export const FETCH_VIDEO_ERROR = "FETCH_VIDEO_ERROR";
export const SAVE_SELECTED_VIDEO = "SAVE_SELECTED_VIDEO";
export const CLEAR_SELECTED_VIDEO = "CLEAR_SELECTED_VIDEO";

const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const fetchEndpoint = (url, params = "") => {
  const fetchFunction = () => {
    return fetch(url + params, requestOptions).then((response) =>
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

export const fetchVideosV2 = (latMin, latMax, lngMin, lngMax) => {
  return fetchEndpoint(
    endpoint.VIDEO_URL_V2,
    "/" + latMin + "," + latMax + "," + lngMin + "," + lngMax
  );
};

const fetchIsLoading = () => {
  return {
    type: FETCH_VIDEO_IS_LOADING_V2,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_VIDEO_SUCCESS_V2,
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
