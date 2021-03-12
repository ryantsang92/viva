/*
  Video Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { FETCH_IS_LOADING, FETCH_SUCCESS } from "../actions/app-actions";

const initialState = {
  pending: false,
  videos: [],
  error: null,
};

const hashtagReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        videos: action.payload,
      };
    default:
      return state;
  }
};

export default hashtagReducer;
