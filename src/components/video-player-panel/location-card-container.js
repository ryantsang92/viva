/*
  Location card container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchGooglePlaceData } from "../../actions/place-panel-actions";
import { saveSelectedLocation } from "../../actions/location-actions";
import { clearSelectedCategory } from "../../actions/category-actions";
import LocationCard from "./location-card";

const mapDispatchToProps = (dispatch) => ({
  fetchGooglePlaceData: (placeId) => dispatch(fetchGooglePlaceData(placeId)),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedCategory: () => dispatch(clearSelectedCategory()),
});

export default connect(null, mapDispatchToProps)(LocationCard);
