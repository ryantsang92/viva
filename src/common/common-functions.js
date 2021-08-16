/*
  Common functions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/
import MapPinDefault from "../assets/map-pin-default.png";
import MapPinBlue from "../assets/map-pin-blue.png";
import MapPinOrange from "../assets/map-pin-orange.png";

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

export const renderMapPin = (categories) => {
  if (categories[0] === 1 || categories[0] === 6) {
    return MapPinDefault;
  }
  if (
    categories[0] === 2 ||
    categories[0] === 3 ||
    categories[0] === 4 ||
    categories[0] === 5 ||
    categories[0] === 8
  ) {
    return MapPinOrange;
  }
  if (
    categories[0] === 7 ||
    categories[0] === 9 ||
    categories[0] === 10 ||
    categories[0] === 11
  ) {
    return MapPinBlue;
  }
  return MapPinDefault;
};