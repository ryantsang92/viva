/*
  Category Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import {
  FETCH_CATEGORY_IS_LOADING,
  FETCH_CATEGORY_SUCCESS,
  FETCH_SELECTED_CATEGORY,
  CLEAR_SELECTED_CATEGORY,
} from "../actions/category-actions";

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case FETCH_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.data,
      };
    case CLEAR_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: null,
      };
    default:
      return state;
  }
};

export default categoryReducer;
