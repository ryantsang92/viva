/*
  Mobile menu container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchSelectedCategory } from "../actions/category-actions";
import MobileMenu from "./mobile-menu";

const mapDispatchToProps = (dispatch) => ({
  fetchSelectedCategory: (category) =>
    dispatch(fetchSelectedCategory(category)),
});

export default connect(null, mapDispatchToProps)(MobileMenu);
