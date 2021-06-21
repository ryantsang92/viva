/*
  Map container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchLocationsV2,
  clearSelectedLocation,
  saveSelectedLocation,
  saveMapBounds,
  setRefresh,
  clearRefresh,
} from "../../actions/location-actions";
import { selectSelectedCategory } from "../../selectors/category-selectors";
import { clearSelectedCategory } from "../../actions/category-actions";
import { clearSelectedVideo, fetchVideosV2 } from "../../actions/video-actions";
import {
  selectLocations,
  selectSelectedLocation,
  selectLocationIsFetching,
  selectMapBounds,
  selectSelectedCity,
  selectRefresh,
} from "../../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state) => {
  const selectedCategory = selectSelectedCategory(state);
  const selectedCity = selectSelectedCity(state);

  return {
    locations: selectLocations(state, selectedCategory, selectedCity),
    selectedLocation: selectSelectedLocation(state),
    selectedCity: selectedCity,
    mapBounds: selectMapBounds(state),
    loading: selectLocationIsFetching(state),
    refresh: selectRefresh(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  clearSelectedCategory: () => dispatch(clearSelectedCategory()),
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  fetchLocationsV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax)),
  saveMapBounds: (bounds) => dispatch(saveMapBounds(bounds)),
  setRefresh: () => dispatch(setRefresh()),
  clearRefresh: () => dispatch(clearRefresh()),
  fetchVideosV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchVideosV2(latMin, latMax, lngMin, lngMax)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
