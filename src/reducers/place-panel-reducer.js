/*
  Place Panel Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_GOOGLE_DATA_IS_LOADING,
  FETCH_GOOGLE_DATA_SUCCESS,
  FETCH_GOOGLE_DATA_ERROR,
  FETCH_YELP_DATA_IS_LOADING,
  FETCH_YELP_DATA_SUCCESS,
  FETCH_YELP_DATA_ERROR,
  FETCH_PLACE_VIDS_DATA_IS_LOADING,
  FETCH_PLACE_VIDS_DATA_SUCCESS,
  FETCH_PLACE_VIDS_DATA_ERROR,
  STORE_IMAGES,
  OPEN_PLACE_IMAGE_PANEL,
  CLOSE_PLACE_IMAGE_PANEL,
  OPEN_PLACE_VIDEO_PANEL,
  CLOSE_PLACE_VIDEO_PANEL,
} from "../actions/place-panel-actions";

const initialState = {
  isLoading: false,
  placeData: {},
  imagePanelOpen: false,
  videoPanelOpen: false,
  error: null,
};

const placePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_DATA_IS_LOADING:
    case FETCH_YELP_DATA_IS_LOADING:
    case FETCH_PLACE_VIDS_DATA_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_GOOGLE_DATA_SUCCESS:
      return {
        ...state,
        placeData: action.payload.result,
        isLoading: false,
      };
    case FETCH_GOOGLE_DATA_ERROR:
      return {
        ...state,
        error: "Error fetching place data",
        isLoading: false,
      };
    case FETCH_YELP_DATA_SUCCESS:
      return {
        ...state,
        placeData: {
          ...state.placeData,
          yelp: action.payload,
        },
        isLoading: false,
      };
    case FETCH_YELP_DATA_ERROR:
      return {
        ...state,
        error: "Error fetching yelp data",
        isLoading: false,
      };
    case FETCH_PLACE_VIDS_DATA_SUCCESS:
      return {
        ...state,
        placeData: {
          ...state.placeData,
          videos: action.payload,
        },
        isLoading: false,
      };
    case FETCH_PLACE_VIDS_DATA_ERROR:
      return {
        ...state,
        error: "Error fetching place videos data",
        isLoading: false,
      };
    case STORE_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case OPEN_PLACE_IMAGE_PANEL: {
      return {
        ...state,
        imagePanelOpen: true,
      };
    }
    case CLOSE_PLACE_IMAGE_PANEL: {
      return {
        ...state,
        imagePanelOpen: false,
      };
    }
    case OPEN_PLACE_VIDEO_PANEL: {
      return {
        ...state,
        videoPanelOpen: true,
      };
    }
    case CLOSE_PLACE_VIDEO_PANEL: {
      return {
        ...state,
        videoPanelOpen: false,
      };
    }
    default:
      return state;
  }
};

export default placePanelReducer;
