/*
  Header container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { setRefresh } from "../../actions/location-actions";
import {
  selectCategoryData,
  selectSelectedCategory,
} from "../../selectors/category-selectors";
import {
  fetchCategories,
  fetchSelectedCategory,
  clearSelectedCategory,
} from "../../actions/category-actions";
import { closePlacePanels } from "../../actions/combined-actions";
import CategoryDropdown from "./category-dropdown";

const mapStateToProps = (state) => {
  return {
    categories: selectCategoryData(state).categories,
    selectedCategory: selectSelectedCategory(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchSelectedCategory: (category) =>
    dispatch(fetchSelectedCategory(category)),
  clearSelectedCategory: () => dispatch(clearSelectedCategory()),
  setRefresh: () => dispatch(setRefresh()),
  closePlacePanels: () => dispatch(closePlacePanels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDropdown);
