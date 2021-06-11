/*
  Places panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { clearSelectedLocation } from "../../actions/location-actions";
import {
  fetchGooglePlaceData,
  fetchYelpPlaceData,
  fetchInstagramPlaceData,
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
  fetchInstagramPlaceData: (instagramId) =>
    dispatch(fetchInstagramPlaceData(instagramId)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPanel);
