/*
  Place panel reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_PLACE_DATA_IS_LOADING,
  FETCH_PLACE_DATA_SUCCESS,
} from "../actions/place-panel-actions";

const initialState = {
  isLoading: false,
  placeData: {},
  error: null,
};

const placePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACE_DATA_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PLACE_DATA_SUCCESS:
      return {
        ...state,
        placeData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default placePanelReducer;
