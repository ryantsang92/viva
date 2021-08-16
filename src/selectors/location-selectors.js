/*
  Location selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectLocationData = (state) => {
  return state?.locationData;
};

export const selectLocations = (state, category = null, city = null) => {
  const locations = selectLocationData(state)?.locations;

  if (category) {
    return locations?.filter((location) =>
      location?.categories?.includes(category?.id)
    );
  }
  return locations;
};

export const selectLocationIsFetching = (state) => {
  return selectLocationData(state)?.isFetching;
};

export const selectLocationError = (state) => {
  return selectLocationData(state)?.error;
};

export const selectLocationById = (state, id) => {
  return selectLocationData(state)?.locations?.find(
    (location) => location.id === id
  );
};

export const selectSelectedLocation = (state) => {
  return selectLocationData(state)?.selectedLocation;
};

export const selectSelectedCity = (state) => {
  return selectLocationData(state)?.selectedCity;
};

export const selectLocationByVideo = (state, video) => {
  return (
    selectLocationData(state)?.locations?.filter(
      (location) => location?.id === video?.location_id
    )[0] || null
  );
};

export const selectFilter = (state) => {
  return selectLocationData(state)?.filter;
};

export const selectMapBounds = (state) => {
  return selectLocationData(state)?.mapBounds;
};

export const selectRefresh = (state) => {
  return selectLocationData(state)?.refresh;
};
