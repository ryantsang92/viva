/*
  App actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_HASHTAGS_REQUEST = "FETCH_HASHTAGS_REQUEST";
export const FETCH_HASHTAGS_SUCCESS = "FETCH_HASHTAGS_SUCCESS";
export const FETCH_HASHTAGS_ERROR = "FETCH_HASHTAGS_ERROR";

const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const fetchEndpoint = (url) => {
  return fetch(url, requestOptions).then((response) =>
    Promise.all([response, response.json()])
  );
};

export const fetchHashtags = () => {
  return (dispatch) => {
    dispatch(fetchHashtagsRequest());
    return fetchEndpoint(endpoint.HASHTAG_URL).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchHashtagsSuccess(json));
      } else {
        dispatch(fetchHashtagsError());
      }
    });
  };
};

export const fetchHashtagsRequest = () => {
  return {
    type: FETCH_HASHTAGS_REQUEST,
  };
};

export const fetchHashtagsSuccess = (payload) => {
  return {
    type: FETCH_HASHTAGS_SUCCESS,
    payload,
  };
};

export const fetchHashtagsError = (error) => {
  return {
    type: FETCH_HASHTAGS_ERROR,
    error: error,
  };
};

export const fetchLocations = () => {
  fetchEndpoint(endpoint.LOCATION_URL);
};
