/*
  Video actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { endpoint } from "../app-constants";
import { fetchEndpoint } from "./common-actions";

export const FETCH_VIDEO_IS_LOADING = "FETCH_VIDEO_IS_LOADING";
export const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
export const FETCH_VIDEO_IS_LOADING_V2 = "FETCH_VIDEO_IS_LOADING_V2";
export const FETCH_VIDEO_SUCCESS_V2 = "FETCH_VIDEO_SUCCESS_V2";
export const FETCH_VIDEO_ERROR = "FETCH_VIDEO_ERROR";
export const SAVE_SELECTED_VIDEO = "SAVE_SELECTED_VIDEO";
export const CLEAR_SELECTED_VIDEO = "CLEAR_SELECTED_VIDEO";

export const fetchVideosV2 = (latMin, latMax, lngMin, lngMax) => {
  return fetchEndpoint(
    endpoint.VIDEO_URL_V2,
    fetchSuccess,
    fetchError,
    fetchIsLoading,
    latMin + "," + latMax + "," + lngMin + "," + lngMax
  );
};

//MOBILE_VIDS_URL
export const fetchVideosMobile = (metro) => {
  return fetchEndpoint(
    endpoint.MOBILE_VIDS_URL,
    fetchSuccess,
    fetchError,
    fetchIsLoading,
    metro,
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
