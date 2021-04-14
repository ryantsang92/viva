/*
  Header Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  saveSelectedCity,
  clearSelectedCity,
  clearSelectedLocation,
} from "../actions/location-actions";
import { selectSelectedCity } from "../selectors/location-selectors";
import { selectSelectedVideo } from "../selectors/video-selectors";
import { clearSelectedVideo } from "../actions/video-actions";
import Header from "./header";

const mapStateToProps = (state) => {
  return {
    selectedVideo: selectSelectedVideo(state),
    selectedCity: selectSelectedCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSelectedCity: (city) => dispatch(saveSelectedCity(city)),
  clearSelectedCity: () => dispatch(clearSelectedCity()),
  clearSelectedVideo: () => dispatch(clearSelectedVideo()),
  clearSelectedLocation: () => dispatch(clearSelectedLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
