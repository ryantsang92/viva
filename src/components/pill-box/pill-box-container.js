/*
  Pill box container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchCategories,
  fetchSelectedCategory,
} from "../../actions/category-actions";
import { setRefresh } from "../../actions/location-actions";
import { selectSelectedCategory } from "../../selectors/category-selectors";
import PillBox from "./pill-box";

const mapStateToProps = (state) => {
  return {
    selectedCategory: selectSelectedCategory(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchSelectedCategory: (category) =>
    dispatch(fetchSelectedCategory(category)),
  setRefresh: () => dispatch(setRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PillBox);
