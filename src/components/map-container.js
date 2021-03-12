/*
  Map Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchLocations } from "../actions/location-actions";
import { selectLocationData } from "../selectors/location-selectors";
import Map from "./map";

const mapStateToProps = (state) => {
  return {
    locations: selectLocationData(state).locations,
    // to-do: find a way to do optional chaining
    // hashtags: selectLocationData(state)?.locations,
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchLocations: () => dispatch(fetchLocations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
