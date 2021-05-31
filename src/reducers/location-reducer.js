/*
  Location Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_LOCATION_IS_LOADING,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_IS_LOADING_V2,
  FETCH_LOCATION_SUCCESS_V2,
  SAVE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATION,
  SAVE_SELECTED_CITY,
  CLEAR_SELECTED_CITY,
  ACTIVATE_FILTER,
  DEACTIVATE_FILTER,
} from "../actions/location-actions";

const initialState = {
  isLoading: false,
  locations: null,
  locationsV2: null,
  filter: false,
  error: null,
  selectedCity: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_LOCATION_IS_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case FETCH_LOCATION_SUCCESS:
    //   return {
    //     ...state,
    //     locations: action.payload,
    //     isLoading: false,
    //   };
    case FETCH_LOCATION_IS_LOADING_V2:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_LOCATION_SUCCESS_V2:
      return {
        ...state,
        locations: action.payload,
        isLoading: false,
      };
    case SAVE_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.data,
      };
    case CLEAR_SELECTED_CITY:
      return {
        ...state,
        selectedCity: null,
      };
    case SAVE_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: action.data,
      };
    case CLEAR_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: null,
      };
    case ACTIVATE_FILTER:
      return {
        ...state,
        selectedLocation: { ...state.selectedLocation, filter: true },
        filter: true,
      };
    case DEACTIVATE_FILTER:
      return {
        ...state,
        selectedLocation: { ...state.selectedLocation, filter: false },
        filter: false,
      };
    default:
      return state;
  }
};

export default locationReducer;
