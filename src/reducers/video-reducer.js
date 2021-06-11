/*
  Video Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_VIDEO_IS_LOADING_V2,
  FETCH_VIDEO_SUCCESS_V2,
  SAVE_SELECTED_VIDEO,
  CLEAR_SELECTED_VIDEO,
} from "../actions/video-actions";

const initialState = {
  pending: false,
  videos: null,
  error: null,
  selectedVideo: null,
};

const hashtagReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_IS_LOADING_V2:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_VIDEO_SUCCESS_V2:
      return {
        ...state,
        videos: action.payload,
        isLoading: false,
      };
    case SAVE_SELECTED_VIDEO:
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
