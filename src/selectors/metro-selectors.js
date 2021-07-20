/*
  Metro selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectMetroData = (state) => {
  return state?.metroData;
};

export const selectSelectedMetro = (state) => {
  return selectMetroData(state)?.selectedMetro;
};
