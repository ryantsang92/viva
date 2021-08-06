/*
  Location card container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchGooglePlaceData } from "../../actions/place-panel-actions";
import { saveSelectedLocation } from "../../actions/location-actions";
import { clearSelectedCategory } from "../../actions/category-actions";
import { selectCategoryFromLocation } from "../../selectors/category-selectors";
import LocationCard from "./location-card";

const mapStateToProps = (state, ownProps) => {
  return {
    locationCategory: selectCategoryFromLocation(
      state,
      ownProps?.location?.categories[0] || null
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGooglePlaceData: (placeId) => dispatch(fetchGooglePlaceData(placeId)),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location)),
  clearSelectedCategory: () => dispatch(clearSelectedCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
