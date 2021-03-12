/*
  Pill Box Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchVideos } from "../actions/app-actions";
import { selectVideos } from "../selectors/video-selectors";
import VideoGrid from "./video-grid";

const mapStateToProps = (state) => ({
  videos: selectVideos(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
