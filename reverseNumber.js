// Problem Statement: Given a number N reverse the number and print it.

function reverseNumber(num) {
  let a = num;
  let i = countDigits(num) - 1;
  let result = 0;
  while (a > 0) {
    result += 10 ** i * (a % 10);
    i--;
    a = Math.floor(a / 10);
  }
  return result;
}

function countDigits(num) {
  let n = num;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(reverseNumber(123));
console.log(reverseNumber(12345));
