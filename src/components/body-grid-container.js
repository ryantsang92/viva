/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocationsV2 } from "../actions/location-actions";
import {
  selectSelectedLocation,
  selectMapBounds,
  selectLocations,
} from "../selectors/location-selectors";
import BodyGrid from "./body-grid";

const mapStateToProps = (state) => ({
  locations: selectLocations(state),
  selectedLocation: selectSelectedLocation(state),
  mapBounds: selectMapBounds(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocationsV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyGrid);
