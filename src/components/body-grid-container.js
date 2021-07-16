/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchLocationsV2,
  clearRefresh,
  fetchLocationsMobile,
} from "../actions/location-actions";
import {
  selectSelectedLocation,
  selectRefresh,
  selectMapBounds,
  selectSelectedCity,
} from "../selectors/location-selectors";
import { fetchVideosV2, fetchVideosMobile } from "../actions/video-actions";
import BodyGrid from "./body-grid";
import {
  selectPlaceImagePanelOpen,
  selectPlaceVideoPanelOpen,
} from "../selectors/place-panel-selectors";
import { fetchMetros } from "../actions/metro-actions";

const mapStateToProps = (state) => {
  return {
    selectedLocation: selectSelectedLocation(state),
    selectedCity: selectSelectedCity(state),
    refresh: selectRefresh(state),
    mapBounds: selectMapBounds(state),
    imagePanelOpen: selectPlaceImagePanelOpen(state),
    videoPanelOpen: selectPlaceVideoPanelOpen(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearRefresh: () => dispatch(clearRefresh()),
  fetchLocationsV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax)),
  fetchVideosV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchVideosV2(latMin, latMax, lngMin, lngMax)),
  fetchVideosMobile: (metro) => dispatch(fetchVideosMobile(metro)),
  fetchLocationsMobile: (metro) => dispatch(fetchLocationsMobile(metro)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyGrid);
