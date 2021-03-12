/*
  Location actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_LOCATION_IS_LOADING = "FETCH_LOCATION_IS_LOADING";
export const FETCH_LOCATION_SUCCESS = "FETCH_LOCATION_SUCCESS";
export const FETCH_LOCATION_ERROR = "FETCH_LOCATION_ERROR";

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

export const fetchLocations = () => {
  return fetchEndpoint(endpoint.LOCATION_URL);
};

const fetchIsLoading = () => {
  return {
    type: FETCH_LOCATION_IS_LOADING,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_LOCATION_ERROR,
    error: error,
  };
};
