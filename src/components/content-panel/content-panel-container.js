/*
  Content Panel Container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { selectSelectedHashtag } from "../../selectors/hashtag-selectors";
import ContentPanel from "./content-panel";

const mapStateToProps = (state) => {
  return {
    selectedHashtag: selectSelectedHashtag(state)
  };
};

export default connect(mapStateToProps, null)(ContentPanel);
