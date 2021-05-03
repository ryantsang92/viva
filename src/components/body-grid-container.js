/*
  Body Grid Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocations } from "../actions/location-actions";
import BodyGrid from "./body-grid";

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
});

export default connect(null, mapDispatchToProps)(BodyGrid);
