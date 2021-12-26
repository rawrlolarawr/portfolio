export const KeyGen = (input) => {
  return `${Date.now() * Math.floor(Math.random() * 1000)}-${input.replace(
    /\s/g,
    '',
  )}`;
};
