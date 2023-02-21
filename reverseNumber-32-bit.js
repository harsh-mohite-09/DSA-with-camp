const reversedBits = (x) => {
  let numStr = x.toString(2);
  let numBinaryStr = numStr.padStart(32, 0);
  let reversedStr = numBinaryStr.split("").reverse().join("");
  let result = parseInt(reversedStr, 2);

  return result;
};

console.log(reversedBits(1));
