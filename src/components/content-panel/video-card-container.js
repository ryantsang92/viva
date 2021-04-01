/*
  Video Card Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  saveSelectedVideo,
  clearSelectedVideo,
} from "../../actions/video-actions";
import { saveSelectedLocation } from "../../actions/location-actions";
import { selectLocationById } from "../../selectors/location-selectors";
import { selectSelectedVideo } from "../../selectors/video-selectors";
import VideoCard from "./video-card";

const mapStateToProps = (state) => {
  // console.log(selectSelectedVideo(state));
  const selectedVideoId = selectSelectedVideo(state)
    ? selectSelectedVideo(state).location_id
    : null;
  return {
    associatedLocation: selectLocationById(state, selectedVideoId),
    // to-do: find a way to do optional chaining
    // locations: selectLocationData(state)?.locations,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  saveSelectedVideo: (video) => dispatch(saveSelectedVideo(video)),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard);
