/*
  Map container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchLocationsV2,
  saveSelectedLocation,
  saveMapBounds,
  setRefresh,
  clearRefresh,
} from "../../actions/location-actions";
import { selectSelectedCategory } from "../../selectors/category-selectors";
import { refreshEverything } from "../../actions/combined-actions";
import { clearSelectedVideo, fetchVideosV2 } from "../../actions/video-actions";
import { closePlacePanels } from "../../actions/combined-actions";
import {
  selectLocations,
  selectSelectedLocation,
  selectLocationIsFetching,
  selectMapBounds,
  selectSelectedCity,
  selectRefresh,
} from "../../selectors/location-selectors";
import Map from "./map";
import { selectSelectedMetro } from "../../selectors/metro-selectors";

const mapStateToProps = (state) => {
  const selectedCategory = selectSelectedCategory(state);
  const selectedCity = selectSelectedCity(state);

  return {
    locations: selectLocations(state, selectedCategory, selectedCity),
    selectedLocation: selectSelectedLocation(state),
    selectedCity: selectedCity,
    selectedMetro: selectSelectedMetro(state),
    mapBounds: selectMapBounds(state),
    loading: selectLocationIsFetching(state),
    refresh: selectRefresh(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  closePlacePanels: () => dispatch(closePlacePanels()),
  refreshEverything: (mapBounds) => dispatch(refreshEverything(mapBounds)),
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
