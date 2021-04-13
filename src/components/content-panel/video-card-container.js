/*
  Video Card Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { saveSelectedVideo } from "../../actions/video-actions";
import VideoCard from "./video-card";

const mapDispatchToProps = (dispatch) => ({
  saveSelectedVideo: (video) => dispatch(saveSelectedVideo(video)),
});

export default connect(null, mapDispatchToProps)(VideoCard);
