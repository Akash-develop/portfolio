export const getImageUrl = (imageSrc) => {
  try {
    return require(`../assets/${imageSrc}`);
  } catch (error) {
    return "";
  }
};
