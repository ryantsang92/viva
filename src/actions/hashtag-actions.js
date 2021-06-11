/*
  Hashtag actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { endpoint } from "../app-constants";
import { fetchEndpoint } from "./common-actions";

export const FETCH_HASHTAG_IS_LOADING = "FETCH_HASHTAG_IS_LOADING";
export const FETCH_HASHTAG_SUCCESS = "FETCH_HASHTAG_SUCCESS";
export const FETCH_HASHTAG_ERROR = "FETCH_HASHTAG_ERROR";
export const FETCH_SELECTED_HASHTAG = "FETCH_SELECTED_HASHTAG";
export const CLEAR_SELECTED_HASHTAG = "CLEAR_SELECTED_HASHTAG";

export const fetchHashtags = () => {
  return fetchEndpoint(
    endpoint.HASHTAG_URL,
    fetchSuccess,
    fetchError,
    fetchIsLoading
  );
};

const fetchIsLoading = () => {
  return {
    type: FETCH_HASHTAG_IS_LOADING,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_HASHTAG_SUCCESS,
    payload,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_HASHTAG_ERROR,
    error: error,
  };
};

export const fetchSelectedHashtag = (data) => {
  return {
    type: FETCH_SELECTED_HASHTAG,
    data,
  };
};

export const clearSelectedHashtag = () => {
  return {
    type: CLEAR_SELECTED_HASHTAG,
  };
};
