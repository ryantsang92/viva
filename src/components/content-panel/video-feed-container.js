/*
  Video grid container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  selectVideos,
  selectVideoIsLoading,
} from "../../selectors/video-selectors";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import { selectSelectedCity } from "../../selectors/location-selectors";
import { clearRefresh } from "../../actions/location-actions";
import VideoFeed from "./video-feed";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedCity = selectSelectedCity(state);

  return {
    videos: selectVideos(state, selectedHashtag, selectedCity, true),
    loading: selectVideoIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearRefresh: () => dispatch(clearRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoFeed);
