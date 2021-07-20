/*
  Places images container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  storeImages,
  openPlaceImagePanel,
  closePlaceVideoPanel
} from "../../actions/place-panel-actions";
import PlaceImages from "./place-images";

const mapDispatchToProps = (dispatch) => ({
  storeImages: (images) => dispatch(storeImages(images)),
  openPlaceImagePanel: () => dispatch(openPlaceImagePanel()),
  closePlaceVideoPanel: () => dispatch(closePlaceVideoPanel()),
});

export default connect(null, mapDispatchToProps)(PlaceImages);
