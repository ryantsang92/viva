/*
  Metro Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_METRO_IS_LOADING,
  FETCH_METRO_SUCCESS,
  FETCH_METRO_ERROR,
  SAVE_SELECTED_METRO,
  CLEAR_SELECTED_METRO,
} from "../actions/metro-actions";
import { newYork } from "../app-constants";

const initialState = {
  isLoading: false,
  metros: null,
  error: null,
  selectedMetro: newYork,
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
        error: "Error fetching metros",
        isLoading: false,
      };
    case SAVE_SELECTED_METRO: {
      return {
        ...state,
        selectedMetro: action.data,
      };
    }
    case CLEAR_SELECTED_METRO: {
      return {
        ...state,
        selectedMetro: null,
      };
    }
    default:
      return state;
  }
};

export default metroReducer;
