/*
  Metro actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { endpoint } from "../app-constants";
import { fetchEndpoint } from "./common-actions";

export const FETCH_METRO_IS_LOADING = "FETCH_METRO_IS_LOADING";
export const FETCH_METRO_SUCCESS = "FETCH_METRO_SUCCESS";
export const FETCH_METRO_ERROR = "FETCH_METRO_ERROR";
export const SAVE_SELECTED_METRO = "SAVE_SELECTED_METRO";
export const CLEAR_SELECTED_METRO = "CLEAR_SELECTED_METRO";

export const fetchMetros = () => {
  return fetchEndpoint(
    endpoint.METROS_URL,
    fetchSuccess,
    fetchError,
    fetchIsLoading
  );
};

const fetchIsLoading = () => {
  return {
    type: FETCH_METRO_IS_LOADING,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_METRO_SUCCESS,
    payload,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_METRO_ERROR,
    error: error,
  };
};

export const saveSelectedMetro = (data) => {
  return {
    type: SAVE_SELECTED_METRO,
    data,
  };
};

export const clearSelectedMetro = () => {
  return {
    type: CLEAR_SELECTED_METRO,
  };
};
