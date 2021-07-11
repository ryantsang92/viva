/*
  Image display container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { selectSelectedLocation } from "../../selectors/location-selectors";
import { closePlaceImagePanel } from "../../actions/place-panel-actions";
import ImageDisplay from "./image-display";

const mapStateToProps = (state) => ({
  location: selectSelectedLocation(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePlaceImagePanel: () => dispatch(closePlaceImagePanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);
