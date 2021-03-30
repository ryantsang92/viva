/*
  Map Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocations } from "../../actions/location-actions";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import { selectLocationData, selectLocationsByHashtag } from "../../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state, ownProps) => {
  const selectedHashtag = selectSelectedHashtag(state);
  return {
    locations: selectedHashtag
      ? selectLocationsByHashtag(state, selectedHashtag)
      : selectLocationData(state).locations,
    // to-do: find a way to do optional chaining
    // hashtags: selectLocationData(state)?.locations,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
