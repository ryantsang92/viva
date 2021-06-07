/*
  Video grid container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchVideos, fetchVideosV2 } from "../../actions/video-actions";
import {
  selectVideos,
  selectVideoIsLoading,
} from "../../selectors/video-selectors";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import {
  selectMapBounds,
  selectSelectedCity,
} from "../../selectors/location-selectors";
import VideoFeed from "./video-feed";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedCity = selectSelectedCity(state);

  return {
    videos: selectVideos(state, selectedHashtag, selectedCity, true),
    mapBounds: selectMapBounds(state),
    loading: selectVideoIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideosV2: (latMin, latMax, lngMin, lngMax) =>
    dispatch(fetchVideosV2(latMin, latMax, lngMin, lngMax)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoFeed);
