// src/utils.js
export const getImageUrl = (person, size = "s") =>
  `https://i.imgur.com/${person.imageId}${size}.jpg`;
