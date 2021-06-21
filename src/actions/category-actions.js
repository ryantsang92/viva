/*
  Category actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { endpoint } from "../app-constants";
import { fetchEndpoint } from "./common-actions";

export const FETCH_CATEGORY_IS_LOADING = "FETCH_CATEGORY_IS_LOADING";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR";
export const FETCH_SELECTED_CATEGORY = "FETCH_SELECTED_CATEGORY";
export const CLEAR_SELECTED_CATEGORY = "CLEAR_SELECTED_CATEGORY";

export const fetchCategories = () => {
  return fetchEndpoint(
    endpoint.CATEGORY_URL,
    fetchSuccess,
    fetchError,
    fetchIsLoading
  );
};

const fetchIsLoading = () => {
  return {
    type: FETCH_CATEGORY_IS_LOADING,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_CATEGORY_ERROR,
    error: error,
  };
};

export const fetchSelectedCategory = (data) => {
  return {
    type: FETCH_SELECTED_CATEGORY,
    data,
  };
};

export const clearSelectedCategory = () => {
  return {
    type: CLEAR_SELECTED_CATEGORY,
  };
};
