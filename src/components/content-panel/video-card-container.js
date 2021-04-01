/*
  Video Card Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  saveSelectedVideo,
  clearSelectedVideo,
} from "../../actions/video-actions";
import VideoCard from "./video-card";

const mapDispatchToProps = (dispatch) => ({
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  saveSelectedVideo: (video) => dispatch(saveSelectedVideo(video)),
});

export default connect(null, mapDispatchToProps)(VideoCard);
