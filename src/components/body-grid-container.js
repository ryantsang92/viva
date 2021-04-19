/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocations } from "../actions/location-actions";
import { selectSelectedVideo } from "../selectors/video-selectors";
import BodyGrid from "./body-grid";

const mapStateToProps = (state) => {
  return {
    selectedVideo: selectSelectedVideo(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyGrid);
