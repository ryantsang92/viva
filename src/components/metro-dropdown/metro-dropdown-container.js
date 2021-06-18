/*
  Metro dropdown container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchMetros } from "../../actions/metro-actions";
import { selectMetroData } from "../../selectors/metro-selectors";
import {
  saveSelectedCity,
  clearSelectedCity,
  clearSelectedLocation,
  setRefresh,
} from "../../actions/location-actions";
import MetroDropdown from "./metro-dropdown";

const mapStateToProps = (state) => {
  return {
    metroData: selectMetroData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMetros: () => dispatch(fetchMetros()),
  saveSelectedCity: (city) => dispatch(saveSelectedCity(city)),
  clearSelectedCity: () => dispatch(clearSelectedCity()),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  setRefresh: () => dispatch(setRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MetroDropdown);
