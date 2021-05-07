/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocations } from "../actions/location-actions";
import { selectSelectedLocation } from "../selectors/location-selectors";
import BodyGrid from "./body-grid";

const mapStateToProps = (state) => ({
  selectedLocation: selectSelectedLocation(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyGrid);
