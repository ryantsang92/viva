/*
  Pill Box Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchHashtags } from "../actions/app-actions";
import {
  getHashtags,
  getHashtagsError,
  getHashtagsPending,
} from "../selectors/hashtag-selectors";
import PillBox from "./pill-box";

const mapStateToProps = (state) => ({
  error: getHashtagsError(state),
  hashtags: getHashtags(state),
  pending: getHashtagsPending(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchHashtags: () => dispatch(fetchHashtags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PillBox);
