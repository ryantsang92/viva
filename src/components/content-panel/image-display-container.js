/*
  Image display container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { selectSelectedLocation } from "../../selectors/location-selectors";
import ImageDisplay from "./image-display";

const mapStateToProps = (state) => ({
  location: selectSelectedLocation(state),
});

export default connect(mapStateToProps, null)(ImageDisplay);
