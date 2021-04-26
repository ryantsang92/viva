/*
  Content panel container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { deactivateFilter } from "../../actions/location-actions";
import { clearSelectedHashtag } from "../../actions/hashtag-actions";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import {
  selectFilter,
  selectSelectedLocation,
} from "../../selectors/location-selectors";
import ContentPanel from "./content-panel";

const mapStateToProps = (state) => {
  return {
    selectedHashtag: selectSelectedHashtag(state),
    selectedLocation: selectSelectedLocation(state),
    filterOn: selectFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearSelectedHashtag: () => dispatch(clearSelectedHashtag()),
  clearSelectedLocationFilter: () => dispatch(deactivateFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentPanel);
