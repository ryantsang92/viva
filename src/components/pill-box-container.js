/*
  Pill Box Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchHashtags } from "../actions/app-actions";
import { selectHashtags } from "../selectors/hashtag-selectors";
import PillBox from "./pill-box";

const mapStateToProps = (state) => ({
  hashtags: selectHashtags(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchHashtags: () => dispatch(fetchHashtags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PillBox);
