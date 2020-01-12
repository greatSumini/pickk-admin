export const addLeadingZeros = (num: number, length: number) => {
  let result = num.toString();
  if (result.length >= length) {
    return result;
  }
  return new Array(length - result.length).fill("0").toString() + result;
};