/*
  Location actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_LOCATION_IS_LOADING = "FETCH_LOCATION_IS_LOADING";
export const FETCH_LOCATION_SUCCESS = "FETCH_LOCATION_SUCCESS";
export const FETCH_LOCATION_ERROR = "FETCH_LOCATION_ERROR";
export const SAVE_SELECTED_LOCATION = "SAVE_SELECTED_LOCATION";
export const CLEAR_SELECTED_LOCATION = "CLEAR_SELECTED_LOCATION";
export const SAVE_SELECTED_CITY = "SAVE_SELECTED_CITY";
export const CLEAR_SELECTED_CITY = "CLEAR_SELECTED_CITY";

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

export const saveSelectedLocation = (data) => {
  return {
    type: SAVE_SELECTED_LOCATION,
    data,
  };
};

export const clearSelectedLocation = () => {
  return {
    type: CLEAR_SELECTED_LOCATION,
  };
}

export const saveSelectedCity = (data) => {
  return {
    type: SAVE_SELECTED_CITY,
    data,
  };
};

export const clearSelectedCity = () => {
  return {
    type: CLEAR_SELECTED_CITY,
  };
}