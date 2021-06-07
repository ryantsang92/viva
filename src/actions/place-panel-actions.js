/*
  Place data actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_PLACE_DATA_IS_LOADING = "FETCH_PLACE_DATA_IS_LOADING";
export const FETCH_PLACE_DATA_SUCCESS = "FETCH_PLACE_DATA_SUCCESS";
export const FETCH_PLACE_DATA_ERROR = "FETCH_PLACE_DATA_ERROR";

const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const fetchEndpoint = (url, fetchSuccess, fetchError) => {
  console.log(url);
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

export const fetchPlaceData = (placeId) => {
  return fetchEndpoint(endpoint.GOOGLE_URL + placeId, fetchSuccess, fetchError);
};

const fetchIsLoading = () => {
  return {
    type: FETCH_PLACE_DATA_IS_LOADING,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_PLACE_DATA_SUCCESS,
    payload,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_PLACE_DATA_ERROR,
    error: error,
  };
};
