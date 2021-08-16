/*
  Category selectors

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const selectCategoryData = (state) => {
  return state?.categoryData;
};

export const selectCategoryIsFetching = (state) => {
  return selectCategoryData(state)?.isFetching;
};

export const selectCategoryError = (state) => {
  return selectCategoryData(state)?.error;
};

export const selectSelectedCategory = (state) => {
  return selectCategoryData(state)?.selectedCategory;
};

export const selectCategoryFromLocation = (state, categoryId) => {
  return selectCategoryData(state)?.categories?.filter(
    (category) => (category.id === categoryId)
  )[0];
};
