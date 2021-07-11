/*
  Video grid container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  selectVideos,
  selectVideoIsLoading,
} from "../../selectors/video-selectors";
import { selectPlaceImages, selectPlaceVideosData } from '../../selectors/place-panel-selectors';
import { selectSelectedCategory } from "../../selectors/category-selectors";
import { clearRefresh } from "../../actions/location-actions";
import VideoFeed from "./video-feed";

const mapStateToProps = (state) => {
  const selectedCategory = selectSelectedCategory(state);

  return {
    videos: selectVideos(state, selectedCategory, true),
    images: selectPlaceImages(state),
    placeVideos: selectPlaceVideosData(state),
    loading: selectVideoIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearRefresh: () => dispatch(clearRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoFeed);
