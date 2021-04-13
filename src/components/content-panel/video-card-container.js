/*
  Video Card Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { saveSelectedLocation } from "../../actions/location-actions";
import { saveSelectedVideo } from "../../actions/video-actions";
import { selectLocationByVideo } from "../../selectors/location-selectors";
import VideoCard from "./video-card";

const mapStateToProps = (state, ownProps) => {
  return {
    videoLocation: selectLocationByVideo(state, ownProps.video),
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSelectedVideo: (video) => dispatch(saveSelectedVideo(video)),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard);
