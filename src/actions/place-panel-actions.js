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
export const FETCH_PLACE_VIDS_DATA_SUCCESS = "FETCH_PLACE_VIDS_DATA_SUCCESS";
export const FETCH_PLACE_VIDS_DATA_IS_LOADING =
  "FETCH_PLACE_VIDS_DATA_IS_LOADING";
export const FETCH_PLACE_VIDS_DATA_ERROR = "FETCH_PLACE_VIDS_DATA_ERROR";
export const STORE_IMAGES = "STORE_IMAGES";

export const fetchGooglePlaceData = (placeId) => {
  return fetchEndpoint(
    endpoint.GOOGLE_URL + placeId,
    fetchGoogleSuccess,
    fetchGoogleError,
    fetchGoogleIsLoading
  );
};

export const fetchYelpPlaceData = (yelpId) => {
  return fetchEndpoint(
    endpoint.YELP_URL + yelpId,
    fetchYelpSuccess,
    fetchYelpError,
    fetchYelpIsLoading
  );
};

export const fetchPlaceVidsData = (locationId) => {
  return fetchEndpoint(
    endpoint.LOC_VID_URL + locationId,
    fetchPlaceVidsSuccess,
    fetchPlaceVidsError,
    fetchPlaceVidsIsLoading
  );
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

const fetchPlaceVidsSuccess = (payload) => {
  return {
    type: FETCH_PLACE_VIDS_DATA_SUCCESS,
    payload,
  };
};

const fetchPlaceVidsIsLoading = () => {
  return {
    type: FETCH_PLACE_VIDS_DATA_IS_LOADING,
  };
};

const fetchPlaceVidsError = (error) => {
  return {
    type: FETCH_PLACE_VIDS_DATA_ERROR,
    error: error,
  };
};

export const storeImages = (payload) => {
  return {
    type: STORE_IMAGES,
    payload,
  };
};
