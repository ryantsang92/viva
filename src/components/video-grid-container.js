/*
  Video Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchVideos } from "../actions/video-actions";
import { selectVideoData } from "../selectors/video-selectors";
import VideoGrid from "./video-grid";

const mapStateToProps = (state) => {
  return {
    videos: selectVideoData(state).videos,
    // to-do: find a way to do optional chaining
    // hashtags: selectVideoData(state)?.videos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
