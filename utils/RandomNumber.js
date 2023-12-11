export const RandomNumber = () => {
  try {
    const result = Math.round(Math.random() * 100);
    return result;
  } catch (error) {
    throw Error("error", error);
  }
};
