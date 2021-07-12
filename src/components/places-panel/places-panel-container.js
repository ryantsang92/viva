/*
  Places panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { clearSelectedLocation } from "../../actions/location-actions";
import {
  fetchGooglePlaceData,
  fetchYelpPlaceData,
  closePlaceImagePanel,
  closePlaceVideoPanel,
} from "../../actions/place-panel-actions";
import { selectPlaceData } from "../../selectors/place-panel-selectors";
import PlacesPanel from "./places-panel";

const mapStateToProps = (state) => {
  return {
    placeData: selectPlaceData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGooglePlaceData: (placeId) => dispatch(fetchGooglePlaceData(placeId)),
  fetchYelpPlaceData: (yelpId) => dispatch(fetchYelpPlaceData(yelpId)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
  closePlaceImagePanel: () => dispatch(closePlaceImagePanel()),
  closePlaceVideoPanel: () => dispatch(closePlaceVideoPanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPanel);
