/*
  Image feed container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { selectPlaceImages } from "../../selectors/place-panel-selectors";
import { closePlaceImagePanel } from "../../actions/place-panel-actions";
import ImageFeed from "./image-feed";

const mapStateToProps = (state) => {
  return {
    images: selectPlaceImages(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  closePlaceImagePanel: () => dispatch(closePlaceImagePanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageFeed);
