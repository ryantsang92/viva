/*
  Location Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { FETCH_LOCATION_IS_LOADING, FETCH_LOCATION_SUCCESS } from "../actions/location-actions";

const initialState = {
  isLoading: false,
  locations: [],
  error: null,
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
      };
    default:
      return state;
  }
};

export default locationReducer;
