/*
  Places panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { clearSelectedLocation } from "../../actions/location-actions";
import { fetchPlaceData } from "../../actions/place-panel-actions";
import { selectPlaceData } from "../../selectors/place-panel-selectors";
import PlacesPanel from "./places-panel";

const mapStateToProps = (state) => {
  return {
    placeData: selectPlaceData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceData: (placeId) => dispatch(fetchPlaceData(placeId)),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPanel);
