/*
  Map Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  clearSelectedLocation,
  fetchLocations,
  saveSelectedLocation,
} from "../../actions/location-actions";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import {
  selectLocationData,
  selectLocationsByHashtag,
  selectSelectedLocation,
} from "../../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  return {
    locations: selectedHashtag
      ? selectLocationsByHashtag(state, selectedHashtag)
      : selectLocationData(state).locations,
    selectedLocation: selectSelectedLocation(state),
    // to-do: find a way to do optional chaining
    // locations: selectLocationData(state)?.locations,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
