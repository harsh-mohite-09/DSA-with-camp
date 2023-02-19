//Given an integer N , write program to count number of digits in N.

function countDigits(num) {
  let a = num;
  let count = 0;
  while (a > 0) {
    a = Math.floor(a / 10);
    count++;
  }
  return count;
}

console.log(countDigits(12345));
console.log(countDigits(8394));

// Given a number N. Count the number of digits in N which evenly divides N.

// Note :- Evenly divides means whether N is divisible by a digit i.e. leaves a remainder 0 when divided.

function evenlyDivides(num) {
  let a = num;
  count = 0;
  while (a > 0) {
    if (num % (a % 10) === 0) count++;
    a = Math.floor(a / 10);
  }
  return count;
}

console.log(evenlyDivides(123456));
