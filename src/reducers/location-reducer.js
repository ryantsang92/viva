/*
  Location Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_LOCATION_IS_LOADING,
  FETCH_LOCATION_SUCCESS,
  SAVE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATION,
  SAVE_SELECTED_CITY,
  CLEAR_SELECTED_CITY,
} from "../actions/location-actions";

const initialState = {
  isLoading: false,
  locations: [],
  error: null,
  selectedCity: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_LOCATION_SUCCESS:
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
    default:
      return state;
  }
};

export default locationReducer;
