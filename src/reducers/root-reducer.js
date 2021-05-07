/*
  Root Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { combineReducers } from "redux";
import hashtagReducer from "./hashtag-reducer";
import videoReducer from "./video-reducer";
import locationReducer from "./location-reducer";
import placePanelReducer from "./place-panel-reducer";

const rootReducer = combineReducers({
  hashtagData: hashtagReducer,
  videoData: videoReducer,
  locationData: locationReducer,
  placePanelData: placePanelReducer,
});

export default rootReducer;
