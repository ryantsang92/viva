/*
  Content panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { setRefresh } from "../../actions/location-actions";
import { clearSelectedCategory } from "../../actions/category-actions";
import { selectSelectedCategory } from "../../selectors/category-selectors";
import { selectSelectedLocation } from "../../selectors/location-selectors";
import ContentPanel from "./content-panel";

const mapStateToProps = (state) => {
  return {
    selectedCategory: selectSelectedCategory(state),
    selectedLocation: selectSelectedLocation(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearSelectedCategory: () => dispatch(clearSelectedCategory()),
  setRefresh: () => dispatch(setRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentPanel);
