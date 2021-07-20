/*
  Common functions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

export const sanitizeYelpURL = (url) => {
  return url?.replace("http://www.yelp.com/biz/", "");
};

export const shuffleArray = (array) => {
  if (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString(
    {},
    { timeZone: "UTC", month: "long", day: "2-digit", year: "numeric" }
  );
};
