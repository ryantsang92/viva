/*
  Hashtag actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_HASHTAG_IS_LOADING = "FETCH_HASHTAG_IS_LOADING";
export const FETCH_HASHTAG_SUCCESS = "FETCH_HASHTAG_SUCCESS";
export const FETCH_HASHTAG_ERROR = "FETCH_HASHTAG_ERROR";

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

export const fetchHashtags = () => {
  return fetchEndpoint(endpoint.HASHTAG_URL);
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
