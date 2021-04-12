/*
  Header Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  saveSelectedCity,
  clearSelectedCity,
} from "../actions/location-actions";
import Header from "./header";

const mapDispatchToProps = (dispatch) => ({
  saveSelectedCity: (city) => dispatch(saveSelectedCity(city)),
  clearSelectedCity: () => dispatch(clearSelectedCity()),
});

export default connect(null, mapDispatchToProps)(Header);
