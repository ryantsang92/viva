/*
  Location Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_LOCATION_IS_LOADING_V2,
  FETCH_LOCATION_SUCCESS_V2,
  SAVE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATION,
  SAVE_SELECTED_CITY,
  CLEAR_SELECTED_CITY,
  SAVE_MAP_BOUNDS,
  SET_REFRESH,
  CLEAR_REFRESH,
} from "../actions/location-actions";
import { newYork } from "../app-constants";

const initialState = {
  isLoading: false,
  locations: null,
  mapBounds: null,
  filter: false,
  refresh: true,
  error: null,
  selectedCity: newYork.name,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SAVE_MAP_BOUNDS:
      return {
        ...state,
        mapBounds: action.data,
      };
    case SET_REFRESH:
      return {
        ...state,
        refresh: true,
      };
    case CLEAR_REFRESH:
      return {
        ...state,
        refresh: false,
      };
    default:
      return state;
  }
};

export default locationReducer;
