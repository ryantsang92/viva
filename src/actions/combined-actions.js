/*
  Combined actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { fetchLocationsV2, clearSelectedLocation } from "./location-actions";
import { fetchVideosV2 } from "./video-actions";
import {
  closePlaceImagePanel,
  closePlaceVideoPanel,
} from "./place-panel-actions";

export const refreshEverything = (mapBounds) => {
  const { latMin, latMax, lngMin, lngMax } = mapBounds;

  return (dispatch) => {
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax));
    dispatch(fetchVideosV2(latMin, latMax, lngMin, lngMax));
  };
};

export const closePlacePanels = () => {
  return (dispatch) => {
    dispatch(clearSelectedLocation());
    dispatch(closePlaceImagePanel());
    dispatch(closePlaceVideoPanel());
  };
};
