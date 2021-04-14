/*
  Map container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  clearSelectedLocation,
  fetchLocations,
  saveSelectedLocation,
  activateFilter,
} from "../../actions/location-actions";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import {
  selectLocations,
  selectSelectedLocation,
  selectLocationIsFetching,
} from "../../selectors/location-selectors";
import { selectSelectedCity } from "../../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedCity = selectSelectedCity(state);

  return {
    locations: selectLocations(state, selectedHashtag, selectedCity),
    selectedLocation: selectSelectedLocation(state),
    selectedCity: selectedCity,
    loading: selectLocationIsFetching(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  activateFilter: () => dispatch(activateFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
