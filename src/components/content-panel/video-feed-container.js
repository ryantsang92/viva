/*
  Video grid container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  selectVideos,
  selectVideoIsLoading,
} from "../../selectors/video-selectors";
import {
  selectPlaceImages,
  selectPlaceVideosData,
} from "../../selectors/place-panel-selectors";
import { clearRefresh } from "../../actions/location-actions";
import { closePlaceVideoPanel } from "../../actions/place-panel-actions";
import VideoFeed from "./video-feed";

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.placePanelMode ? ownProps.selectedLocation : null);
  // if (ownProps.placePanelMode) {
  //   console.log(
  //     selectVideos(
  //       state,
  //       ownProps.selectedCategory,
  //       ownProps.placePanelMode ? ownProps.selectedLocation : null,
  //       true
  //     )
  //   );
  // }
  return {
    videos: selectVideos(
      state,
      ownProps.selectedCategory,
      ownProps.placePanelMode ? ownProps.selectedLocation : null,
      true
    ),
    images: selectPlaceImages(state),
    placeVideos: selectPlaceVideosData(state),
    loading: selectVideoIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearRefresh: () => dispatch(clearRefresh()),
  closePlaceVideoPanel: () => dispatch(closePlaceVideoPanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoFeed);
