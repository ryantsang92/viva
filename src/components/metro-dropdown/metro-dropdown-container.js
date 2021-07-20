/*
  Metro dropdown container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchMetros } from "../../actions/metro-actions";
import { selectMetroData } from "../../selectors/metro-selectors";
import {
  selectMapBounds,
  selectSelectedCity,
} from "../../selectors/location-selectors";
import {
  saveSelectedCity,
  clearSelectedLocation,
  setRefresh,
} from "../../actions/location-actions";
import { saveSelectedMetro } from "../../actions/metro-actions";
import MetroDropdown from "./metro-dropdown";
import { refreshEverything } from "../../actions/combined-actions";

const mapStateToProps = (state) => {
  return {
    metroData: selectMetroData(state),
    selectedCity: selectSelectedCity(state),
    mapBounds: selectMapBounds(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMetros: () => dispatch(fetchMetros()),
  saveSelectedCity: (city) => dispatch(saveSelectedCity(city)),
  saveSelectedMetro: (metro) => dispatch(saveSelectedMetro(metro)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  setRefresh: () => dispatch(setRefresh()),
  refreshEverything: (mapBounds) => dispatch(refreshEverything(mapBounds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MetroDropdown);
