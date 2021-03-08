/*
  Pill Box Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchHashtags } from "../actions/app-actions";
import {
  getHashtags,
} from "../selectors/hashtag-selectors";
import PillBox from "./pill-box";

const mapStateToProps = (state) => ({
  hashtags: getHashtags(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchHashtags: () => dispatch(fetchHashtags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PillBox);
