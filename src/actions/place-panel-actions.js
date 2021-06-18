/*
  Place data actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { endpoint } from "../app-constants";
import { fetchEndpoint } from "./common-actions";

export const FETCH_GOOGLE_DATA_IS_LOADING = "FETCH_GOOGLE_DATA_IS_LOADING";
export const FETCH_GOOGLE_DATA_SUCCESS = "FETCH_GOOGLE_DATA_SUCCESS";
export const FETCH_GOOGLE_DATA_ERROR = "FETCH_GOOGLE_DATA_ERROR";
export const FETCH_YELP_DATA_SUCCESS = "FETCH_YELP_DATA_SUCCESS";
export const FETCH_YELP_DATA_IS_LOADING = "FETCH_YELP_DATA_IS_LOADING";
export const FETCH_YELP_DATA_ERROR = "FETCH_YELP_DATA_ERROR";
export const FETCH_INSTAGRAM_DATA_SUCCESS = "FETCH_INSTAGRAM_DATA_SUCCESS";
export const FETCH_INSTAGRAM_DATA_IS_LOADING = "FETCH_INSTAGRAM_DATA_IS_LOADING";
export const FETCH_INSTAGRAM_DATA_ERROR = "FETCH_INSTAGRAM_DATA_ERROR";

export const fetchGooglePlaceData = (placeId) => {
  return fetchEndpoint(endpoint.GOOGLE_URL + placeId, fetchGoogleSuccess, fetchGoogleError, fetchGoogleIsLoading);
};

export const fetchYelpPlaceData = (yelpId) => {
  return fetchEndpoint(endpoint.YELP_URL + yelpId, fetchYelpSuccess, fetchYelpError, fetchYelpIsLoading);
};

export const fetchInstagramPlaceData = (instagramId) => {
  return fetchEndpoint(endpoint.INSTAGRAM_URL + instagramId, fetchInstagramSuccess, fetchInstagramError, fetchInstagramIsLoading);
};

const fetchGoogleIsLoading = () => {
  return {
    type: FETCH_GOOGLE_DATA_IS_LOADING,
  };
};

const fetchGoogleSuccess = (payload) => {
  return {
    type: FETCH_GOOGLE_DATA_SUCCESS,
    payload,
  };
};

const fetchGoogleError = (error) => {
  return {
    type: FETCH_GOOGLE_DATA_ERROR,
    error: error,
  };
};

const fetchYelpSuccess = (payload) => {
  return {
    type: FETCH_YELP_DATA_SUCCESS,
    payload,
  };
};

const fetchYelpIsLoading = () => {
  return {
    type: FETCH_YELP_DATA_IS_LOADING,
  };
};

const fetchYelpError = (error) => {
  return {
    type: FETCH_YELP_DATA_ERROR,
    error: error,
  };
};

const fetchInstagramSuccess = (payload) => {
  return {
    type: FETCH_INSTAGRAM_DATA_SUCCESS,
    payload,
  };
};

const fetchInstagramIsLoading = () => {
  return {
    type: FETCH_INSTAGRAM_DATA_IS_LOADING,
  };
};

const fetchInstagramError = (error) => {
  return {
    type: FETCH_INSTAGRAM_DATA_ERROR,
    error: error,
  };
};