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
import { selectVideos } from "../../selectors/video-selectors";
import PlaceVideos from "./place-videos";

const mapStateToProps = (state, ownProps) => {
  return {
    videos: selectVideos(state, null, ownProps.selectedLocation, false),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceVidsData: (locationId) => dispatch(fetchPlaceVidsData(locationId)),
  openPlaceVideoPanel: () => dispatch(openPlaceVideoPanel()),
  closePlaceImagePanel: () => dispatch(closePlaceImagePanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceVideos);
