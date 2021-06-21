/*
  Root Reducer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { combineReducers } from "redux";
import categoryReducer from "./category-reducer";
import videoReducer from "./video-reducer";
import locationReducer from "./location-reducer";
import placePanelReducer from "./place-panel-reducer";
import metroReducer from "./metro-reducer";

const rootReducer = combineReducers({
  categoryData: categoryReducer,
  videoData: videoReducer,
  locationData: locationReducer,
  placePanelData: placePanelReducer,
  metroData: metroReducer,
});

export default rootReducer;
