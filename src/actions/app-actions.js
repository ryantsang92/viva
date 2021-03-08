/*
  App actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import { endpoint } from "../app-constants";

export const FETCH_HASHTAGS_REQUEST = "FETCH_HASHTAGS_REQUEST";
export const FETCH_HASHTAGS_SUCCESS = "FETCH_HASHTAGS_SUCCESS";
export const FETCH_HASHTAGS_ERROR = "FETCH_HASHTAGS_ERROR";

// export const fetchEndpoint = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       this.setState({ appData: data });
//     })
//     .catch(console.log);
// };

const fetchEndpoint = (url) => {
  return fetch(url, { method: "GET" }).then((response) =>
    Promise.all([response, response.json()])
  );
}

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

export const fetchHashtagsSuccess = (hashtags) => {
  return {
    type: FETCH_HASHTAGS_SUCCESS,
    hashtags: hashtags,
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

// export const fetchHashtags = () => {
//   fetchEndpoint(endpoint.HASHTAG_URL);
// };
