/*
  Video player panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { clearSelectedVideo } from "../../actions/video-actions";
import { selectLocationByVideo } from "../../selectors/location-selectors";
import VideoPanel from "./video-player-panel";

const mapStateToProps = (state, ownProps) => ({
  selectedLocation: selectLocationByVideo(state, ownProps.video),
});

const mapDispatchToProps = (dispatch) => ({
    clearSelectedVideo: () => dispatch(clearSelectedVideo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel);
