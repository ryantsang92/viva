/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { selectSelectedVideo } from "../selectors/video-selectors";
import BodyGrid from "./body-grid";

const mapStateToProps = (state) => {
    return {
      selectedVideo: selectSelectedVideo(state),
    };
  };

export default connect(mapStateToProps, null)(BodyGrid);
