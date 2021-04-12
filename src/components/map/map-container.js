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
import { selectSelectedVideo } from "../../selectors/video-selectors";
import {
  selectLocations,
  selectSelectedLocation,
  selectLocationById,
  selectLocationIsFetching,
} from "../../selectors/location-selectors";
import { selectSelectedCity } from "../../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedVideo = selectSelectedVideo(state);
  const selectedCity = selectSelectedCity(state);

  return {
    locations: selectLocations(state, selectedHashtag, selectedCity),
    selectedLocation: selectedVideo
      ? selectLocationById(state, selectedVideo.location_id)
      : selectSelectedLocation(state),
    loading: selectLocationIsFetching(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
