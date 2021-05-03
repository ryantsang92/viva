/*
  Video grid container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video-actions";
import {
  selectVideos,
  selectVideoIsLoading,
} from "../../selectors/video-selectors";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import {
  selectFilter,
  selectSelectedCity,
  selectSelectedLocation,
} from "../../selectors/location-selectors";
import VideoGrid from "./video-grid";

const mapStateToProps = (state) => {
  const selectedHashtag = selectSelectedHashtag(state);
  const selectedCity = selectSelectedCity(state);
  const selectedLocation = selectSelectedLocation(state);
  const filterOn = selectFilter(state);

  return {
    videos: selectVideos(
      state,
      selectedHashtag,
      selectedCity,
      selectedLocation,
      filterOn,
      true,
    ),
    loading: selectVideoIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
