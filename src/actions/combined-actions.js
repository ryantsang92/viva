/*
  Combined actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { fetchLocationsV2 } from "./location-actions";
import { fetchVideosV2 } from "./video-actions";

export const refreshEverything = (mapBounds) => {
  const { latMin, latMax, lngMin, lngMax } = mapBounds;

  return (dispatch) => {
    dispatch(fetchLocationsV2(latMin, latMax, lngMin, lngMax));
    dispatch(fetchVideosV2(latMin, latMax, lngMin, lngMax));
  };
};
