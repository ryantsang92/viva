/*
  Video player panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { clearSelectedVideo } from "../../actions/video-actions";
import { selectSelectedLocation } from "../../selectors/location-selectors";
import VideoPanel from "./video-player-panel";

const mapStateToProps = (state) => ({
  selectedLocation: selectSelectedLocation(state),
});

const mapDispatchToProps = (dispatch) => ({
    clearSelectedVideo: () => dispatch(clearSelectedVideo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel);
