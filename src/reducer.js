/*
  Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_HASHTAGS_REQUEST,
  FETCH_HASHTAGS_SUCCESS,
} from "./actions/app-actions";

const initialState = {
  pending: false,
  hashtags: [],
  error: null,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_HASHTAGS_REQUEST:
      return state;
    case FETCH_HASHTAGS_SUCCESS:
      return {
        ...state,
        hashtags: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
