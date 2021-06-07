/*
  Location card container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchPlaceData } from "../../actions/place-panel-actions";
import { saveSelectedLocation } from "../../actions/location-actions";
import { clearSelectedHashtag } from "../../actions/hashtag-actions";
import LocationCard from "./location-card";

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceData: (placeId) => dispatch(fetchPlaceData(placeId)),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedHashtag: () => dispatch(clearSelectedHashtag()),
});

export default connect(null, mapDispatchToProps)(LocationCard);
