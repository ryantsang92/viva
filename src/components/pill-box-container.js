/*
  Pill Box Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import {
  fetchHashtags,
  fetchSelectedHashtag,
} from "../actions/hashtag-actions";
import { selectHashtagData, selectSelectedHashtag } from "../selectors/hashtag-selectors";
import PillBox from "./pill-box";

const mapStateToProps = (state) => {
  return {
    selectedHashtag: selectSelectedHashtag(state),
    hashtags: selectHashtagData(state).hashtags,
    // to-do: find a way to do optional chaining
    // hashtags: selectHashtagData(state)?.hashtags,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchHashtags: () => dispatch(fetchHashtags()),
  fetchSelectedHashtag: (hashtag) => dispatch(fetchSelectedHashtag(hashtag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PillBox);
