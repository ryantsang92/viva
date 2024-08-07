/*
  Places videos container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchPlaceVidsData,
  openPlaceVideoPanel,
  closePlaceImagePanel,
} from "../../actions/place-panel-actions";
import { selectPlaceVideosData } from "../../selectors/place-panel-selectors";
import PlaceVideos from "./place-videos";

const mapStateToProps = (state) => {
  return {
    videos: selectPlaceVideosData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceVidsData: (locationId) => dispatch(fetchPlaceVidsData(locationId)),
  openPlaceVideoPanel: () => dispatch(openPlaceVideoPanel()),
  closePlaceImagePanel: () => dispatch(closePlaceImagePanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceVideos);
