/*
  Place data actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { endpoint } from "../app-constants";
import { fetchEndpoint } from "./common-actions";

export const FETCH_PLACE_DATA_IS_LOADING = "FETCH_PLACE_DATA_IS_LOADING";
export const FETCH_PLACE_DATA_SUCCESS = "FETCH_PLACE_DATA_SUCCESS";
export const FETCH_PLACE_DATA_ERROR = "FETCH_PLACE_DATA_ERROR";
export const FETCH_YELP_DATA_SUCCESS = "FETCH_YELP_DATA_SUCCESS";
export const FETCH_YELP_DATA_IS_LOADING = "FETCH_YELP_DATA_IS_LOADING";
export const FETCH_YELP_DATA_ERROR = "FETCH_YELP_DATA_ERROR";
export const FETCH_INSTAGRAM_DATA_SUCCESS = "FETCH_INSTAGRAM_DATA_SUCCESS";
export const FETCH_INSTAGRAM_DATA_IS_LOADING = "FETCH_INSTAGRAM_DATA_IS_LOADING";
export const FETCH_INSTAGRAM_DATA_ERROR = "FETCH_INSTAGRAM_DATA_ERROR";

// const requestOptions = {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// };

// const fetchEndpoint = (url, fetchSuccess, fetchError, fetchIsLoading) => {
//   // console.log(url);
//   const fetchFunction = () => {
//     return fetch(url, requestOptions).then((response) =>
//       Promise.all([response, response.json()])
//     );
//   };

//   return (dispatch) => {
//     dispatch(fetchIsLoading());
//     return fetchFunction().then(([response, json]) => {
//       if (response.status === 200) {
//         dispatch(fetchSuccess(json));
//       } else {
//         dispatch(fetchError());
//       }
//     });
//   };
// };

export const fetchGooglePlaceData = (placeId) => {
  return fetchEndpoint(endpoint.GOOGLE_URL + placeId, fetchSuccess, fetchError, fetchIsLoading);
};

export const fetchYelpPlaceData = (yelpId) => {
  return fetchEndpoint(endpoint.YELP_URL + yelpId, fetchYelpSuccess, fetchYelpError, fetchYelpIsLoading);
};

export const fetchInstagramPlaceData = (instagramId) => {
  return fetchEndpoint(endpoint.INSTAGRAM_URL + instagramId, fetchInstagramSuccess, fetchInstagramError, fetchInstagramIsLoading);
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