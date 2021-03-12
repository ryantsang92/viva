/*
  Hashtag Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { FETCH_HASHTAG_IS_LOADING, FETCH_HASHTAG_SUCCESS } from "../actions/hashtag-actions";

const initialState = {
  isLoading: false,
  hashtags: [],
  error: null,
};

const hashtagReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HASHTAG_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_HASHTAG_SUCCESS:
      return {
        ...state,
        hashtags: action.payload,
      };
    default:
      return state;
  }
};

export default hashtagReducer;
