/*
  Video Card Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchSelectedVideo } from "../../actions/video-actions";
import VideoCard from "./video-card";

const mapDispatchToProps = (dispatch) => ({
    fetchSelectedVideo: (id) => dispatch(fetchSelectedVideo(id)),
});

export default connect(null, mapDispatchToProps)(VideoCard);
