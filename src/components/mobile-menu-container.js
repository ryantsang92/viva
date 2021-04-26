/*
  Mobile menu container

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { connect } from "react-redux";
import { fetchSelectedHashtag } from "../actions/hashtag-actions";
import MobileMenu from "./mobile-menu";


const mapDispatchToProps = (dispatch) => ({
  fetchSelectedHashtag: (hashtag) => dispatch(fetchSelectedHashtag(hashtag)),
});

export default connect(null, mapDispatchToProps)(MobileMenu);
