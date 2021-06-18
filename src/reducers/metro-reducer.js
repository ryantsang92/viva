/*
  Metro Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_METRO_IS_LOADING,
  FETCH_METRO_SUCCESS,
  FETCH_METRO_ERROR,
} from "../actions/metro-actions";

const initialState = {
  isLoading: false,
  metros: null,
  error: null,
};

const metroReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_METRO_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_METRO_SUCCESS:
      return {
        ...state,
        metros: action.payload,
        isLoading: false,
      };
    case FETCH_METRO_ERROR:
      return {
        ...state,
        error: 'Error fetching metros',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default metroReducer;
