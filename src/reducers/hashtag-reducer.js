/*
  Hashtag Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_HASHTAG_IS_LOADING,
  FETCH_HASHTAG_SUCCESS,
  FETCH_SELECTED_HASHTAG,
} from "../actions/hashtag-actions";

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
    case FETCH_SELECTED_HASHTAG:
      return {
        ...state,
        selectedHashtag: action.data,
      };
    default:
      return state;
  }
};

export default hashtagReducer;
