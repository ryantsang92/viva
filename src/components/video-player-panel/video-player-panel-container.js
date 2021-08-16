/*
  Video player panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { selectLocationByVideo } from "../../selectors/location-selectors";
import VideoPlayerPanel from "./video-player-panel";

const mapStateToProps = (state, ownProps) => ({
  location: selectLocationByVideo(state, ownProps.video),
});

export default connect(mapStateToProps)(VideoPlayerPanel);
