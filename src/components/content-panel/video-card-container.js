/*
  Video Card Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchSelectedVideo,
  clearSelectedVideo,
} from "../../actions/video-actions";
import VideoCard from "./video-card";

const mapDispatchToProps = (dispatch) => ({
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  fetchSelectedVideo: (video) => dispatch(fetchSelectedVideo(video)),
});

export default connect(null, mapDispatchToProps)(VideoCard);
