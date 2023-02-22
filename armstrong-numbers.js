// For a given 3 digit number, find whether it is armstrong number or not.
// An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
// Return "Yes" if it is a armstrong number else return "No".
// NOTE: 371 is an Armstrong number since 33 + 73 + 13 = 371

const armstrongNumber = (n) => {
  let number = n;
  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    sum += digit ** 3;
    number = Math.floor(number / 10);
  }

  return sum === n ? "Yes" : "No";
};

console.log(armstrongNumber(371));
console.log(armstrongNumber(370));
console.log(armstrongNumber(153));
console.log(armstrongNumber(152));
