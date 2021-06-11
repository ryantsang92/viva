/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocationsV2, clearRefresh } from "../actions/location-actions";
import {
  selectSelectedLocation,
  selectRefresh,
  selectMapBounds,
} from "../selectors/location-selectors";
import { fetchVideosV2 } from "../actions/video-actions";
import BodyGrid from "./body-grid";

const mapStateToProps = (state) => ({
  selectedLocation: selectSelectedLocation(state),
  refresh: selectRefresh(state),
  mapBounds: selectMapBounds(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearRefresh: () => dispatch(clearRefresh()),
  fetchLocationsV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax)),
  fetchVideosV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchVideosV2(latMin, latMax, lngMin, lngMax)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyGrid);
