/*
  Pill Box Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchHashtags } from "../actions/hashtag-actions";
import { selectHashtagData } from "../selectors/hashtag-selectors";
import PillBox from "./pill-box";

const mapStateToProps = (state) => {
  return {
    hashtags: selectHashtagData(state).hashtags,
    // to-do: find a way to do optional chaining
    // hashtags: selectHashtagData(state)?.hashtags,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchHashtags: () => dispatch(fetchHashtags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PillBox);
