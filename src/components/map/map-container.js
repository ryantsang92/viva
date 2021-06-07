/*
  Map container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchLocationsV2,
  clearSelectedLocation,
  saveSelectedLocation,
  activateFilter,
  saveMapBounds,
} from "../../actions/location-actions";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import { clearSelectedHashtag } from "../../actions/hashtag-actions";
import { clearSelectedVideo } from "../../actions/video-actions";
import {
  selectLocations,
  selectSelectedLocation,
  selectLocationIsFetching,
  selectMapBounds,
  selectSelectedCity
} from "../../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedCity = selectSelectedCity(state);

  return {
    locations: selectLocations(state, selectedHashtag, selectedCity),
    selectedLocation: selectSelectedLocation(state),
    selectedCity: selectedCity,
    mapBounds: selectMapBounds(state),
    loading: selectLocationIsFetching(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  activateFilter: () => dispatch(activateFilter()),
  clearSelectedHashtag: () => dispatch(clearSelectedHashtag()),
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  fetchLocationsV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax)),
  saveMapBounds: (bounds) => dispatch(saveMapBounds(bounds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
