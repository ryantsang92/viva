/*
  Header container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  saveSelectedCity,
  clearSelectedCity,
  clearSelectedLocation,
  setRefresh,
} from "../actions/location-actions";
import { selectCategoryData } from "../selectors/category-selectors";
import { selectSelectedCity } from "../selectors/location-selectors";
import { selectSelectedVideo } from "../selectors/video-selectors";
import { clearSelectedVideo } from "../actions/video-actions";
import {
  fetchCategories,
  fetchSelectedCategory,
  clearSelectedCategory,
} from "../actions/category-actions";
import Header from "./header";

const mapStateToProps = (state) => {
  return {
    selectedVideo: selectSelectedVideo(state),
    selectedCity: selectSelectedCity(state),
    categories: selectCategoryData(state).categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSelectedCity: (city) => dispatch(saveSelectedCity(city)),
  clearSelectedCity: () => dispatch(clearSelectedCity()),
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchSelectedCategory: (category) =>
    dispatch(fetchSelectedCategory(category)),
  clearSelectedCategory: () => dispatch(clearSelectedCategory()),
  setRefresh: () => dispatch(setRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
