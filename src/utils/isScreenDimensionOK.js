export const isScreenDimensionOK = (minWidth, minHeight) => {
  return window.innerWidth >= minWidth && window.innerHeight >= minHeight;
};
