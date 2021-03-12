/*
  Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { combineReducers } from "redux";
import hashtagReducer from "./hashtag-reducer";
import videoReducer from "./video-reducer";

const rootReducer = combineReducers({
  hashtagData: hashtagReducer,
  videoData: videoReducer,
});

export default rootReducer;
