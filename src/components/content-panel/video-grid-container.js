/*
  Video Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video-actions";
import {
  selectVideos,
  selectVideoIsLoading,
} from "../../selectors/video-selectors";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import { selectSelectedCity, selectSelectedLocation } from "../../selectors/location-selectors";
import VideoGrid from "./video-grid";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedCity = selectSelectedCity(state);
  const selectedLocation = null;
  // const selectedLocation = selectSelectedLocation(state);
  console.log(selectedLocation);

  return {
    videos: selectVideos(state, selectedHashtag, selectedCity, selectedLocation),
    loading: selectVideoIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
