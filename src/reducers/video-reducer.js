/*
  Video Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_VIDEO_IS_LOADING,
  FETCH_VIDEO_SUCCESS,
  FETCH_SELECTED_VIDEO_SUCCESS,
  CLEAR_SELECTED_VIDEO,
} from "../actions/video-actions";

const initialState = {
  pending: false,
  videos: [],
  error: null,
  selectedVideo: null,
};

const hashtagReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload,
      };
    case FETCH_SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        selectedVideo: action.data,
      };
    case CLEAR_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: null,
      };
    default:
      return state;
  }
};

export default hashtagReducer;
