/*
  Video player panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { clearSelectedVideo } from "../../actions/video-actions";
import VideoPanel from "./video-player-panel";

const mapDispatchToProps = (dispatch) => ({
    clearSelectedVideo: () => dispatch(clearSelectedVideo()),
});

export default connect(null, mapDispatchToProps)(VideoPanel);
