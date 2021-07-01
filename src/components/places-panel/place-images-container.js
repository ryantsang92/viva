/*
  Places images container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { storeImages } from "../../actions/place-panel-actions";
import PlaceImages from "./place-images";

const mapDispatchToProps = (dispatch) => ({
  storeImages: (images) => dispatch(storeImages(images)),
});

export default connect(null, mapDispatchToProps)(PlaceImages);
